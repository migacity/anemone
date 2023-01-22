export interface GameStore {
  part: string;
  chapter: number;
}

const store: GameStore = {
  part: "",
  chapter: 0,
};

export const useState = (): { store: GameStore } => {
  return {
    store,
  };
};
