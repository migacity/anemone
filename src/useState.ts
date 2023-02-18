import { map, action } from "nanostores";

interface GameStore {
  scenarioIndex: number;
}

export const store = map<GameStore>({
  scenarioIndex: -1,
});

export const resetCounter = action(store, "resetCounter", (store) => {
  store.set({
    scenarioIndex: -1,
  });
});

export const increment = action(store, "increment", (store) => {
  const t = store.get();
  store.set({
    ...t,
    scenarioIndex: t.scenarioIndex + 1,
  });
});
