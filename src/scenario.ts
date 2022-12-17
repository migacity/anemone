import bench from "../assets/bg-bench.webp";
import chara_A1 from "../assets/chara-A1.webp";
import chara_A2 from "../assets/chara-A2.webp";
import chara_A3 from "../assets/chara-A3.webp";
import chara_A4 from "../assets/chara-A4.webp";
import chara_A5 from "../assets/chara-A5.webp";
import chara_A6 from "../assets/chara-A6.webp";
import chara_B1 from "../assets/chara-B1.webp";
import chara_B2 from "../assets/chara-B2.webp";
import chara_B3 from "../assets/chara-B3.webp";
import chara_B4 from "../assets/chara-B4.webp";
import chara_B5 from "../assets/chara-B5.webp";
import chara_B6 from "../assets/chara-B6.webp";
interface ScenarioText {
  type: "text";
  text: string;
  continue?: boolean;
}

interface BackgroundImage {
  type: "background";
  name: string;
  continue?: boolean;
}

interface ShowCharacter {
  type: "showCharacter";
  name: string;
  face: string;
  continue?: boolean;
}

interface MoveNext {
  type: "moveNext";
  continue?: false;
}

interface ImagePreload {
  type: "imagePreload";
  name: string;
  path: string;
}

type Preload = ImagePreload;

type Scenario = ScenarioText | BackgroundImage | ShowCharacter | MoveNext;

export const preload: Preload[] = [
  { type: "imagePreload", name: "bench", path: bench },
  { type: "imagePreload", name: "chara_A1", path: chara_A1 },
  { type: "imagePreload", name: "chara_A2", path: chara_A2 },
  { type: "imagePreload", name: "chara_A3", path: chara_A3 },
  { type: "imagePreload", name: "chara_A4", path: chara_A4 },
  { type: "imagePreload", name: "chara_A5", path: chara_A5 },
  { type: "imagePreload", name: "chara_A6", path: chara_A6 },
  { type: "imagePreload", name: "chara_B1", path: chara_B1 },
  { type: "imagePreload", name: "chara_B2", path: chara_B2 },
  { type: "imagePreload", name: "chara_B3", path: chara_B3 },
  { type: "imagePreload", name: "chara_B4", path: chara_B4 },
  { type: "imagePreload", name: "chara_B5", path: chara_B5 },
  { type: "imagePreload", name: "chara_B6", path: chara_B6 },
];

export const scenario: Scenario[] = [
  // 背景 白い部屋
  { type: "background", name: "bench", continue: true },
  { type: "showCharacter", name: "sekai", face: "chara_A1", continue: false },
  { type: "text", text: "「・・・・」", continue: false },
  { type: "text", text: "「ぉーい」", continue: false },
  { type: "text", text: "「もしもーし…」", continue: false },
  { type: "text", text: "「聞こえてない？」", continue: false },
  { type: "text", text: "「聞こえていませんか～？」", continue: false },
  { type: "text", text: "「あ…つながった」", continue: false },
  // blank
  { type: "text", text: "「こんにちわ」", continue: false },
  { type: "text", text: "「初めまして」", continue: false },
  { type: "text", text: "「私の名前は世界と言います」", continue: false },
  {
    type: "text",
    text: "「あ…いきなりでびっくりしてますよね」",
    continue: false,
  },
  {
    type: "text",
    text: "「実は私もこうやって誰かとお話しできるとは思っていなくて」",
    continue: false,
  },
  {
    type: "text",
    text: "「私…長い間ここにいるような気もしますしついさっききたような気もしますし」",
    continue: false,
  },
  { type: "text", text: "「よくわかっていないんです」", continue: false },
  {
    type: "text",
    text: "「この部屋に何故かタブレットが置いてあって、通話機能だけ生きている様子だったので」",
    continue: false,
  },
  {
    type: "text",
    text: "「何か手掛かりにならないかと繋げてみた次第なんです」",
    continue: false,
  },
  {
    type: "text",
    text: "「モニター越しでしかもこちら側からは貴方の姿がわからないのですが」",
    continue: false,
  },
  {
    type: "text",
    text: "「もしよろしければお話しませんか？」",
    continue: false,
  },
  { type: "text", text: "「大丈夫？良かった！」", continue: false },
  // blank
  {
    type: "text",
    text: "「それでは不束者ですが…よろしくお願いします」",
    continue: false,
  },
  // blank
  {
    type: "text",
    text: "「そういえばこんな話を知っていますか？」",
    continue: false,
  },
  { type: "moveNext", continue: false },
];
