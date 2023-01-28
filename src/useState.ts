import { map } from "nanostores";

export interface GameStore {
  part: string;
  chapter: number;
}

export const store = map<GameStore>({
  part: "monologue1",
  chapter: 0,
});
