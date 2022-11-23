import creditImage from "../../assets/credit.webp";
import { useInput } from "../useInput";

export class CreditScene extends Phaser.Scene {
  constructor() {
    super("credit");
  }

  preload(): void {
    this.load.image("creditImage", creditImage);
  }

  create(): void {
    const { width, height } = this.game.canvas;
    this.add.image(width / 2, height / 2, "creditImage").setScale(2, 2);

    const { setEventHandler } = useInput(this)
    setEventHandler(this.moveNext)
  }

  moveNext(): void {
    this.scene.start('title')
  }
}
