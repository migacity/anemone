import whiteroom from "../../assets/bg-whiteroom.webp";
import { ButtonOption, useUi } from "../uiManager";
import { resetCounter } from "../useState";

import crying from "../../assets/still-crying.webp";
import entrance from "../../assets/still-entrance.webp";
import jellyfish from "../../assets/still-jellyfish.webp";

export class PictureViewer extends Phaser.Scene {
  private picture!: Phaser.GameObjects.Image;
  private ui!: Phaser.GameObjects.Container;
  private uiManager!: {
    addButton: (options: ButtonOption[]) => void;
    removeButton: () => void;
  };

  private readonly images = [
    {
      title: "泣いているシーン",
      name: "crying",
      path: crying,
    },
    {
      title: "玄関先で",
      name: "entrance",
      path: entrance,
    },
    {
      title: "水中　くらげ",
      name: "jellyfish",
      path: jellyfish,
    },
  ];

  constructor() {
    super("pictureViewer");
  }

  preload(): void {
    this.load.image("whiteroom", whiteroom);
    this.images.forEach((v) => {
      this.load.image(v.name, v.path);
    });
  }

  create(): void {
    const { width, height } = this.game.canvas;
    this.add.image(width / 2, height / 2, "whiteroom");

    this.ui = this.add.container(width / 2, height / 2);
    this.uiManager = useUi(this.ui);

    // スチル選択ボタンを配置する。
    const w = 384 + 8;
    const h = 216 + 8;
    const dw = 420;
    const dh = 230;

    const buttons: ButtonOption[] = this.images.map(({ name }, i) => {
      const image = this.add.image(0, 0, name);
      image.setScale(0.3);
      const caption = this.add.container(undefined, undefined, [image]);
      return {
        type: "containerButton",
        top: Math.floor(i / 3) * dh - dh,
        left: (i % 3) * dw - dw,
        width: w,
        height: h,
        caption,
        onClick: () => {
          this.picture = this.add.image(width / 2, height / 2, name);
          this.picture.on("pointerup", () => {
            this.picture.destroy();
          });
          this.picture.setInteractive({ useHandCursor: true });
        },
        param: undefined,
      };
    });

    // 戻るボタンを追加する。
    const i = 8;
    const text = this.add.text(0, 0, "戻る", {
      fontSize: "24px",
      padding: { top: 4 },
    });
    const caption = this.add.container(undefined, undefined, [text]);
    text.setOrigin(0.5, 0.5);
    buttons.push({
      type: "containerButton",
      top: Math.floor(i / 3) * dh - dh,
      left: (i % 3) * dw - dw,
      width: w,
      height: h,
      caption,
      onClick: () => {
        resetCounter();
        this.scene.start("main");
      },
      param: undefined,
    });

    this.uiManager.addButton(buttons);
  }
}
