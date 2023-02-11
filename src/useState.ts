import { map, action } from "nanostores";

export interface GameStore {
  part: string;
  chapter: number;
  scenarioIndex: number;
  monologue1AlreadyRead: boolean;
}

export const store = map<GameStore>({
  part: "monologue1",
  chapter: 0,
  scenarioIndex: -1,
  monologue1AlreadyRead: false,
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

export const increment = action(store, "increment", (store) => {
  const t = store.get();
  store.set({
    ...t,
    scenarioIndex: t.scenarioIndex + 1,
  });
});
