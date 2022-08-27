import mainImage from "../../assets/main.webp";
import { MessageWindow } from "./MessageWindowScene";

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
    this.add.image(width / 2, height / 2, "mainImage").setScale(2, 2);
    this.scene.launch("inputManager");
    this.dialog = new MessageWindow(this)
    this.add.existing(this.dialog);
    setTimeout(() =>
      this.dialog.setMessage(
        '拙者親方と申すは、御立会の内に御存知の御方も御座りましょうが、御江戸を発って二十里上方、相州小田原一色町を御過ぎなされて、青物町を上りへ御出でなさるれば、欄干橋虎屋藤右衛門、只今では剃髪致して圓斎と名乗りまする。'
      ),
      800
    )
  }
}
