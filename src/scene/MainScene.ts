import mainImage from "../../assets/main.webp";
import { MessageWindow } from "./MessageWindowScene";
// import { IObserver } from "../Observer";
// import { useGameState, GameStore } from "../State";
import { useInput } from "../useInput";
// const { resisterObserver, update, get } = useGameState();
import { scenario, preload } from "../scenario";
import { GameObjects } from "phaser";
import { load, save, SaveData } from "../dataSaver";

interface CharData {
  name: string;
  key: string;
}

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

  async create(): Promise<void> {
    this.scenarioIndex = -1;
    const { width, height } = this.game.canvas;
    const gameData = load();

    // 真っ黒な画面から始める。
    this.cameras.main.fadeOut(20);
    await new Promise((resolve) => setTimeout(resolve, 20));

    // 背景画像を表示する。
    this.bg = this.add.image(
      width / 2,
      height / 2,
      gameData?.datas[0].bg ?? "mainImage"
    );

    // 立ち絵用のコンテナを用意する。
    this.character = this.add.container(width / 2, height / 2);

    // 立ち絵データがあればロードする。
    (gameData?.datas[0].character ?? []).forEach(({ name, key }) => {
      const char = this.character.getByName(name);
      if (!(char instanceof Phaser.GameObjects.Image) && !(char === null))
        return;
      if (char === null) {
        const image = this.add.image(0, 0, key);
        image.setName(name);
        this.character.add(image);
      } else {
        char.setTexture(key);
      }
    });

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

    // シナリオが自動的に始まるように。
    this.scenarioIndex = gameData?.datas[0].scenarioIndex ?? -1;
    if (!(gameData?.datas[0].camera ?? true)) this.cameras.main.fadeIn(1000);
    await this.onClick();
  }

  async onClick(): Promise<void> {
    if (this.dialog?.status === "animating") {
      this.dialog.clicked();
    } else {
      await this.interpretation();
    }
  }

  moveNext(): void {
    this.scene.start("ending");
  }

  /** 表示しているシナリオの状態をconsoleに吐く。 */
  private printParams(): void {
    const character = this.character.list
      .map((v: GameObjects.GameObject): CharData | undefined => {
        if (!(v instanceof GameObjects.Image)) return undefined;
        return { name: v.name, key: v.texture.key };
      })
      .filter((item): item is NonNullable<typeof item> => item !== undefined);

    const params: SaveData = {
      scenarioIndex: this.scenarioIndex - 1,
      bg: this.bg.texture.key,
      character,
      code: scenario[this.scenarioIndex],
      camera: this.cameras.main.fadeEffect.direction,
    };

    if (import.meta.env.MODE === "development") console.log(params);
    save({
      monologue1Viewed: false,
      monologue2Viewed: false,
      datas: [params],
    });
  }

  async interpretation(): Promise<void> {
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
        case "fadeOut":
          if (code.time === undefined) code.time = 1000;
          this.cameras.main.fadeOut(code.time);
          break;
        case "fadeIn":
          if (code.time === undefined) code.time = 1000;
          this.cameras.main.fadeIn(code.time);
          break;
        case "wait":
          await new Promise((resolve) => setTimeout(resolve, code.time));
          break;
        case "moveNext":
          this.moveNext();
          break;
      }
      this.printParams();
    } while (
      this.scenarioIndex < 0 ||
      (scenario[this.scenarioIndex].continue ?? false)
    );
  }
}
