import titleImage from "../../assets/title.webp";
import arcadia_ogg from "../../assets/arcadia.ogg";
import arcadia_m4a from "../../assets/arcadia.m4a?url";
import { useInput } from "../useInput";

// BGM: アルカディア

export class TitleScene extends Phaser.Scene {
  private music!: Phaser.Sound.BaseSound;
  constructor() {
    super("title");
  }

  preload(): void {
    this.load.image("titleImage", titleImage);
    this.load.audio("arcadia", [arcadia_ogg, arcadia_m4a]);
  }

  create(): void {
    const { width, height } = this.game.canvas;
    this.add.image(width / 2, height / 2, "titleImage");

    const { setEventHandler } = useInput(this);
    setEventHandler(this.moveNext);

    // BGMを流す。
    const soundConfig: Phaser.Types.Sound.SoundConfig = {
      mute: false,
      volume: 0.2,
      loop: true,
    };
    this.music = this.game.sound.add("arcadia", soundConfig);
    this.music.play();
  }

  moveNext(): void {
    this.music.stop();
    this.scene.start("main");
  }
}
