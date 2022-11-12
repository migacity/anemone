import titleImage from "../../assets/title.webp";
import { useInput } from "../useInput";

export class TitleScene extends Phaser.Scene {
  constructor() {
    super("title");
  }

  preload(): void {
    this.load.image("titleImage", titleImage);
  }

  create(): void {
    const { width, height } = this.game.canvas;
    this.add.image(width / 2, height / 2, "titleImage").setScale(2, 2);
    // this.scene.launch("inputManager");

    const { setEventHandler } = useInput(this)
    setEventHandler(this.onClick)
  }
  
  onClick(): void {
    this.scene.launch('loading')
    this.scene.stop('title')
  }
}
