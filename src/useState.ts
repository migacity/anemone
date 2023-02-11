import { persistentAtom } from "@nanostores/persistent"

export type GameStore = {
  part: string;
  chapter: number;
  scenarioIndex: number;
  monologue1AlreadyRead: boolean;
}

export const store = persistentAtom<GameStore>("game", {
  part: "monologue1",
  chapter: 0,
  scenarioIndex: -1,
  monologue1AlreadyRead: false,
},
  {
    encode: JSON.stringify,
    decode: JSON.parse,
  });

export const update =
  (payload: Partial<GameStore>) => {
    const t = store.get();
    store.set({
      ...t,
      ...payload,
    });
  }

export const increment = () => {
  const t = store.get();
  store.set({
    ...t,
    scenarioIndex: t.scenarioIndex + 1,
  });
};
