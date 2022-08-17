import logoImage from "../../assets/raiacity-logo.webp";

export class LoadingScene extends Phaser.Scene {
  constructor() {
    super("loading");
  }

  preload(): void {
    this.load.image("logoImage", logoImage);
  }

  create(): void {
    const { width, height } = this.game.canvas;
    this.add.image(width / 2, height / 2, "logoImage").setScale(2, 2);
    this.scene.launch("inputManager");
  }
}
