import whiteroom from "../../assets/bg-whiteroom.jpg"
import { MessageWindow } from "./MessageWindowScene";
import { useInput } from "../useInput";
import { scenario, preload } from "../scenario";
import { ButtonOption, useUi } from "../uiManager";
import {
  update,
  increment,
  resetCounter,
  store,
  pushBuffer,
} from "../useState";

export class MainScene extends Phaser.Scene {
  // 出来ればundefinedは無い方がいい。
  private dialog: MessageWindow | undefined;
  private bg!: Phaser.GameObjects.Image;
  private character!: Phaser.GameObjects.Container;
  private bgm!: Phaser.Sound.BaseSound;
  private readonly bgmConfig: Phaser.Types.Sound.SoundConfig;
  private ui!: Phaser.GameObjects.Container;
  private uiManager!: {
    addButton: (options: ButtonOption[]) => void;
    removeButton: () => void;
  };

  constructor() {
    super("main");
    this.dialog = undefined;

    // BGMの設定をする。
    this.bgmConfig = {
      mute: false,
      volume: 0.2,
      loop: true,
    };
  }

  preload(): void {
    this.load.image("whiteroom", whiteroom)
    preload.forEach((v) => {
      switch (v.type) {
        case "imagePreload":
          this.load.image(v.name, v.path);
          break;
        case "soundPreload":
          this.load.audio(v.name, v.path);
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
    this.bg = this.add.image(width / 2, height / 2, "whiteroom");

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
        type: "textButton",
        top: 130,
        left: -140,
        width: 160,
        height: 40,
        caption: "音楽鑑賞",
        onClick: () => {
          this.bgm?.pause();
          this.scene.start("musicPlayer");
        },
        param: "",
      },
      {
        type: "textButton",
        top: 130,
        left: 32,
        width: 160,
        height: 40,
        caption: "スチル鑑賞",
        onClick: () => {
          this.bgm?.pause();
          this.scene.start("pictureViewer");
        },
      },
      {
        type: "textButton",
        top: 130,
        left: 204,
        width: 160,
        height: 40,
        caption: "Skip",
        onClick: async () => {
          update({ isSkipMode: true });
          await this.interpretation();
        },
      },
      {
        type: "textButton",
        top: 130,
        left: 376,
        width: 160,
        height: 40,
        caption: "ストーリー選択",
        onClick: () => {
          pushBuffer();
          update({
            part: "monologue2",
            chapter: 0,
          });
          resetCounter();
          this.scene.start("main");
        },
        param: "ストーリー選択",
      },
      {
        type: "textButton",
        top: 130,
        left: 548,
        width: 160,
        height: 40,
        caption: "ゲーム終了",
        onClick: () => {
          update({
            part: "ending",
            chapter: 0,
          });
          resetCounter();
          this.scene.start("main");
        },
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
      update({ isSkipMode: false });
      resetCounter();
      this.bgm?.stop();
      this.scene.start(sceneName);
    } catch (e) {
      await this.onClick();
    }
  }

  async interpretation(): Promise<void> {
    do {
      increment();
      const code =
        scenario[store.get().part][store.get().chapter][
          store.get().scenarioIndex
        ];
      switch (code.type) {
        case "text":
          if (store.get().isSkipMode) {
            // dialogがanimateだった時のためにclickedを入れておきます。
            this.dialog?.clicked();
            this.dialog?.setMessageImmediate(code.text);
          } else {
            this.dialog?.setMessage(code.text);
          }
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
        case "playBgm":
          if (code.name === undefined) {
            this.bgm?.stop();
            break;
          }
          this.bgm = this.game.sound.add(code.name, this.bgmConfig);
          this.bgm.play();
          break;
      }
    } while (
      scenario[store.get().part][store.get().chapter][store.get().scenarioIndex]
        ?.continue ??
      false
    );

    // Skipモードのときは強制continueします。
    // setTimeoutを挟みたいから、上のwhile文とは別に書いています。
    // もしかしたらsetMessageImmediateの方にsetTimeoutを挟んだ方がいいのか？
    if (store.get().isSkipMode) {
      await new Promise((resolve) => setTimeout(resolve, 300));
      await this.interpretation();
    }
  }
}
