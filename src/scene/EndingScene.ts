import endingImage from "../../assets/fin.webp";
import { useInput } from "../useInput";

export class EndingScene extends Phaser.Scene {
  constructor() {
    super("ending");
  }

  preload(): void {
    this.load.image("endingImage", endingImage);
  }

  create(): void {
    const { width, height } = this.game.canvas;
    this.add.image(width / 2, height / 2, "endingImage").setScale(2, 2);

    const { setEventHandler } = useInput(this)
    setEventHandler(this.moveNext)
  }

  moveNext(): void {
    this.scene.start('credit')
  }
}
