// import { useGameState } from "../State";
// const { update, get } = useGameState();

export class InputManager extends Phaser.Scene {
  private keyEnter!: Phaser.Input.Keyboard.Key;
  private zone!: Phaser.GameObjects.Zone;

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
    this.zone = this.add.zone(width / 2, height / 2, width, height);
    this.zone.setInteractive({
      useHandCursor: true,
    });
    console.log(['zone', this.zone])
    
    // // ここは呼び出すhandlerをSceneごとに登録する。
    // this.zone.on("pointerdown", () => {
    //   // this.moveNextScene();
    // });
  }

  setEventHandler(handler: Function) {
    console.log(this.zone)
    this.zone.on('pointerdown', handler)
  }

  removeEventHandler(handler: Function) {
    this.zone.off('pointerdown', handler)
  }

  update(): void {
    if (this.keyEnter.isDown) {
      // this.moveNextScene();
      this.zone.emit('pointerdown')
    }
  }

  // moveNextScene(): void {
  //   let next: string = this.currentScene;
  //   switch (this.currentScene) {
  //     case "loading":
  //       next = "title";
  //       break;

  //     case "title":
  //       next = "save-data";
  //       break;

  //     case "save-data":
  //       next = "main";
  //       break;

  //     case "main":
  //       if (!get.endOfScenario()) {
  //         // stateの更新はObserverでお知らせしないとかなー。
  //         update("inc");
  //       } else {
  //         next = "ending";
  //       }
  //       break;

  //     case "ending":
  //       next = "credit";
  //       break;

  //     case "credit":
  //       next = "title";
  //       break;

  //     default:
  //       next = this.currentScene;
  //       break;
  //   }
  //   // ここの対応がad-hocなのであとで修正してください。
  //   if (next === this.currentScene) return;
  //   this.scene.start(next);
  //   this.scene.stop(this.currentScene);
  //   this.currentScene = next;
  // }
}
