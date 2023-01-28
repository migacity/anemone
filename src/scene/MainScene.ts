import mainImage from "../../assets/main.webp";
import { MessageWindow } from "./MessageWindowScene";
import { useInput } from "../useInput";
import { scenario, preload } from "../scenario";
import { GameObjects } from "phaser";
import { load, save, SaveData } from "../dataSaver";
import { ButtonOption, useUi } from "../uiManager";
import { store } from "../useState";

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
  private ui!: Phaser.GameObjects.Container;
  private uiManager!: {
    addButton: (options: ButtonOption[]) => void;
    removeButton: () => void;
  };

  constructor() {
    super("main");
    this.dialog = undefined;
    this.scenarioIndex = -1;
  }

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
    console.log(store.get());
    console.log(scenario[store.get().part][store.get().chapter]);
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

    const { setEventHandler } = useInput(this);
    setEventHandler(this.onClick);

    // ボタンを作るユーティリティを初期化する。
    this.ui = this.add.container(width / 2, height / 2);
    this.uiManager = useUi(this.ui);

    // メニューボタンを生成する。
    this.uiManager.addButton([
      {
        top: 130,
        left: -140,
        width: 160,
        height: 40,
        caption: "セーブ",
        onClick: (v: any) => console.log(v),
        param: "セーブ",
      },
      {
        top: 130,
        left: 32,
        width: 160,
        height: 40,
        caption: "ロード",
        onClick: (v: any) => console.log(v),
        param: "ロード",
      },
      {
        top: 130,
        left: 204,
        width: 160,
        height: 40,
        caption: "Skip",
        onClick: (v: any) => console.log(v),
        param: "Skip",
      },
      {
        top: 130,
        left: 376,
        width: 160,
        height: 40,
        caption: "ストーリー選択",
        onClick: () => this.scene.start("storySelect"),
        param: "ストーリー選択",
      },
      {
        top: 130,
        left: 548,
        width: 160,
        height: 40,
        caption: "ゲーム終了",
        onClick: (v: any) => console.log(v),
        param: "ゲーム終了",
      },
    ]);

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

  moveNext(to: Function, sceneName = "main"): void {
    store.set({
      ...store.get(),
      ...to(),
    });
    this.scenarioIndex = -1;
    this.scene.start(sceneName);
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
      code: scenario[store.get().part][store.get().chapter][this.scenarioIndex],
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
      const code =
        scenario[store.get().part][store.get().chapter][this.scenarioIndex];
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
          this.moveNext(code.to, code.sceneName);
          break;
      }
      // this.printParams();
    } while (
      this.scenarioIndex < 0 ||
      (scenario[store.get().part][store.get().chapter][this.scenarioIndex]
        .continue ??
        false)
    );
  }
}
