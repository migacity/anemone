// import { IObserver } from "../Observer";
import { GameStore } from "../State";
// const { resisterObserver } = useGameState();

const SceneName = {
  RAIA_LOGO: "loading",
  TITLE: "title",
  MAIN: "main",
  ENDING: "ending",
  CREDIT: "credit",
} as const;

export class SceneManager extends Phaser.Scene {
  constructor() {
    super("sceneManager");
    // resisterObserver(this);
  }

  paramsUpdate(newStore: GameStore, prevStore: GameStore): void {
    if (newStore.gameState.state === prevStore.gameState.state) {
      // gameStateが変わっていなかったら何もしない。
      return;
    }

    // シーンを切り替える。
    const next = SceneName[newStore.gameState.state];
    const prev = SceneName[prevStore.gameState.state];
    this.scene.start(next);
    this.scene.stop(prev);
  }
}
