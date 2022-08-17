import mainImage from "../../assets/main.webp";

export class MainScene extends Phaser.Scene {
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
  }
}
