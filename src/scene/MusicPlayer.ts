import whiteroom from "../../assets/bg-whiteroom.webp";
import { ButtonOption, useUi } from "../uiManager";
import { update, resetCounter } from "../useState";

import arcadia_ogg from "../../assets/arcadia.ogg";
import arcadia_m4a from "../../assets/arcadia.m4a?url";
import housekitan_1_ogg from "../../assets/housekitan_1.ogg";
import housekitan_1_m4a from "../../assets/housekitan_1.m4a?url";
import kasumi_1_ogg from "../../assets/kasumi_1.ogg";
import kasumi_1_m4a from "../../assets/kasumi_1.m4a?url";
import sirius1_1_ogg from "../../assets/sirius1_1.ogg";
import sirius1_1_m4a from "../../assets/sirius1_1.m4a?url";
import sirius2_1_ogg from "../../assets/sirius2_1.ogg";
import sirius2_1_m4a from "../../assets/sirius2_1.m4a?url";
import tomedonaki1_1_ogg from "../../assets/tomedonaki1_1.ogg";
import tomedonaki1_1_m4a from "../../assets/tomedonaki1_1.m4a?url";
import tomedonaki2_2_ogg from "../../assets/tomedonaki2_2.ogg";
import tomedonaki2_2_m4a from "../../assets/tomedonaki2_2.m4a?url";

export class MusicPlayer extends Phaser.Scene {
  private bgm!: Phaser.Sound.BaseSound;
  private readonly bgmConfig: Phaser.Types.Sound.SoundConfig = {
    mute: false,
    volume: 0.2,
    loop: true,
  };

  private ui!: Phaser.GameObjects.Container;
  private uiManager!: {
    addButton: (options: ButtonOption[]) => void;
    removeButton: () => void;
  };

  private readonly musics = [
    {
      title: "霞がついてくる",
      name: "kasumi",
      path: [kasumi_1_ogg, kasumi_1_m4a],
    },
    { title: "ARCADIA", name: "arcadia", path: [arcadia_ogg, arcadia_m4a] },
    {
      title: "とめどなき白情",
      name: "tomedonaki1",
      path: [tomedonaki1_1_ogg, tomedonaki1_1_m4a],
    },
    {
      title: "とめどなき白情",
      name: "tomedonaki2",
      path: [tomedonaki2_2_ogg, tomedonaki2_2_m4a],
    },
    {
      title: "ヰ世界の宝石譚",
      name: "housekitan",
      path: [housekitan_1_ogg, housekitan_1_m4a],
    },
    {
      title: "シリウスの心臓",
      name: "sirius1",
      path: [sirius1_1_ogg, sirius1_1_m4a],
    },
    {
      title: "シリウスの心臓",
      name: "sirius2",
      path: [sirius2_1_ogg, sirius2_1_m4a],
    },
  ];

  constructor() {
    super("musicPlayer");
  }

  preload(): void {
    this.load.image("whiteroom", whiteroom);
    this.musics.forEach((v) => {
      this.load.audio(v.name, v.path);
    });
  }

  create(): void {
    const { width, height } = this.game.canvas;
    this.add.image(width / 2, height / 2, "whiteroom");

    this.ui = this.add.container(width / 2, height / 2);
    this.uiManager = useUi(this.ui);

    // 音楽選択ボタンを配置する。
    const w = 200;
    const h = 80;
    const dw = 300;
    const dh = 100;
    const buttons = this.musics.map(({ title, name }, i) => {
      return {
        top: Math.floor(i / 2) * dh - (dh * 3) / 2,
        left: (i % 2) * (2 * dw - w) + (w / 2 - dw),
        width: w,
        height: h,
        caption: title,
        onClick: () => {
          this.bgm = this.game.sound.add(name, this.bgmConfig);
          this.bgm.play();
        },
        param: undefined,
      };
    });

    // 戻るボタンを追加する。
    buttons.push();
    this.uiManager.addButton(buttons);
  }
}
