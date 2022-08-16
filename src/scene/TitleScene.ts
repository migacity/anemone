export class TitleScene extends Phaser.Scene {
  constructor() {
    super("title");
  }

  create(): void {
    const { width, height } = this.game.canvas;
    this.add
      .text(width / 2, height / 2, "アネモネの見上げた空")
      .setOrigin(0.5)
      .setPadding(4);
  }
}
