export class InputManager extends Phaser.Scene {
  private keyEnter!: Phaser.Input.Keyboard.Key;

  constructor() {
    super({
      key: "inputManager",
      active: false,
    });
  }

  create(): void {
    this.keyEnter = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.ENTER
    );

    const { width, height } = this.game.canvas;
    const zone = this.add.zone(width / 2, height / 2, width, height);
    zone.setInteractive({
      useHandCursor: true,
    });
    zone.on("pointerdown", () => {
      this.moveNextScene();
    });
  }

  update(): void {
    if (this.keyEnter.isDown) {
      this.moveNextScene();
    }
  }

  moveNextScene(): void {
    if (this.scene.isVisible("title")) {
      this.scene.start("ending");
      this.scene.stop("title");
    } else if (this.scene.isVisible("ending")) {
      this.scene.start("title");
      this.scene.stop("ending");
    }
  }
}
