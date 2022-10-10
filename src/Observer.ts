import { GameStore } from "./State";

export interface IObserver {
  paramsUpdate: (newStore: GameStore, prevStore: GameStore) => void;
}
