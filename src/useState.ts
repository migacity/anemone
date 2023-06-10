import { map, action } from "nanostores";

interface GameStore {
  part: string;
  chapter: number;
  scenarioIndex: number;
  isSkipMode: boolean;
  undoBuffer?: { part: string; chapter: number };
}

export const store = map<GameStore>({
  part: "monologue1",
  chapter: 0,
  scenarioIndex: -1,
  isSkipMode: false,
});

export const update = action(
  store,
  "update",
  (store, payload: Partial<Omit<GameStore, "undoBuffer">>) => {
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

export const pushBuffer = action(store, "pushBuffer", (store) => {
  const t = store.get();
  // シーン遷移のときは前のシーンをバッファに積んでおく。
  store.set({
    ...t,
    undoBuffer: { part: t.part, chapter: t.chapter },
  });
});

export const popBuffer = action(store, "popBuffer", (store) => {
  const { undoBuffer } = store.get();
  if (undoBuffer === undefined) return;
  update({ part: undoBuffer.part, chapter: undoBuffer.chapter });
});
