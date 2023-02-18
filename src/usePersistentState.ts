import { persistentAtom } from "@nanostores/persistent";

export interface PersistentGameStore {
  monologue1AlreadyRead: boolean;
  monologue2AlreadyRead: boolean;
}

export const persistentStore = persistentAtom<PersistentGameStore>(
  "game",
  {
    monologue1AlreadyRead: false,
    monologue2AlreadyRead: false,
  },
  {
    encode: JSON.stringify,
    decode: JSON.parse,
  }
);

export const updateAndSave = (payload: Partial<PersistentGameStore>): void => {
  const t = persistentStore.get();
  persistentStore.set({
    ...t,
    ...payload,
  });
};
