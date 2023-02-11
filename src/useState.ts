import { map, action } from "nanostores";
import { persistentAtom } from "@nanostores/persistent";

interface GameStore {
  scenarioIndex: number;
}

export const store = map<GameStore>({
  scenarioIndex: -1,
});

export interface PersistentGameStore {
  part: string;
  chapter: number;
  monologue1AlreadyRead: boolean;
  monologue2AlreadyRead: boolean;
}

export const persistentStore = persistentAtom<PersistentGameStore>(
  "game",
  {
    part: "monologue1",
    chapter: 0,
    monologue1AlreadyRead: false,
    monologue2AlreadyRead: false,
  },
  {
    encode: JSON.stringify,
    decode: JSON.parse,
  }
);

export const update = (payload: Partial<PersistentGameStore>): void => {
  const t = persistentStore.get();
  persistentStore.set({
    ...t,
    ...payload,
  });
};

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
