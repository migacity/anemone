import whiteroom from "../../assets/bg-whiteroom.jpg";
import startIcon from "../../assets/start.svg";
import stopIcon from "../../assets/stop.svg";
import { ButtonOption, useUi } from "../uiManager";
import { resetCounter } from "../useState";

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
    loop: false,
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
      title: "とめどなき白情 1",
      name: "tomedonaki1",
      path: [tomedonaki1_1_ogg, tomedonaki1_1_m4a],
    },
    {
      title: "とめどなき白情 2",
      name: "tomedonaki2",
      path: [tomedonaki2_2_ogg, tomedonaki2_2_m4a],
    },
    {
      title: "ヰ世界の宝石譚",
      name: "housekitan",
      path: [housekitan_1_ogg, housekitan_1_m4a],
    },
    {
      title: "シリウスの心臓 1",
      name: "sirius1",
      path: [sirius1_1_ogg, sirius1_1_m4a],
    },
    {
      title: "シリウスの心臓 2",
      name: "sirius2",
      path: [sirius2_1_ogg, sirius2_1_m4a],
    },
  ];

  constructor() {
    super("musicPlayer");
  }

  preload(): void {
    this.load.image("whiteroom", whiteroom);
    this.load.svg("start", startIcon);
    this.load.svg("stop", stopIcon);
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
    const w = 400;
    const h = 80;
    const dw = 420;
    const dh = 100;

    const buttons: ButtonOption[] = this.musics.map(({ title, name }, i) => {
      const icon = this.add.image(-w / 2 + (h * 3) / 4, 0, "start");
      const text = this.add.text(-w / 2 + h * 1.3, 0, title, {
        fontSize: "24px",
        padding: { top: 4 },
      });
      text.setOrigin(0, 0.5);
      const caption = this.add.container(undefined, undefined, [icon, text]);
      const onStop = (): Phaser.GameObjects.Image => icon.setTexture("start");
      return {
        type: "containerButton",
        top: Math.floor(i / 2) * dh - (dh * 3) / 2,
        left: (i % 2) * (2 * dw - w) + (w / 2 - dw),
        width: w,
        height: h,
        caption,
        onClick: () => {
          this.bgm?.stop();
          this.bgm?.off("complete");
          this.bgm?.off("stop");
          if (this.bgm?.key === name) {
            this.bgm.destroy();
            return;
          }

          this.bgm = this.game.sound.add(name, this.bgmConfig);
          this.bgm.on("complete", onStop);
          this.bgm.on("stop", onStop);
          this.bgm.play();
          icon.setTexture("stop");
        },
        param: undefined,
      };
    });

    // 戻るボタンを追加する。
    const i = this.musics.length;
    const text = this.add.text(0, 0, "戻る", {
      fontSize: "24px",
      padding: { top: 4 },
    });
    const caption = this.add.container(undefined, undefined, [text]);
    text.setOrigin(0.5, 0.5);
    buttons.push({
      type: "containerButton",
      top: Math.floor(i / 2) * dh - (dh * 3) / 2,
      left: (i % 2) * (2 * dw - w) + (w / 2 - dw),
      width: w,
      height: h,
      caption,
      onClick: () => {
        this.bgm?.stop();
        resetCounter();
        this.scene.start("main");
      },
      param: undefined,
    });

    this.uiManager.addButton(buttons);
  }
}
