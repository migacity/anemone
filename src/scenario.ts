import bench from "../assets/bench.webp";
interface ScenarioText {
  type: "text";
  text: string;
  continue: boolean;
}

interface BackgroundImage {
  type: "background";
  name: string;
  continue: boolean;
}

interface MoveNext {
  type: "moveNext";
  continue: boolean;
}

interface ImagePreload {
  type: "imagePreload";
  name: string;
  path: string;
}

type Preload = ImagePreload;

type Scenario = ScenarioText | BackgroundImage | MoveNext;

export const preload: Preload[] = [
  { type: "imagePreload", name: "bench", path: bench },
];

export const scenario: Scenario[] = [
  // 背景 白い部屋
  { type: "background", name: "bench", continue: true },
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
