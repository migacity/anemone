import mainImage from "../../assets/main.webp";
import { MessageWindow } from "./MessageWindowScene";
// import { IObserver } from "../Observer";
// import { useGameState, GameStore } from "../State";
import { useInput } from "../useInput";
// const { resisterObserver, update, get } = useGameState();
import { scenario, preload } from "../scenario";

export class MainScene extends Phaser.Scene {
  // 出来ればundefinedは無い方がいい。
  private dialog: MessageWindow | undefined;
  private scenarioIndex: number;
  private bg!: Phaser.GameObjects.Image;
  private character!: Phaser.GameObjects.Container;

  constructor() {
    super("main");
    // resisterObserver(this);
    this.dialog = undefined;
    this.scenarioIndex = -1;
  }

  // paramsUpdate(newStore: Readonly<GameStore>, prevStore: GameStore): void {
  //   if (
  //     (newStore.scenario !== prevStore.scenario ||
  //       newStore.scenarioPointer !== prevStore.scenarioPointer) &&
  //     this.dialog !== undefined
  //   ) {
  //     this.dialog.setMessage(get.currentScenario());
  //   }
  // }

  preload(): void {
    this.load.image("mainImage", mainImage);
    preload.forEach((v) => {
      switch (v.type) {
        case "imagePreload":
          this.load.image(v.name, v.path);
          break;
      }
    });
  }

  create(): void {
    this.scenarioIndex = -1;
    const { width, height } = this.game.canvas;

    // 背景画像を表示する。
    this.bg = this.add.image(width / 2, height / 2, "mainImage");

    // 立ち絵用のコンテナを用意する。
    this.character = this.add.container(width / 2, height / 2);

    // メッセージウィンドウを表示する。
    this.dialog = new MessageWindow(this);
    this.add.existing(this.dialog);

    // update("setScenario", {
    //   scenario: [
    //     "拙者親方と申すは、立会の内に御存知の御方も御座りましょうが、御江戸を発って二十里上方、相州小田原一色町を御過ぎなされて、青物町を上りへ御出でなさるれば、欄干橋虎屋藤右衛門、只今では剃髪致して圓斎と名乗りまする。",
    //     "元朝より大晦日まで、御手に入れまする此の薬は、昔、ちんの国の唐人、外郎という人、わが朝へ来たり、帝へ参内の折りから、此の薬を深く籠め置き、用ゆる時は一粒ずつ、冠の隙間より取り出だす。",
    //   ],
    // });

    // this.dialog.setMessage(get.currentScenario());

    const { setEventHandler } = useInput(this);
    // setEventHandler(this.moveNext)
    setEventHandler(this.onClick);
  }

  onClick(): void {
    if (this.dialog?.status === "animating") {
      this.dialog.clicked();
    } else {
      this.interpretation();
    }
  }

  moveNext(): void {
    this.scene.start("ending");
  }

  interpretation(): void {
    do {
      this.scenarioIndex += 1;
      const code = scenario[this.scenarioIndex];
      switch (code.type) {
        case "text":
          this.dialog?.setMessage(code.text);
          break;
        case "background":
          this.bg.setTexture(code.name);
          break;
        case "showCharacter": {
          const char = this.character.getByName(code.name);
          if (!(char instanceof Phaser.GameObjects.Image) && !(char === null))
            break;
          if (char === null) {
            const image = this.add.image(0, 0, code.face);
            image.setName(code.name);
            this.character.add(image);
          } else {
            char.setTexture(code.face);
          }
          break;
        }
        case "moveNext":
          this.moveNext();
          break;
      }
    } while (this.scenarioIndex < 0 || scenario[this.scenarioIndex].continue);
  }
}
