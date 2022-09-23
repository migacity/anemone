import mainImage from "../../assets/main.webp";
import { MessageWindow } from "./MessageWindowScene";
import { State } from "./State";

export class MainScene extends Phaser.Scene {
  private dialog!: MessageWindow;
  constructor() {
    super("main");
  }

  preload(): void {
    this.load.image("mainImage", mainImage);
  }

  create(): void {
    const { width, height } = this.game.canvas;
    const scenario = [
      "拙者親方と申すは、立会の内に御存知の御方も御座りましょうが、御江戸を発って二十里上方、相州小田原一色町を御過ぎなされて、青物町を上りへ御出でなさるれば、欄干橋虎屋藤右衛門、只今では剃髪致して圓斎と名乗りまする。",
      "元朝より大晦日まで、御手に入れまする此の薬は、昔、ちんの国の唐人、外郎という人、わが朝へ来たり、帝へ参内の折りから、此の薬を深く籠め置き、用ゆる時は一粒ずつ、冠の隙間より取り出だす。",
    ]
    const state = this.scene.get('state') as State

    // 背景画像を表示する。
    this.add.image(width / 2, height / 2, "mainImage").setScale(2, 2);

    // メッセージウィンドウを表示する。
    this.dialog = new MessageWindow(this);
    this.add.existing(this.dialog);

    // inputManagerをアクティブ化する。
    this.scene.launch("inputManager");

    // これはcreateのなかで良いの？
    setTimeout(
      () =>
        this.dialog.setMessage(
          scenario[state.pointer()]
        ),
      800
    );
  }
}
