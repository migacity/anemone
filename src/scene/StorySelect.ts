import whiteroom from "../../assets/bg-whiteroom.webp";
import { ButtonOption, useUi } from "../uiManager";
import { store } from "../useState";

export class StorySelect extends Phaser.Scene {
  private ui!: Phaser.GameObjects.Container;
  private uiManager!: {
    addButton: (options: ButtonOption[]) => void;
    removeButton: () => void;
  };

  constructor() {
    super("storySelect");
  }

  preload(): void {
    this.load.image("whiteroom", whiteroom);
  }

  create(): void {
    const { width, height } = this.game.canvas;
    this.add.image(width / 2, height / 2, "whiteroom");

    this.ui = this.add.container(width / 2, height / 2);
    this.uiManager = useUi(this.ui);

    // ストーリー選択ボタンを配置する。
    const w = 200;
    const h = 80;
    const dw = 300;
    const dh = 100;
    const buttons = [...Array(7)].map((_, i) => {
      return {
        top: Math.floor(i / 2) * dh - (dh * 3) / 2,
        left: (i % 2) * (2 * dw - w) + (w / 2 - dw),
        width: w,
        height: h,
        caption: `story ${i + 1}`,
        onClick: () => {
          store.set({
            part: "stories",
            chapter: i,
            scenarioIndex: -1,
          });
          this.scene.start("main");
        },
        param: undefined,
      };
    });
    this.uiManager.addButton(buttons);
  }
}
