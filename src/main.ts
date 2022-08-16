import * as Phaser from "phaser";
import { TitleScene } from "./scene/TitleScene";
import "./style.css";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  parent: "app",
  pixelArt: false,
  scene: TitleScene,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};

// eslint-disable-next-line
new Phaser.Game(config);
