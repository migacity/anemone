import { GameState } from "./State";

export interface IObserver {
  paramsUpdate: (stage: GameState) => void;
}
