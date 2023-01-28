import whiteroom from "../../assets/bg-whiteroom.webp";
import { useInput } from "../useInput";
import { store } from "../useState";

export class StorySelect extends Phaser.Scene {
  constructor() {
    super("storySelect");
  }

  preload(): void {
    this.load.image("whiteroom", whiteroom);
  }

  create(): void {
    const { width, height } = this.game.canvas;
    this.add.image(width / 2, height / 2, "whiteroom");

    const { setEventHandler } = useInput(this);
    setEventHandler(this.onClick);
  }

  onClick(): void {
    store.set({ part: "stories", chapter: 0 });
    this.scene.start("main");
  }
}
