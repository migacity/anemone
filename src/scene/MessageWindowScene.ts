export class MessageWindow extends Phaser.GameObjects.Container {
  private box: Phaser.GameObjects.Rectangle;
  private text: Phaser.GameObjects.Text;
  private eventCounter!: number;
  private timedEvent: any;
  private dialogSpeed!: number;
  private markVisible!: boolean;

  constructor(public scene: Phaser.Scene) {
    super(scene, 0, 0)
    const cx = 640;
    const cy = 360;
    const width = 1280 - 2 * 20;
    const height = 720 - 2 * 20
    this.box = new Phaser.GameObjects.Rectangle(
      this.scene,
      cx, cy,
      width, height,
      0x000000,
      0.75,
    ).setStrokeStyle(1, 0xffffff);
    this.add(this.box);

    const dialogBoxTextStyle: Phaser.Types.GameObjects.Text.TextStyle = {
      wordWrap: { width: width - 2 * 16, useAdvancedWrap: true },
      padding: { top: 4 },
      fontSize: '24px',
    }

    this.text = new Phaser.GameObjects.Text(
      this.scene,
      cx - width / 2 + 16,
      cy - height / 2 + 16,
      "",
      dialogBoxTextStyle
    )
    this.add(this.text);
  }

  setMessage(message: string) {
    const dialog = message.split('');
    this.dialogSpeed = 2
    const _animateText = () => {
      this.eventCounter++;
      this.text.setText(this.text.text + dialog[this.eventCounter - 1])
      if (this.eventCounter === dialog.length) {
        this.timedEvent.remove();
        this.waitInput()
      }
    }

    this.eventCounter = 0;
    if (this.timedEvent) this.timedEvent.remove();

    const tmpText = '';
    this.text.setText(tmpText);

    this.timedEvent = this.scene.time.addEvent({
      delay: 150 - (this.dialogSpeed * 30),
      callback: _animateText,
      callbackScope: this,
      loop: true,
    })
  }

  waitInput() {
    this.dialogSpeed = 1
    const markText = '.'
    this.markVisible = true
    const _animateText = () => {
      const text = this.markVisible ? (this.text.text + markText) : this.text.text.slice(0, -1)
      this.text.setText(text)
      this.markVisible = !this.markVisible
    }
    this.timedEvent = this.scene.time.addEvent({
      delay: 500,
      callback: _animateText,
      callbackScope: this,
      loop: true,
    })
  }
}