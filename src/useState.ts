import { map, action } from "nanostores";

export interface GameStore {
  part: string;
  chapter: number;
  scenarioIndex: number;
}

export const store = map<GameStore>({
  part: "monologue1",
  chapter: 0,
  scenarioIndex: -1,
});

export const increment = action(store, "increment", (store) => {
  const t = store.get();
  store.set({
    ...t,
    scenarioIndex: t.scenarioIndex + 1,
  });
});
