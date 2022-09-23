const MessageWindowStates = {
  Standby: "standby",
  Animating: "animating",
  Pause: "pause",
} as const;

// - 待機
// - 文字表示アニメーション中
// - 表示完了
// - クリック待ち
type MessageWindowState =
  typeof MessageWindowStates[keyof typeof MessageWindowStates];

export class MessageWindow extends Phaser.GameObjects.Container {
  private readonly box: Phaser.GameObjects.Rectangle;
  private readonly text: Phaser.GameObjects.Text;
  private eventCounter!: number;
  private timerEvent: Phaser.Time.TimerEvent | undefined = undefined;
  private markVisible!: boolean;
  private classStatus: MessageWindowState;
  private messageText: string;

  constructor(public scene: Phaser.Scene) {
    // コンストラクタが異様に長いのが気に食わない。
    super(scene, 0, 0);
    const { width, height } = scene.game.canvas;

    // 4方向marginで指定するのが好きかなぁ。
    const [marginLeft, marginTop, marginRight, marginBottom] = [
      60, 480, 60, 40,
    ];

    // paddingBottomは使うところが無い。
    const [paddingLeft, paddingTop, paddingRight] = [40, 40, 40];

    const w = width - marginLeft - marginRight;
    const h = height - marginTop - marginBottom;
    const cx = marginLeft + w / 2;
    const cy = marginTop + h / 2;
    this.box = new Phaser.GameObjects.Rectangle(
      this.scene,
      cx,
      cy,
      w,
      h,
      0x000000,
      0.75
    ).setStrokeStyle(1, 0xffffff);
    this.add(this.box);

    const dialogBoxTextStyle: Phaser.Types.GameObjects.Text.TextStyle = {
      wordWrap: {
        width: w - paddingLeft - paddingRight,
        useAdvancedWrap: true,
      },
      padding: { top: 4 },
      fontSize: "24px",
    };

    this.text = new Phaser.GameObjects.Text(
      this.scene,
      cx - w / 2 + paddingLeft,
      cy - h / 2 + paddingTop,
      "",
      dialogBoxTextStyle
    );
    this.add(this.text);

    this.messageText = "";
    this.classStatus = "standby";
  }

  public setMessage(message: string): void {
    const animateText = (): void => {
      this.eventCounter++;
      this.text.setText(this.text.text + dialog[this.eventCounter - 1]);
      if (this.eventCounter === dialog.length) {
        if (this.timerEvent !== undefined) this.timerEvent.remove();
        this.classStatus = 'pause'
        this.waitInput();
      }
    };

    this.messageText = message;
    const dialog = message.split("");
    this.eventCounter = 0;
    if (this.timerEvent !== undefined) this.timerEvent.remove();

    const tmpText = "";
    this.text.setText(tmpText);
    this.classStatus = 'animating'

    this.timerEvent = this.scene.time.addEvent({
      delay: 90,
      callback: animateText,
      callbackScope: this,
      loop: true,
    });
  }

  public clicked(): void {
    if (this.classStatus !== 'animating') return
    if (this.timerEvent !== undefined) this.timerEvent.remove();
    this.classStatus = 'pause'
    this.waitInput();
  }

  // 違うんだよ。Classなんだから状態は自分で持ってるはずなんだよ。
  public waitInput(): void {
    const animateText = (): void => {
      const text = this.messageText + (this.markVisible ? markText : "");
      this.text.setText(text);
      this.markVisible = !this.markVisible;
    };

    const markText = ".";
    this.markVisible = true;
    if (this.timerEvent !== undefined) this.timerEvent.remove();

    this.timerEvent = this.scene.time.addEvent({
      delay: 500,
      callback: animateText,
      callbackScope: this,
      loop: true,
    });
  }
}
