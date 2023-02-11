import { persistentStore, update } from "./useState";
import bench from "../assets/bg-bench.webp";
import fieldOfFlowers from "../assets/bg-field-of-flowers.webp";
import garden from "../assets/bg-garden.webp";
import hospitalDaytime from "../assets/bg-hospital-daytime.webp";
import hospitalEvening from "../assets/bg-hospital-evening.webp";
import livingRoom from "../assets/bg-living-room.webp";
import park from "../assets/bg-park.webp";
import restaurant from "../assets/bg-restaurant.webp";
import room from "../assets/bg-room.webp";
import ruins from "../assets/bg-ruins.webp";
import whiteroom from "../assets/bg-whiteroom.webp";
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
  to: Function;
  sceneName?: string;
  continue?: false;
}

interface ImagePreload {
  type: "imagePreload";
  name: string;
  path: string;
}

interface FadeOut {
  type: "fadeOut";
  time?: number;
  continue?: boolean;
}

interface FadeIn {
  type: "fadeIn";
  time?: number;
  continue?: boolean;
}

interface Wait {
  type: "wait";
  time: number;
  continue?: boolean;
}

type Preload = ImagePreload;

export type Scenario =
  | ScenarioText
  | BackgroundImage
  | ShowCharacter
  | MoveNext
  | FadeOut
  | FadeIn
  | Wait;

