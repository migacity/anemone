import * as Phaser from "phaser";
import { Scenes } from "./scene";
import "./style.css";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  parent: "app",
  pixelArt: false,
  scene: Scenes,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};

// eslint-disable-next-line
new Phaser.Game(config);
