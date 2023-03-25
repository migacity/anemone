import logoImage from "../../assets/guideline.webp";
import { useInput } from "../useInput";

export class LoadingScene extends Phaser.Scene {
  constructor() {
    super("loading");
  }

  preload(): void {
    this.load.image("logoImage", logoImage);
  }

  create(): void {
    const { width, height } = this.game.canvas;
    this.add.image(width / 2, height / 2, "logoImage");

    const { setEventHandler } = useInput(this);
    setEventHandler(this.onClick);
  }

  onClick(): void {
    this.scene.start("title");
  }
}
