import mainImage from "../../assets/main.webp";
import { MessageWindow } from "./MessageWindowScene";
import { useInput } from "../useInput";
import { scenario, preload } from "../scenario";
import { ButtonOption, useUi } from "../uiManager";
import {
  increment,
  persistentStore,
  resetCounter,
  store,
  update,
} from "../useState";

export class MainScene extends Phaser.Scene {
  // 出来ればundefinedは無い方がいい。
  private dialog: MessageWindow | undefined;
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
    const { width, height } = this.game.canvas;

    // 真っ黒な画面から始める。
    this.cameras.main.fadeOut(20);
    await new Promise((resolve) => setTimeout(resolve, 20));

    // 背景画像を表示する。
    this.bg = this.add.image(width / 2, height / 2, "mainImage");

    // 立ち絵用のコンテナを用意する。
    this.character = this.add.container(width / 2, height / 2);

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
    this.cameras.main.fadeIn(1000);
    await this.onClick();
  }

  async onClick(): Promise<void> {
    if (this.dialog?.status === "animating") {
      this.dialog.clicked();
    } else {
      await this.interpretation();
    }
  }

  async moveNext(to: Function, sceneName = "main"): Promise<void> {
    try {
      update({
        ...store.get(),
        ...to(),
      });
      resetCounter();
      this.scene.start(sceneName);
    } catch (e) {
      await this.onClick();
    }
  }

  async interpretation(): Promise<void> {
    do {
      increment();
      const code =
        scenario[persistentStore.get().part][persistentStore.get().chapter][
          store.get().scenarioIndex
        ];
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
          await this.moveNext(code.to, code.sceneName);
          break;
      }
    } while (
      scenario[persistentStore.get().part][persistentStore.get().chapter][
        store.get().scenarioIndex
      ]?.continue ??
      false
    );
  }
}
