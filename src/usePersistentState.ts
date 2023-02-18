import { persistentAtom } from "@nanostores/persistent";

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