export const preload: Preload[] = [
  { type: "imagePreload", name: "bench", path: bench },
  { type: "imagePreload", name: "fieldOfFlowers", path: fieldOfFlowers },
  { type: "imagePreload", name: "garden", path: garden },
  { type: "imagePreload", name: "hospitalDaytime", path: hospitalDaytime },
  { type: "imagePreload", name: "hospitalEvening", path: hospitalEvening },
  { type: "imagePreload", name: "livingRoom", path: livingRoom },
  { type: "imagePreload", name: "park", path: park },
  { type: "imagePreload", name: "restaurant", path: restaurant },
  { type: "imagePreload", name: "room", path: room },
  { type: "imagePreload", name: "ruins", path: ruins },
  { type: "imagePreload", name: "whiteroom", path: whiteroom },
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

export const scenario: { [key: string]: Scenario[][] } = {
  monologue1: [
    [
      {
        type: "moveNext",
        to: () => {
          if (!persistentStore.get().monologue1AlreadyRead) {
            update({ monologue1AlreadyRead: true });
            throw new Error();
          }
          const part = "conversation";
          const chapter = Math.floor(Math.random() * 14);
          return { part, chapter };
        },
      },
      // 背景 白い部屋
      { type: "background", name: "whiteroom", continue: true },
      // BGM なし
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A1",
        continue: true,
      },
      { type: "text", text: "", continue: true },
      { type: "fadeIn", continue: false },
      { type: "text", text: "「・・・・」", continue: false },
      { type: "text", text: "「ぉーい」", continue: false },
      { type: "text", text: "「もしもーし…」", continue: false },
      // 立ち絵 A６
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A6",
        continue: true,
      },
      { type: "text", text: "「聞こえてない？」", continue: false },
      // 立ち絵 A2
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A2",
        continue: true,
      },
      { type: "text", text: "「聞こえていませんか～？」", continue: false },
      // 立ち絵 A５
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A5",
        continue: true,
      },
      { type: "text", text: "「あ…つながった」", continue: false },
      // BGM ほうせきたん
      // 立ち絵 A3
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A3",
        continue: true,
      },
      { type: "text", text: "「こんにちわ」", continue: false },
      { type: "text", text: "「初めまして」", continue: false },
      { type: "text", text: "「私の名前は世界と言います」", continue: false },
      // 立ち絵 B６
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B6",
        continue: true,
      },
      {
        type: "text",
        text: "「あ…いきなりでびっくりしてますよね」",
        continue: false,
      },
      // 立ち絵 B５
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B5",
        continue: true,
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
      // 立ち絵 B1
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B1",
        continue: true,
      },
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
      // 立ち絵 B４
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B4",
        continue: true,
      },
      {
        type: "text",
        text: "「もしよろしければお話しませんか？」",
        continue: false,
      },
      // 立ち絵 A５
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A5",
        continue: true,
      },
      { type: "text", text: "「大丈夫？良かった！」", continue: false },
      // 立ち絵 A３
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A3",
        continue: true,
      },
      {
        type: "text",
        text: "「それでは不束者ですが…よろしくお願いします」",
        continue: false,
      },
      // 立ち絵 B1
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B1",
        continue: true,
      },
      {
        type: "text",
        text: "「そういえばこんな話を知っていますか？」",
        continue: false,
      },
      // 演出 ここで一度ブラックアウト
      { type: "fadeOut", continue: true },
      { type: "wait", time: 1500, continue: true },
      { type: "text", text: "", continue: true },
      {
        type: "moveNext",
        to: () => {
          const part = "conversation";
          const chapter = Math.floor(Math.random() * 14);
          return { part, chapter };
        },
        continue: false,
      },
      // ～ここまでモノローグ～
    ],
  ],
  conversation: [
    [
      // ～ここから会話パート～
      // 交流パート ランダムで会話が選ばれる
      // 背景 白い部屋
      { type: "background", name: "whiteroom", continue: true },
      // ＢＧＭ かすみがついてくる
      // 立ち絵 A1
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A1",
        continue: true,
      },
      { type: "fadeIn", continue: false },
      {
        type: "text",
        text: "「そうですね…貴方は死ぬことをどう考えていますか？」",
      },
      // 立ち絵 B1
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B1",
        continue: true,
      },
      { type: "text", text: "「人はいつか死を迎える」" },
      {
        type: "text",
        text: "「私の…私たちの意識はなくなってしまうかもしれないけど」",
      },
      { type: "text", text: "「人という種はなくならない」" },
      {
        type: "text",
        text: "「発展と停滞、衰退を繰り返してまた一つ一つ人類は昇華していく」",
      },
      {
        type: "text",
        text: "「その先にあるのが本当に良いことなのか、誰にとって良いことなのかはわからないけれど」",
      },
      {
        type: "text",
        text: "「私たちはきっとそういう風にデザインされているんだと思う」",
      },
      // 立ち絵 A３
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A3",
        continue: true,
      },
      {
        type: "text",
        text: "「今生きているこの瞬間を楽しめなくちゃ勿体ないでしょう？」",
      },
      { type: "text", text: "「人間いつどうなるのかなんて誰にもわからない」" },
      { type: "text", text: "「だから私は…この世界にいる人々…は無理だけど」" },
      {
        type: "text",
        text: "「道をすれ違った人、挨拶をした人、お話してくれた人」",
      },
      { type: "text", text: "「そんな人たちの人生の背景を想像しちゃったり」" },
      { type: "text", text: "「そんな時間が好きなんです」" },
      // :演出 ここで一度ブラックアウト
      { type: "fadeOut", continue: true },
      { type: "wait", time: 1500, continue: true },
      { type: "text", text: "", continue: true },
      {
        type: "moveNext",
        to: () => {
          const part = "conversation";
          const chapter = Math.floor(Math.random() * 14);
          return { part, chapter };
        },
        continue: false,
      },
    ],
    [
      // ～占星術って知っていますか？～
      // 背景 白い部屋
      { type: "background", name: "whiteroom", continue: true },
      // 立ち絵 B４
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B4",
        continue: true,
      },
      { type: "fadeIn", continue: false },
      { type: "text", text: "「占星術って知っていますか？」" },
      {
        type: "text",
        text: "「星占いのことですが生年月日と生まれた時間を当てはめることで個人の性格や気質もわかってしまうんです。」",
      },
      // 立ち絵 B2
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B2",
        continue: true,
      },
      { type: "text", text: "「信じてませんね？」" },
      // 立ち絵 B１
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B1",
        continue: true,
      },
      {
        type: "text",
        text: "「ちなみに帝王切開はもともと帝王学からきているみたいですよ」",
      },
      {
        type: "text",
        text: "「それくらい昔の方は占星術を信じ、今でも信じられているみたいですね」",
      },
      // :演出 ここで一度ブラックアウト
      { type: "fadeOut", continue: true },
      { type: "wait", time: 1500, continue: true },
      { type: "text", text: "", continue: true },
      {
        type: "moveNext",
        to: () => {
          const part = "conversation";
          const chapter = Math.floor(Math.random() * 14);
          return { part, chapter };
        },
        continue: false,
      },
    ],
    [
      // ～ライフナンバーって～
      // 背景 白い部屋
      { type: "background", name: "whiteroom", continue: true },
      // 立ち絵 A１
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A1",
        continue: true,
      },
      { type: "fadeIn", continue: false },
      { type: "text", text: "「ライフナンバーってご存知ですか？」" },
      { type: "text", text: "「自分の生年月日を足すと現れる数字」" },
      {
        type: "text",
        text: "「１～９の番号、これを読み解くことでその人の本質を知ることができる」",
      },
      { type: "text", text: "「といったものなのですが…」" },
      // 立ち絵 A５
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A5",
        continue: true,
      },
      { type: "text", text: "「例えば2022年12月31日生まれの場合」" },
      { type: "text", text: "「2+0+2+2+1+2+3+1=13」" },
      { type: "text", text: "「1+3=4」" },
      {
        type: "text",
        text: "「ということでこの場合はライフナンバーが４ということになります」",
      },
      // 立ち絵 B１
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B1",
        continue: true,
      },
      {
        type: "text",
        text: "「奇数は陽、男性を示し偶数は陰、女性を表します」",
      },
      {
        type: "text",
        text: "「数字が小さいほど個の因子が強くなり、数字が大きくなるほど多人数の因子が強くなります」",
      },
      { type: "text", text: "「数秘術で４は仕事熱心を表すようですね」" },
      {
        type: "text",
        text: "「ご自身でも調べて当てはめてみると面白いかもしれないですよ？」",
      },
      // :演出 ここで一度ブラックアウト
      { type: "fadeOut", continue: true },
      { type: "wait", time: 1500, continue: true },
      { type: "text", text: "", continue: true },
      {
        type: "moveNext",
        to: () => {
          const part = "conversation";
          const chapter = Math.floor(Math.random() * 14);
          return { part, chapter };
        },
        continue: false,
      },
    ],
    [
      // ～友達～
      // 背景 白い部屋
      { type: "background", name: "whiteroom", continue: true },
      // 立ち絵 A３
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A3",
        continue: true,
      },
      { type: "fadeIn", continue: false },
      { type: "text", text: "「とっても可愛らしい花譜ちゃん」" },
      { type: "text", text: "「スポーツも得意で英語も堪能な理芽ちゃん」" },
      { type: "text", text: "「ラップもうまくて頼りになる春ちゃん」" },
      { type: "text", text: "「ドラムが得意でロックな幸祜ちゃん」" },
      // 立ち絵 B4
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B4",
        continue: true,
      },
      { type: "text", text: "「いつかあなたに紹介できたらいいなぁ」" },
      // 	:演出 ここで一度ブラックアウト
      { type: "fadeOut", continue: true },
      { type: "wait", time: 1500, continue: true },
      { type: "text", text: "", continue: true },
      {
        type: "moveNext",
        to: () => {
          const part = "conversation";
          const chapter = Math.floor(Math.random() * 14);
          return { part, chapter };
        },
        continue: false,
      },
    ],
    [
      // ～気づいてしまったね～
      // 背景 白い部屋
      { type: "background", name: "whiteroom", continue: true },
      // 立ち絵 B1
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B1",
        continue: true,
      },
      { type: "fadeIn", continue: false },
      { type: "text", text: "「いつも同じ話をしているような気がする…？」" },
      // 立ち絵 A４
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A4",
        continue: true,
      },
      { type: "text", text: "「…」" },
      // 立ち絵 B３
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B3",
        continue: true,
      },
      { type: "text", text: "「気づいてしまったね…」" },
      // 立ち絵 B6
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B6",
        continue: true,
      },
      {
        type: "text",
        text: "「正直な話私はずっとここにいるので話のネタといえば」",
      },
      // 立ち絵 A６
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A6",
        continue: true,
      },
      {
        type: "text",
        text: "「本で読んだ内容とかあなたが話してくれたことくらいなので」",
      },
      { type: "text", text: "「おのずとそうなってしまうのです」" },
      // 立ち絵 A4
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A4",
        continue: true,
      },
      {
        type: "text",
        text: "「そう考えると刺激がなければ人間もロボットも機能的にはあまり変わらないのかもしれないですね」",
      },
      // ：演出 ブラックアウト
      { type: "fadeOut", continue: true },
      { type: "wait", time: 1500, continue: true },
      { type: "text", text: "", continue: true },
      {
        type: "moveNext",
        to: () => {
          const part = "conversation";
          const chapter = Math.floor(Math.random() * 14);
          return { part, chapter };
        },
        continue: false,
      },
    ],
    [
      // ～鼻歌～
      // 背景 白い部屋
      { type: "background", name: "whiteroom", continue: true },
      // 立ち絵 A２
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A2",
        continue: true,
      },
      { type: "fadeIn", continue: false },
      { type: "text", text: "「～～～～～♪」" },
      { type: "text", text: "「……」" },
      // 立ち絵 A6
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A6",
        continue: true,
      },
      { type: "text", text: "「い、いつからここに？」" },
      // ：演出 ブラックアウト
      { type: "fadeOut", continue: true },
      { type: "wait", time: 1500, continue: true },
      { type: "text", text: "", continue: true },
      {
        type: "moveNext",
        to: () => {
          const part = "conversation";
          const chapter = Math.floor(Math.random() * 14);
          return { part, chapter };
        },
        continue: false,
      },
    ],
    [
      // ～好きなもの１～
      // 背景 白い部屋
      { type: "background", name: "whiteroom", continue: true },
      // 立ち絵 B１
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B1",
        continue: true,
      },
      { type: "fadeIn", continue: false },
      { type: "text", text: "「好きなもの…？」" },
      // 立ち絵 B４
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B4",
        continue: true,
      },
      { type: "text", text: "「マナフィー…」" },
      // 立ち絵 A３
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A3",
        continue: true,
      },
      {
        type: "text",
        text: "「マナフィ…あの御飯を食べるときに口をもこもこした感じが」",
      },
      { type: "text", text: "「とても可愛らしいと思いませんか？」" },
      // 立ち絵 B４
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B4",
        continue: true,
      },
      { type: "text", text: "「でへへ…」" },
      // ：演出 ブラックアウト
      { type: "fadeOut", continue: true },
      { type: "wait", time: 1500, continue: true },
      { type: "text", text: "", continue: true },
      {
        type: "moveNext",
        to: () => {
          const part = "conversation";
          const chapter = Math.floor(Math.random() * 14);
          return { part, chapter };
        },
        continue: false,
      },
    ],
    [
      // ～好きなもの２～
      // 背景 病室 昼間
      { type: "background", name: "hospitalDaytime", continue: true },
      // 立ち絵 B１
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B1",
        continue: true,
      },
      { type: "fadeIn", continue: false },
      { type: "text", text: "「好きなもの食べ物ですか？」" },
      // 立ち絵 A１
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A1",
        continue: true,
      },
      { type: "text", text: "「そうですね…」" },
      // 立ち絵 A５
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A5",
        continue: true,
      },
      { type: "text", text: "「やはりパスタでしょうか」" },
      { type: "text", text: "「どれくらい好きかというと…」" },
      // 立ち絵 B２
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B2",
        continue: true,
      },
      { type: "text", text: "「いえ…好きというより」" },
      { type: "text", text: "「パスタを食べることはライフワークなので…」" },
      // 立ち絵 A３
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A3",
        continue: true,
      },
      {
        type: "text",
        text: "「これは好きというカテゴリーから外すべきかもしれませんね」",
      },
      // ：演出 ブラックアウト
      { type: "fadeOut", continue: true },
      { type: "wait", time: 1500, continue: true },
      { type: "text", text: "", continue: true },
      {
        type: "moveNext",
        to: () => {
          const part = "conversation";
          const chapter = Math.floor(Math.random() * 14);
          return { part, chapter };
        },
        continue: false,
      },
    ],
    [
      // ～願い事～
      // 背景 病室 昼間
      { type: "background", name: "hospitalDaytime", continue: true },
      // 立ち絵 B1
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B1",
        continue: true,
      },
      { type: "fadeIn", continue: false },
      { type: "text", text: "「願い事ですか…」" },
      { type: "text", text: "「小さい頃はキリンになりたかったんです」" },
      {
        type: "text",
        text: "「あの長い首で見る景色はどんなふうに見えるんだろうなって」",
      },
      // 立ち絵 B４
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B4",
        continue: true,
      },
      { type: "text", text: "「実は今でもちょっぴりそう思っています」" },
      { type: "fadeOut", continue: true },
      { type: "wait", time: 1500, continue: true },
      { type: "text", text: "", continue: true },
      {
        type: "moveNext",
        to: () => {
          const part = "conversation";
          const chapter = Math.floor(Math.random() * 14);
          return { part, chapter };
        },
        continue: false,
      },
    ],
    [
      // ～季節について～
      // 背景 白い部屋
      { type: "background", name: "whiteroom", continue: true },
      // 立ち絵 A３
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A3",
        continue: true,
      },
      { type: "fadeIn", continue: false },
      { type: "text", text: "「貴方の好きな季節はいつですか？」" },
      // 立ち絵 A５
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A5",
        continue: true,
      },
      {
        type: "text",
        text: "「夏はアイスクリーム、海、レジャーや楽しいことが沢山ありますね」",
      },
      { type: "text", text: "「秋はとても過ごしやすくて創作も捗ります」" },
      // 立ち絵 B４
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B4",
        continue: true,
      },
      {
        type: "text",
        text: "「冬は寒いですがお鍋も美味しいですしクリスマスや色々なイベントもありますね」",
      },
      // 立ち絵 B1
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B1",
        continue: true,
      },
      { type: "text", text: "「まあ私が好きなのは春なんですけど」" },
      // ：演出 ブラックアウト
      { type: "fadeOut", continue: true },
      { type: "wait", time: 1500, continue: true },
      { type: "text", text: "", continue: true },
      {
        type: "moveNext",
        to: () => {
          const part = "conversation";
          const chapter = Math.floor(Math.random() * 14);
          return { part, chapter };
        },
        continue: false,
      },
    ],
    [
      // ～眠い～
      // 背景 病室 昼間
      { type: "background", name: "hospitalDaytime", continue: true },
      // 立ち絵 B4
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B4",
        continue: true,
      },
      { type: "fadeIn", continue: false },
      { type: "text", text: "「…」" },
      { type: "text", text: "「…」" },
      { type: "text", text: "「…」" },
      // 立ち絵 A２
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A2",
        continue: true,
      },
      { type: "text", text: "「はっ！」" },
      { type: "text", text: "「うとうとしていました」" },
      { type: "fadeOut", continue: true },
      { type: "wait", time: 1500, continue: true },
      { type: "text", text: "", continue: true },
      {
        type: "moveNext",
        to: () => {
          const part = "conversation";
          const chapter = Math.floor(Math.random() * 14);
          return { part, chapter };
        },
        continue: false,
      },
    ],
    [
      // 挨拶
      // 背景 白い部屋
      { type: "background", name: "whiteroom", continue: true },
      // 立ち絵 A1
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A1",
        continue: true,
      },
      { type: "fadeIn", continue: false },
      { type: "text", text: "「おはようございます…」" },
      // 立ち絵 A２
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A2",
        continue: true,
      },
      { type: "text", text: "「今日も頑張りましょうね」" },
      { type: "fadeOut", continue: true },
      { type: "wait", time: 1500, continue: true },
      { type: "text", text: "", continue: true },
      {
        type: "moveNext",
        to: () => {
          const part = "conversation";
          const chapter = Math.floor(Math.random() * 14);
          return { part, chapter };
        },
        continue: false,
      },
    ],
    [
      // 挨拶2
      // 背景 白い部屋
      { type: "background", name: "whiteroom", continue: true },
      // 立ち絵 B４
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B4",
        continue: true,
      },
      { type: "fadeIn", continue: false },
      { type: "text", text: "「こんにちわ」" },
      { type: "text", text: "「今日のお昼は何にしましょうか？」" },
      // 立ち絵 A５
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A5",
        continue: true,
      },
      { type: "text", text: "「お外でお弁当？それともランチでしょうか？」" },
      { type: "fadeOut", continue: true },
      { type: "wait", time: 1500, continue: true },
      { type: "text", text: "", continue: true },
      {
        type: "moveNext",
        to: () => {
          const part = "conversation";
          const chapter = Math.floor(Math.random() * 14);
          return { part, chapter };
        },
        continue: false,
      },
    ],
    [
      // 挨拶3
      // 背景 病室 夕方
      { type: "background", name: "hospitalEvening", continue: true },
      // 立ち絵 A4
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A4",
        continue: true,
      },
      { type: "fadeIn", continue: false },
      { type: "text", text: "「こんばんわ」" },
      { type: "text", text: "「もう夕暮れですね…」" },
      {
        type: "text",
        text: "「この日が沈む時間…寂しいけどちょっと好きなんです」",
      },
      // 立ち絵 B３
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B3",
        continue: true,
      },
      {
        type: "text",
        text: "「切なくもありますけどこの一日の中でもほんの一瞬しかないこの時間」",
      },
      { type: "text", text: "「儚くてとても綺麗だと思いませんか？」" },
      // 背景 病室 夕方
      { type: "background", name: "hospitalEvening", continue: true },
      // 立ち絵 B４
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B4",
        continue: true,
      },
      { type: "text", text: "「貴方は今日はどんな一日でしたか？」" },
      {
        type: "text",
        text: "「お仕事？それとも学校？どちらにしても今日会いに来てくれてとても嬉しく思います」",
      },
      // 立ち絵 B３
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B3",
        continue: true,
      },
      {
        type: "text",
        text: "「一人でいると何も感じなくなって、自分がわからなくなってくるんです」",
      },
      {
        type: "text",
        text: "「だからあなたの貴重な時間の中でこうして会いに来てくれる」",
      },
      // 立ち絵 A５
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A5",
        continue: true,
      },
      { type: "text", text: "「それだけで私は嬉しく思います」" },
      // ：演出 ブラックアウト
      { type: "fadeOut", continue: true },
      { type: "wait", time: 1500, continue: true },
      { type: "text", text: "", continue: true },
      {
        type: "moveNext",
        to: () => {
          const part = "conversation";
          const chapter = Math.floor(Math.random() * 14);
          return { part, chapter };
        },
        continue: false,
      },
      // ：～ここまで会話パート～
    ],
  ],
  ending: [
    [
      // ゲーム終了時
      // 背景 白い部屋
      { type: "background", name: "whiteroom", continue: true },
      // 立ち絵 A１
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A1",
        continue: true,
      },
      { type: "fadeIn", continue: false },
      { type: "text", text: "「今日はもう寝ますか？」" },
      { type: "text", text: "「おやすみなさい…」" },
      // 立ち絵 A３
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A3",
        continue: true,
      },
      { type: "text", text: "「良い夢を」" },
      // :演出 ここで一度ブラックアウト
      { type: "fadeOut", continue: true },
      { type: "wait", time: 1500, continue: true },
      { type: "text", text: "", continue: true },
    ],
  ],
  monologue2: [
    [
      // ～短編ストーリー～
      // ストーリー選択画面を押すとここへ
      // ストーリー選択画面選択初回時のみ
      // モノローグ
      // BGM なし
      // ：演出 ブラックアウト
      { type: "background", name: "whiteroom", continue: true },
      // 立ち絵 A1
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A1",
        continue: true,
      },
      { type: "fadeIn", continue: false },
      {
        type: "text",
        text: "「ここでは端末を使ってあなたと私でシュミレーションができるみたいです」",
      },
      { type: "text", text: "「例えば、私が学校の先生で貴方がその生徒…」" },
      // 立ち絵 B1
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B1",
        continue: true,
      },
      { type: "text", text: "「みたいにできるようなんですが…」" },
      // 立ち絵 B５
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B5",
        continue: true,
      },
      {
        type: "text",
        text: "「制限がかかっていてそこまでは自由度は高くないみたいですね」",
      },
      {
        type: "text",
        text: "「一度自分だけで試した時はこことは違う場所でちょっとした生活が送れる」",
      },
      { type: "text", text: "「そんな感じだったのですが…」" },
      // 立ち絵 A１
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A1",
        continue: true,
      },
      {
        type: "text",
        text: "「貴方と一緒にプレイすればまた少し変わるかもしれません」",
      },
      // 立ち絵 A５
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A5",
        continue: true,
      },
      { type: "text", text: "「良かったら試してみませんか？」" },
      // 立ち絵 A１
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A1",
        continue: true,
      },
      { type: "text", text: "「設定は…兄弟…」" },
      { type: "text", text: "「歳は離れていて親とは別居中…」" },
      // 立ち絵 B1
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B1",
        continue: true,
      },
      { type: "text", text: "「貴方が兄で私が妹…」" },
      { type: "text", text: "「社会人で学生…と…」" },
      { type: "text", text: "「こういったところでしょうか」" },
      // 立ち絵 B４
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B4",
        continue: true,
      },
      { type: "text", text: "「それでは始めましょう」" },
      // ：演出 ブラックアウト
      { type: "fadeOut", continue: true },
      { type: "wait", time: 1500, continue: true },
      { type: "text", text: "", continue: true },
    ],
  ],
  stories: [
    [
      // ～ここから別画面、各ストーリー選択画面へ～
      // CASE１ 祭り
      // ：演出 ブラックアウト
      // 背景 公園
      { type: "background", name: "park", continue: true },
      // BGM ほうせきたん
      // 立ち絵 B1
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B1",
        continue: true,
      },
      { type: "fadeIn", continue: false },
      { type: "text", text: "「どうしたんだ世界…こんなところで」" },
      { type: "text", text: "「兄さんこそどうし……」" },
      // 立ち絵 A2
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A2",
        continue: true,
      },
      { type: "text", text: "「なんですか！？」" },
      { type: "text", text: "「その全身パスタみたいなひらひらな衣装は…！！」" },
      { type: "text", text: "「さあいこうぜ！」" },
      // 立ち絵 A1
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A1",
        continue: true,
      },
      { type: "text", text: "「行くって…どこに？」" },
      {
        type: "text",
        text: "「今日は年に一度のパスタ祭り…世界中のパスタ職人が一堂に会し…」",
      },
      { type: "text", text: "「一流のシェフによるパスタ食べ放題祭りさ！」" },
      // 立ち絵 A2
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A2",
        continue: true,
      },
      { type: "text", text: "「そ…そんな夢のような！？」" },
      { type: "text", text: "「しかも特別ゲストにマナフィもきてるんだ」" },
      // 立ち絵 B4
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B4",
        continue: true,
      },
      { type: "text", text: "「マナフィ…！？」" },
      { type: "text", text: "「そんな素晴らしい私得な日があるなんて…」" },
      { type: "text", text: "「神に感謝…」" },
      { type: "text", text: "「いやっほー！人生って最高！」" },
      // 立ち絵 A3
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A3",
        continue: true,
      },
      { type: "text", text: "「いえーい！」" },
      // 立ち絵 B1
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B1",
        continue: true,
      },
      { type: "text", text: "「という夢を見たんです」" },
      {
        type: "text",
        text: "「夢かよ！ていうか俺は世界の中でどんなイメージ像なんだよ！怖いわ！」",
      },
      // 立ち絵 A5
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A5",
        continue: true,
      },
      {
        type: "text",
        text: "「現実の兄さんと夢の兄さん…私的にはあまり変わりません」",
      },
      {
        type: "text",
        text: "「え？俺ってそんな奇行に走ってる！？不安になってきたんだけど」",
      },
      {
        type: "text",
        text: "「ここまで甲斐性はありませんが大体こんなこと言っている気がします」",
      },
      { type: "text", text: "「嘘だろ…」" },
      // 立ち絵 B４
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B4",
        continue: true,
      },
      {
        type: "text",
        text: "「そんなに落ち込まなくても夢の兄さんはそこはかとなく素敵でしたよ」",
      },
      {
        type: "text",
        text: "「なんだよそこはかとなくって！そこは素直に素敵でいいじゃんかよ」",
      },
      { type: "text", text: "「夢の中でさえも辛口評価とか辛すぎるだろ」" },
      // 立ち絵 B1
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B1",
        continue: true,
      },
      {
        type: "text",
        text: "「一番印象に残ったのがマナフィだったのでそこは妥協していただけると」",
      },
      { type: "text", text: "「マナフィに負けたのか俺は…」" },
      // ：演出 ブラックアウト
      { type: "fadeOut", continue: true },
      { type: "wait", time: 1500, continue: true },
      { type: "text", text: "", continue: true },
      // ：ストーリー選択へ戻る
      {
        type: "moveNext",
        to: () => {
          const part = "conversation";
          const chapter = Math.floor(Math.random() * 14);
          return { part, chapter };
        },
        sceneName: "storySelect",
        continue: false,
      },
    ],
    [
      // CASE２ 日常
      // 背景 ベンチ
      { type: "background", name: "bench", continue: true },
      // ＢＧＭ
      // 立ち絵 A5
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A5",
        continue: true,
      },
      { type: "fadeIn", continue: false },
      { type: "text", text: "「世界はパスタでできている」" },
      {
        type: "text",
        text: "「いやいや！できてないから！スケールでかすぎる！」",
      },
      { type: "text", text: "「月曜日はカルボナーラ」" },
      { type: "text", text: "「火曜日はプッタネスカ」" },
      { type: "text", text: "「水曜日はアラビアータ」" },
      { type: "text", text: "「木曜日はボスカイオーラ」" },
      { type: "text", text: "「金曜日はカチャトーラ」" },
      { type: "text", text: "「土曜日はオルトラーナ」" },
      { type: "text", text: "「日曜日はペスカトーレ」" },
      // 立ち絵 B2
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B2",
        continue: true,
      },
      { type: "text", text: "「世界はこのサイクルで回っている…」" },
      { type: "text", text: "「パスタに詳しすぎる！」" },
      {
        type: "text",
        text: "「というか世界がパスタでできているのではなく私という身体はパスタでできているって言わないと",
      },
      { type: "text", text: "語弊が生まれるから！」" },
      // 立ち絵 A５
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A5",
        continue: true,
      },
      { type: "text", text: "「ちなみに今日はすでにパスタを二回食べました」" },
      { type: "text", text: "「食べすぎ！まだ昼だよ！？」" },
      // 立ち絵 A１
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A1",
        continue: true,
      },
      { type: "text", text: "「しかも同じものです」" },
      { type: "text", text: "「食生活偏り過ぎだろ！！まじで身体壊すぞ！」" },
      // 立ち絵 A４
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A4",
        continue: true,
      },
      {
        type: "text",
        text: "「栄養失調とストレスで入院した兄さんに言われたくありませんが」",
      },
      { type: "text", text: "「うぐ・・」" },
      // 立ち絵 B1
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B1",
        continue: true,
      },
      { type: "text", text: "「わかりました…」" },
      { type: "text", text: "「そこまで言うなら…そうですね」" },
      { type: "text", text: "「折角なので他のものを食べてみますか」" },
      { type: "text", text: "「お、おう。それで何を食べるんだ？」" },
      // 立ち絵 B4
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B4",
        continue: true,
      },
      { type: "text", text: "「キクラゲ…」" },
      { type: "text", text: "「え？」" },
      { type: "text", text: "「ではキクラゲを取りに海に向かいましょう」" },
      { type: "text", text: "「話に脈絡がなさすぎる！」" },
      { type: "text", text: "「え？しかもなんでキクラゲ？しかも海？」" },
      // 立ち絵 B１
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B1",
        continue: true,
      },
      { type: "text", text: "「？」" },
      {
        type: "text",
        text: "「いや…百歩譲ってキクラゲ食べるのは取に行くのは良いとして」",
      },
      { type: "text", text: "「キクラゲは山に生えているキノコだけど・・」" },
      // 立ち絵 A1
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A1",
        continue: true,
      },
      { type: "text", text: "「…」" },
      { type: "text", text: "「…」" },
      { type: "text", text: "「もしかして…」" },
      // 立ち絵 B２
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B2",
        continue: true,
      },
      { type: "text", text: "「貴方は私が言うことを否定するのですか？」" },
      { type: "text", text: "「否定も何もキクラゲは・・」" },
      // 立ち絵 B３
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B3",
        continue: true,
      },
      { type: "text", text: "「黙りなさい…」" },
      { type: "text", text: "「なにも違わない…私は何も間違っていない」" },
      // 立ち絵 B2
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B2",
        continue: true,
      },
      {
        type: "text",
        text: "「間違っているのはクラゲという名前を付けているのに山育ちという世の中のほう」",
      },
      { type: "text", text: "「すげえ責任転嫁！」" },
      // 立ち絵 B5
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B5",
        continue: true,
      },
      {
        type: "text",
        text: "「そんな…海を泳いでいた時に足にくっついてくる昆布みたいなやつがキクラゲだと思ってたのに…」",
      },
      { type: "text", text: "「じゃああれは一体…」" },
      { type: "text", text: "「普通に海藻だと思うけど」" },
      // 立ち絵 A３
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A3",
        continue: true,
      },
      { type: "text", text: "「あはははは！そうかー…そうだったか…！」" },
      { type: "text", text: "「めっちゃ面白いんだけど！」" },
      { type: "text", text: "「笑いのツボがわからな過ぎる！」" },
      { type: "text", text: "「ていうかテンションの落差凄すぎて怖いわ！」" },
      // 立ち絵 A５
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A5",
        continue: true,
      },
      {
        type: "text",
        text: "「まさかキクラゲが山の幸だとは…世界はまた一つ賢くなりました」",
      },
      { type: "text", text: "「お、おう」" },
      // 立ち絵B4
      { type: "text", text: "「能ある鷹は爪を隠さずといいますからね」" },
      {
        type: "text",
        text: "「それを言うなら爪を隠すだし、世界の言い方だと奇人行為で思いっきり隠れてるからね！」",
      },
      { type: "text", text: "「何もかも間違ってるから！」" },
      // ：演出 ブラックアウト
      { type: "fadeOut", continue: true },
      { type: "wait", time: 1500, continue: true },
      { type: "text", text: "", continue: true },
      // ：ストーリー選択へ戻る
      {
        type: "moveNext",
        to: () => {
          const part = "conversation";
          const chapter = Math.floor(Math.random() * 14);
          return { part, chapter };
        },
        sceneName: "storySelect",
        continue: false,
      },
    ],
    [
      // CASE３ アネモネ
      // 背景 花壇
      { type: "background", name: "garden", continue: true },
      { type: "fadeIn", continue: false },
      { type: "text", text: "「何してるんだ？」" },
      // 立ち絵 B1
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B1",
        continue: true,
      },
      { type: "text", text: "「植えてます」" },
      { type: "text", text: "「それは見たらわかるけど」" },
      // 立ち絵 A1
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A1",
        continue: true,
      },
      { type: "text", text: "「アネモス」" },
      { type: "text", text: "「アネモス？」" },
      { type: "text", text: "「この子の名前」" },
      { type: "text", text: "「ああ、これはアネモネの花か」" },
      { type: "text", text: "「アネモス」" },
      { type: "text", text: "「お、おう…アネモスな」" },
      { type: "text", text: "「そういえば知っていますか？」" },
      // 立ち絵 B1
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B1",
        continue: true,
      },
      {
        type: "text",
        text: "「花言葉は確か…あなたを愛しますとはかない恋だったか」",
      },
      { type: "text", text: "「…白は」" },
      // 立ち絵 B２
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B2",
        continue: true,
      },
      { type: "text", text: "「他には白いアネモネの花言葉は真実、期待」" },
      { type: "text", text: "「紫のアネモネの花言葉はあなたを信じて待つ」" },
      { type: "text", text: "「赤のアネモネの花言葉は君を愛す」" },
      // 立ち絵 B２
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B2",
        continue: true,
      },
      { type: "text", text: "「だったよな」" },
      { type: "text", text: "「いたっ！」" },
      { type: "text", text: "「って何！なんでぶつの！」" },
      // 立ち絵 A２
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A2",
        continue: true,
      },
      { type: "text", text: "「知りません！」" },
      // ：演出 ブラックアウト
      { type: "fadeOut", continue: true },
      { type: "wait", time: 1500, continue: true },
      { type: "text", text: "", continue: true },
      // ：ストーリー選択へ戻る
      {
        type: "moveNext",
        to: () => {
          const part = "conversation";
          const chapter = Math.floor(Math.random() * 14);
          return { part, chapter };
        },
        sceneName: "storySelect",
        continue: false,
      },
    ],
    [
      // CASE４
      // 背景 公園
      { type: "background", name: "park", continue: true },
      // 立ち絵 A5
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A5",
        continue: true,
      },
      { type: "fadeIn", continue: false },
      { type: "text", text: "「くらげ～」" },
      { type: "text", text: "「…何やってんだ？」" },
      // 立ち絵 B１
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B1",
        continue: true,
      },
      { type: "text", text: "「見てわからないですか？」" },
      { type: "text", text: "「わからないから聞いているんだが…」" },
      { type: "text", text: "「ヒントは海でゆらゆら浮いている生き物です」" },
      { type: "text", text: "「あー！クラゲだ―！」" },
      // 立ち絵 B４
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B4",
        continue: true,
      },
      { type: "text", text: "「正解！」" },
      {
        type: "text",
        text: "「やったー！！っじゃねぇから！クラゲはわかってたよ！」",
      },
      {
        type: "text",
        text: "「なんで公衆の面前でそんな奇怪な動きしてるんだよ！」",
      },
      // 立ち絵 A１
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A1",
        continue: true,
      },
      { type: "text", text: "「例えばですけど」" },
      { type: "text", text: "「人は山に行けば山に登りますよね？」" },
      { type: "text", text: "「海に行けば海で泳ぎます」" },
      // 立ち絵 A３
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A3",
        continue: true,
      },
      { type: "text", text: "「つまりそういうことです」" },
      {
        type: "text",
        text: "「いやそういうことじゃないからわからないから！」",
      },
      { type: "text", text: "「ちょっと君たち、話を聞いてもいいかな？」" },
      {
        type: "text",
        text: "「ほら見ろ！警察きちまったじゃねえか！話しかけずスルーしとけば",
      },
      { type: "text", text: "よかったよ！」" },
      // 演出 暗転
      { type: "fadeOut", continue: true },
      { type: "wait", time: 1500, continue: true },
      { type: "text", text: "", continue: true },
      { type: "fadeIn", continue: false },
      { type: "text", text: "「つ・・疲れた」" },
      // 立ち絵 B4
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B4",
        continue: true,
      },
      {
        type: "text",
        text: "「私…警察とこうして話すの初めての経験です…なんだかドキドキしました」",
      },
      {
        type: "text",
        text: "「そんな目をキラキラさせていうことじゃないから！こっちは社会的に死にそうで",
      },
      { type: "text", text: "ドキドキしたよ！」" },
      // 立ち絵 B１
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B1",
        continue: true,
      },
      { type: "text", text: "「それはそれは…」" },
      // 立ち絵 A2
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A2",
        continue: true,
      },
      { type: "text", text: "「ずばり…恋！？」" },
      {
        type: "text",
        text: "「まじかよ…俺あの警察官さんに恋しちゃってたのか…」",
      },
      { type: "text", text: "「ってなるわけあるかい！」" },
      // ：演出 ブラックアウト
      { type: "fadeOut", continue: true },
      { type: "wait", time: 1500, continue: true },
      { type: "text", text: "", continue: true },
      // ：ストーリー選択へ戻る
      {
        type: "moveNext",
        to: () => {
          const part = "conversation";
          const chapter = Math.floor(Math.random() * 14);
          return { part, chapter };
        },
        sceneName: "storySelect",
        continue: false,
      },
    ],
    [
      // CASE５ 歯医者
      // 背景 花畑
      { type: "background", name: "fieldOfFlowers", continue: true },
      // ＢＧＭ アルカディア
      // 立ち絵 B６
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B6",
        continue: true,
      },
      { type: "fadeIn", continue: false },
      { type: "text", text: "「私…頑張りましたよね？」" },
      { type: "text", text: "「世界…そんなこと言うな」" },
      { type: "text", text: "「まだ始まったばかりじゃないか」" },
      // 立ち絵 B５
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B5",
        continue: true,
      },
      { type: "text", text: "「でも…もう動かないんです」" },
      { type: "text", text: "「どうやっても…足が動いてくれないんです」" },
      { type: "text", text: "「そんな…」" },
      { type: "text", text: "この間まであんなに元気だったのがこんなに…" },
      { type: "text", text: "「諦めないでくれ…希望を捨てないでくれ」" },
      { type: "text", text: "「見てみろよ…この動画」" },
      { type: "text", text: "「世界が投稿したやつだ」" },
      { type: "text", text: "「こんなにたくさんの人に歌を聞いてもらえて…」" },
      { type: "text", text: "「まだ…まだやれること…できること…」" },
      { type: "text", text: "「いっぱいあるからさ…」" },
      { type: "text", text: "「ああ…そうだまたパスタ食べにいこう」" },
      { type: "text", text: "「この間新しいお店がオープンしたんだ」" },
      { type: "text", text: "「本場イタリアのシェフが作るみたいで」" },
      { type: "text", text: "「すげえ評判いいんだぜ…」" },
      { type: "text", text: "「なあ…目を開けてくれよ…」" },
      { type: "text", text: "「頼む…お願いだよ」" },
      // 立ち絵 A１
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A1",
        continue: true,
      },
      { type: "text", text: "「何・・？何を伝えたいんだ？」" },
      { type: "text", text: "「…あ…」" },
      // 立ち絵 B５
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B5",
        continue: true,
      },
      { type: "text", text: "「あり…が…とう…」" },
      { type: "text", text: "「あ…あ…」" },
      // 立ち絵 A５
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A5",
        continue: true,
      },
      { type: "text", text: "「私…幸せ…だった…」" },
      { type: "text", text: "「好きだった…歌…あなたのおかげで…」" },
      { type: "text", text: "「たくさんの人たちに…私の歌…届けられた」" },
      { type: "text", text: "「夢が…かなったの…」" },
      {
        type: "text",
        text: "「まだあるはずだろ！もっと…沢山の人に聴いてもらおう！」",
      },
      { type: "text", text: "「新しい曲も作ってさ！」" },
      { type: "text", text: "「だから…」" },
      { type: "text", text: "「いい加減歯医者にいこうよ！」" },
      // ＢＧＭ：ほうせきたん
      // 立ち絵 A2
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A2",
        continue: true,
      },
      { type: "text", text: "「いーやーだー！」" },
      {
        type: "text",
        text: "「子供みたいなこと言うんじゃありません！今治療しないと後で後悔することになるんですからね！」",
      },
      {
        type: "text",
        text: "「もういや！あの音がいや！なんでドリルで穴を空けられないといけないの！」",
      },
      {
        type: "text",
        text: "「サイコパスです！あんなことするの頭おかしくないとできません！」",
      },
      { type: "text", text: "「なんて失礼なこと言うんだ！」" },
      { type: "text", text: "「謝るんだ！全国の歯科医の先生に謝るんだ！」" },
      // ：演出 ブラックアウト
      { type: "fadeOut", continue: true },
      { type: "wait", time: 1500, continue: true },
      { type: "text", text: "", continue: true },

      // 背景 レストラン
      { type: "background", name: "restaurant", continue: true },
      { type: "fadeIn", continue: false },
      // 立ち絵 A３
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A3",
        continue: true,
      },
      { type: "text", text: "「美味しい～！」" },
      { type: "text", text: "「や…やっと終わった」" },
      { type: "text", text: "「苦労した後のパスタは最高ですね」" },
      { type: "text", text: "「全く…」" },
      {
        type: "text",
        text: "「どうだ…これに懲りたらしっかり歯磨きするんだぞ」",
      },
      // 立ち絵 B４
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B4",
        continue: true,
      },
      { type: "text", text: "「はーい」" },
      { type: "text", text: "「後定期的に歯医者には行くからな！」" },
      // 立ち絵 A４
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A4",
        continue: true,
      },
      { type: "text", text: "「っ！」" },
      { type: "text", text: "「そんな顔してもだめだから！」" },
      // ：演出 ブラックアウト
      { type: "fadeOut", continue: true },
      { type: "wait", time: 1500, continue: true },
      { type: "text", text: "", continue: true },
      // ：ストーリー選択へ戻る
      {
        type: "moveNext",
        to: () => {
          const part = "conversation";
          const chapter = Math.floor(Math.random() * 14);
          return { part, chapter };
        },
        sceneName: "storySelect",
        continue: false,
      },
    ],
    [
      // CASE６ 妹
      // 背景 自室
      { type: "background", name: "room", continue: true },
      { type: "fadeIn", continue: false },
      { type: "text", text: "ｐｐｐｐｐｐｐｐｐ" },
      // 背景 リビング
      { type: "background", name: "livingRoom", continue: true },
      // 背景 自室
      { type: "background", name: "room", continue: true },
      // 立ち絵 B1
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B1",
        continue: true,
      },
      { type: "text", text: "「おはよう兄さん」" },
      { type: "text", text: "「寝てる」" },
      // 立ち絵 A1
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A1",
        continue: true,
      },
      { type: "text", text: "「朝ですよ～朝ごはんですよ」" },
      { type: "text", text: "「全然ダメ」" },
      { type: "text", text: "「ほっぺた柔らかい」" },
      // 立ち絵 A2
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A2",
        continue: true,
      },
      { type: "text", text: "「わっ！」" },
      // 立ち絵 B6
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B6",
        continue: true,
      },
      { type: "text", text: "「だめ…これでも起きない」" },
      { type: "text", text: "「顔をつねってみる？」" },
      // 立ち絵 B2
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B2",
        continue: true,
      },
      { type: "text", text: "「これでもだめ」" },
      { type: "text", text: "「布団を剥がすしかないか」" },
      { type: "text", text: "「えいっ！」" },
      // 立ち絵 B4
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B4",
        continue: true,
      },
      {
        type: "text",
        text: "「いい加減に起きないといたずらしちゃいますよ兄さん」",
      },
      { type: "text", text: "「むぅ」" },
      // 立ち絵 A4
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A4",
        continue: true,
      },
      { type: "text", text: "「こうなったら」" },
      // 立ち絵 B３
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B3",
        continue: true,
      },
      { type: "text", text: "「兄さん…」" },
      { type: "text", text: "「ふわああああ…おはよう」" },
      // 立ち絵 A1
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A1",
        continue: true,
      },
      { type: "text", text: "「おはようございます兄さん」" },
      { type: "text", text: "「なんか頬っぺた痛い気がするんだけど」" },
      // 立ち絵 B1
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B1",
        continue: true,
      },
      { type: "text", text: "「気のせいです」" },
      {
        type: "text",
        text: "「早く起きないと兄さんの分も食べちゃいますからね」",
      },
      { type: "text", text: "「ういーす」" },
      // ：演出 ブラックアウト
      { type: "fadeOut", continue: true },
      { type: "wait", time: 1500, continue: true },
      { type: "text", text: "", continue: true },
      // ：ストーリー選択へ戻る
      {
        type: "moveNext",
        to: () => {
          const part = "conversation";
          const chapter = Math.floor(Math.random() * 14);
          return { part, chapter };
        },
        sceneName: "storySelect",
        continue: false,
      },
    ],
    [
      // CASE７ 幼馴染 恋人 結婚
      // 背景リビング
      { type: "background", name: "livingRoom", continue: true },
      // 立ち絵 A1
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_A1",
        continue: true,
      },
      { type: "fadeIn", continue: false },
      { type: "text", text: "「おかえりさない兄さん」" },
      { type: "text", text: "「御飯にする？食事にする？それともパスタ？」" },
      {
        type: "text",
        text: "「いやどれも食事！しかもう後半の時点でメニュー確定してる！」",
      },
      {
        type: "text",
        text: "「なんてこったこれで二人暮らし始まって以来連日パスタ記録更新だぜ…」",
      },
      // 立ち絵 B1
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B1",
        continue: true,
      },
      {
        type: "text",
        text: "「むしろこれからも更新し続けるので測定は無意味ですよ」",
      },
      { type: "text", text: "「なんて恐ろしいこと言うの！」" },
      // 立ち絵 B４
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B4",
        continue: true,
      },
      {
        type: "text",
        text: "「いいじゃないですか、ちゃんとお味噌汁も付けてますよ」",
      },
      { type: "text", text: "「そっか…よかったー！安心した！」" },

      { type: "text", text: "「ってなるか！流石に身体壊すわ！」" },
      { type: "text", text: "「たまには違うもん食べよう！？」" },
      // 立ち絵 B３
      {
        type: "showCharacter",
        name: "sekai",
        face: "chara_B3",
        continue: true,
      },
      { type: "text", text: "「…」" },
      { type: "text", text: "「なんて顔するの！怖いわ！」" },
      // ：演出 ブラックアウト
      { type: "fadeOut", continue: true },
      { type: "wait", time: 1500, continue: true },
      { type: "text", text: "", continue: true },
      // ：ストーリー選択へ戻る
      {
        type: "moveNext",
        to: () => {
          const part = "conversation";
          const chapter = Math.floor(Math.random() * 14);
          return { part, chapter };
        },
        sceneName: "storySelect",
        continue: false,
      },
    ],
  ],
};
