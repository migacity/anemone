import { IObserver } from "./Observer";

interface GameState {
  scenarioPointer: number;
  scenario: string[];
}

interface StateGetter {
  endOfScenario: () => boolean;
  currentScenario: () => string;
}

const updateMessage = {
  Inc: "inc",
  SetScenario: "setScenario",
} as const;

type UpdateMessage = typeof updateMessage[keyof typeof updateMessage];

const state: GameState = {
  scenario: [],
  scenarioPointer: -1,
};

const observers: Set<IObserver> = new Set();

const useGameState = (): {
  resisterObserver: (o: IObserver) => void;
  update: (message: UpdateMessage, paylode?: Partial<GameState>) => void;
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
    paylode?: Partial<GameState>
  ): void => {
    switch (message) {
      case "inc":
        state.scenarioPointer++;
        break;

      case "setScenario":
        if (paylode?.scenario === undefined)
          throw new Error("scenario data is undefined");

        state.scenario = paylode.scenario;
        if (paylode?.scenarioPointer !== undefined) {
          state.scenarioPointer = paylode.scenarioPointer;
        } else {
          state.scenarioPointer = 0;
        }
        break;
    }
    notifyObservers();
  };

  const notifyObservers = (): void => {
    observers.forEach((o) => o.paramsUpdate(state));
  };

  const get: StateGetter = {
    endOfScenario() {
      return !(state.scenarioPointer < state.scenario.length - 1);
    },
    currentScenario() {
      return state.scenario[state.scenarioPointer];
    },
  };

  return {
    resisterObserver,
    update,
    get,
  };
};

export type { GameState };
export { useGameState };
