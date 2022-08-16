import titleImage from '../../assets/title.webp'

export class TitleScene extends Phaser.Scene {
  constructor() {
    super("title");
  }

    preload() {
    this.load.image('titleImage', titleImage);
    }

  create(): void {
    const { width, height } = this.game.canvas;
    this.add.image(width / 2, height / 2, 'titleImage').setScale(2, 2);
  }
}
