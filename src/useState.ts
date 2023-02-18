import { map, action } from "nanostores";

interface GameStore {
  part: string;
  chapter: number;
  scenarioIndex: number;
}

export const store = map<GameStore>({
  part: "monologue1",
  chapter: 0,
  scenarioIndex: -1,
});

export const update = action(
  store,
  "update",
  (store, payload: Partial<GameStore>) => {
    const t = store.get();
    store.set({
      ...t,
      ...payload,
    });
  }
);

export const resetCounter = action(store, "resetCounter", (store) => {
  const t = store.get();
  store.set({
    ...t,
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
