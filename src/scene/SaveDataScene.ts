import saveLoadImage from "../../assets/save-load.webp";

export class SaveDataScene extends Phaser.Scene {
  constructor() {
    super("save-data");
  }

  preload(): void {
    this.load.image("saveLoadImage", saveLoadImage);
  }

  create(): void {
    const { width, height } = this.game.canvas;
    this.add.image(width / 2, height / 2, "saveLoadImage").setScale(2, 2);
    this.scene.launch("inputManager");
  }
}
