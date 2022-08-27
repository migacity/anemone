export class InputManager extends Phaser.Scene {
  private keyEnter!: Phaser.Input.Keyboard.Key;
  private currentScene: string = "loading";

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
    let next: string;
    switch (this.currentScene) {
      case "loading":
        next = "title";
        break;

      case "title":
        next = "save-data";
        break;

      case "save-data":
        next = "main";
        break;

      case "main":
        next = "ending";
        break;

      case "ending":
        next = "credit";
        break;

      case "credit":
        next = "title";
        break;

      default:
        next = this.currentScene;
        break;
    }
    this.scene.start(next);
    this.scene.stop(this.currentScene);
    this.currentScene = next;
  }
}