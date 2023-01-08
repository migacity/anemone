import { Scenario } from "./scenario";

const StorageKey = "anemone";

type StorageType = "localStorage" | "sessionStorage";

function storageAvailable(type: StorageType) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      (e.code === 22 ||
        e.code === 1014 ||
        e.name === "quotaExceededError" ||
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      storage &&
      storage.length !== 0
    );
  }
}

interface SaveData {
  bg: string;
  character: { name: string; key: string }[];
  code: Scenario;
}

interface GameData {
  monologue1Viewed: boolean;
  monologue2Viewed: boolean;
  datas: SaveData[];
}

function save(data: GameData) {
  // localStorageが使えなかったら何も言わずにエラーを握りつぶすことにしました。
  if (!storageAvailable("localStorage")) return;

  try {
    window.localStorage.setItem(StorageKey, JSON.stringify(data));

    // セーブが成功したときはセーブされたデータを返したりしたほうがいい？
    return;
  } catch (e) {
    console.error(e);
  }
}

/** データをロードする。何もセーブされていないときはundefinedを返す。 */
function load(): GameData | undefined {
  // localStorageが使えなかったら何も言わずにエラーを握りつぶすことにしました。
  if (!storageAvailable("localStorage")) return undefined;

  const json = window.localStorage.getItem(StorageKey);
  if (json === null) return undefined;

  // ここは型チェック通るんだ。。
  const data: GameData = JSON.parse(json);
  return data;
}

export { save, load };
