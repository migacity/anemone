import titleImage from "../../assets/title.webp";
import normalButton from "../../assets/button_title_normal.webp";
import hoverButton from "../../assets/button_title_hover.webp";
import activeButton from "../../assets/button_title_active.webp";
import arcadia_ogg from "../../assets/arcadia.ogg";
import arcadia_m4a from "../../assets/arcadia.m4a?url";
import { useUi, ButtonOption } from "../uiManager";

// BGM: アルカディア

export class TitleScene extends Phaser.Scene {
  private music!: Phaser.Sound.BaseSound;
  private ui!: Phaser.GameObjects.Container;
  private uiManager!: {
    addButton: (options: ButtonOption[]) => void;
    removeButton: () => void;
  };

  constructor() {
    super("title");
  }

  preload(): void {
    this.load.image("titleImage", titleImage);
    this.load.image("normalButton", normalButton);
    this.load.image("hoverButton", hoverButton);
    this.load.image("activeButton", activeButton);
    this.load.audio("arcadia", [arcadia_ogg, arcadia_m4a]);
  }

  create(): void {
    const { width, height } = this.game.canvas;
    this.add.image(width / 2, height / 2, "titleImage");

    // BGMを流す。
    const soundConfig: Phaser.Types.Sound.SoundConfig = {
      mute: false,
      volume: 0.2,
      loop: true,
    };
    this.music = this.game.sound.add("arcadia", soundConfig);
    this.music.play();

    // スタートボタンを作成する。
    const buttonWidth = 300;
    const buttonHeight = 80;
    this.ui = this.add.container(width / 2, height / 2);
    this.uiManager = useUi(this.ui);

    const buttonImage = this.add.image(0, 0, "normalButton");
    const buttonContainer = this.add.container(undefined, undefined, [
      buttonImage,
    ]);
    buttonContainer.setSize(buttonWidth, buttonHeight);
    buttonContainer.setInteractive({ useHandCursor: true });

    const toHover = (): Phaser.GameObjects.Image => buttonImage.setTexture("hoverButton");
    const toActive = (): Phaser.GameObjects.Image => buttonImage.setTexture("activeButton");
    const toNormal = (): Phaser.GameObjects.Image => buttonImage.setTexture("normalButton");
    buttonContainer.on(
      // スマートフォンのタップをしたときは
      // pointerdownではなくpointeroverが発火する。
      "pointerover",
      ({ event }: { event: MouseEvent | TouchEvent }) => {
        if (event instanceof TouchEvent) {
          toActive();
        } else {
          toHover();
        }
      }
    );
    buttonContainer.on("pointerout", toNormal);
    buttonContainer.on("pointerdown", toActive);
    buttonContainer.on("pointerup", () => {
      if (buttonImage.texture.key !== "activeButton") return;
      this.moveNext();
    });

    const buttons: ButtonOption[] = [
      {
        type: "containerButton",
        top: 80,
        left: -297,
        width: 300,
        height: 80,
        caption: buttonContainer,
        onClick: () => this.moveNext(),
      },
    ];

    this.uiManager.addButton(buttons);
  }

  moveNext(): void {
    this.music.stop();
    this.scene.start("main");
  }
}
