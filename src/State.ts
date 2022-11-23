import { IObserver } from "./Observer";
import { reducer, GameState } from "./StateMachine";

interface GameStore {
  scenarioPointer: number;
  scenario: string[];
  gameState: GameState;
}

interface StateGetter {
  endOfScenario: () => boolean;
  currentScenario: () => string;
  currentState: () => GameState;
}

const updateMessage = {
  Inc: "inc",
  SetScenario: "setScenario",
  MoveToTitle: "moveToTitle",
  MoveToMain: "moveToMain",
  ModeToEnding: "moveToEnding",
  MoveToCredit: "moveToCredit",
} as const;

type UpdateMessage = typeof updateMessage[keyof typeof updateMessage];

const store: GameStore = {
  scenario: [],
  scenarioPointer: -1,
  gameState: { state: "RAIA_LOGO" },
};

const observers: Set<IObserver> = new Set();

const useGameState = (): {
  resisterObserver: (o: IObserver) => void;
  update: (message: UpdateMessage, paylode?: Partial<GameStore>) => void;
  get: StateGetter;
} => {
  const resisterObserver = (o: IObserver): void => {
    if (!observers.has(o)) observers.add(o);
  };

  // updateをgetと同じようにオブジェクトで書くと、
  // notifyObservers()を都度書かなければならないので
  // 書き忘れが出そう。
  const update = (
    message: UpdateMessage,
    paylode?: Partial<GameStore>
  ): void => {
    const prevStore = JSON.parse(JSON.stringify(store));

    switch (message) {
      case "inc":
        store.scenarioPointer++;
        break;

      case "setScenario":
        if (paylode?.scenario === undefined)
          throw new Error("scenario data is undefined");

        store.scenario = paylode.scenario;
        if (paylode?.scenarioPointer !== undefined) {
          store.scenarioPointer = paylode.scenarioPointer;
        } else {
          store.scenarioPointer = 0;
        }
        break;

      case "moveToTitle":
        store.gameState = reducer(store.gameState, { type: "TO_TITLE" });
        break;

      case "moveToMain":
        store.gameState = reducer(store.gameState, { type: "TO_MAIN" });
        break;

      case "moveToEnding":
        store.gameState = reducer(store.gameState, { type: "TO_ENDING" });
        break;

      case "moveToCredit":
        store.gameState = reducer(store.gameState, { type: "TO_CREDIT" });
        break;

      default:
        // 何にも更新が無いときはnotifyObserver叩かないで抜けるといいよ。
        return;
    }
    notifyObservers(prevStore);
  };

  const notifyObservers = (prevStore: GameStore): void => {
    const newStore: Readonly<GameStore> = store;
    observers.forEach((o) => o.paramsUpdate(newStore, prevStore));
  };

  const get: StateGetter = {
    endOfScenario() {
      return !(store.scenarioPointer < store.scenario.length - 1);
    },
    currentScenario() {
      return store.scenario[store.scenarioPointer];
    },
    currentState() {
      return store.gameState;
    },
  };

  return {
    resisterObserver,
    update,
    get,
  };
};

export type { GameStore };
export { useGameState };
