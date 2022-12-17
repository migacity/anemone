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

export const scenario: Scenario[] = [
  // 背景 白い部屋
  { type: "background", name: "whiteroom", continue: true },
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
  // 交流パート
  // 背景 白い部屋
  { type: "background", name: "whiteroom", continue: true },
  { type: "text", text: "「そうですね…貴方は死ぬことをどう考えていますか？」" },
  { type: "text", text: "「人はいつか死を迎える」" },
  {
    type: "text",
    text: "「死んだ身体は土に還り、養分となって花を咲かせ植物を作り」",
  },
  { type: "text", text: "「それを虫たちが運んでどんどん増えていく」" },
  { type: "text", text: "「そしてそれを動物や人間が食べてまた繰り返し」" },
  { type: "text", text: "「回ってるの…ただそれだけ」" },
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
  { type: "text", text: "「行き着く先が何かを知ることはわからないけれど」" },
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
  { type: "text", text: "「だからこそ今を精一杯生きる…」" },
  {
    type: "text",
    text: "「先を見るのは良いですが、あまりにも先を見すぎると目の前の石に気づかないかもしれませんからね」",
  },
  { type: "text", text: "「あくまで私の感想ですが」" },
  { type: "text", text: "「なんて言ってみたりしました」" },
  // ～占星術って知っていますか？～
  // 背景 白い部屋
  { type: "background", name: "whiteroom", continue: true },
  {
    type: "text",
    text: "「星占いのことですが生年月日と生まれた時間を当てはめることで個人の性格や気質もわかってしまうんです。」",
  },
  { type: "text", text: "「信じてませんね？」" },
  {
    type: "text",
    text: "「ちなみに帝王切開はもともと帝王学からきているみたいですよ」",
  },
  {
    type: "text",
    text: "「それくらい昔の方は占星術を信じ、今でも信じられているみたいですね」",
  },
  // ～ライフナンバーって～
  // 背景 白い部屋
  { type: "background", name: "whiteroom", continue: true },
  { type: "text", text: "「ライフナンバーってご存知ですか？」" },
  { type: "text", text: "「自分の生年月日を足すと現れる数字」" },
  {
    type: "text",
    text: "「１～９の番号、これを読み解くことでその人の本質を知ることができる」",
  },
  { type: "text", text: "「といったものなのですが…」" },
  { type: "text", text: "「例えば2022年12月31日生まれの場合」" },
  { type: "text", text: "「2+0+2+2+1+2+3+1=13」" },
  { type: "text", text: "「1+3=4」" },
  {
    type: "text",
    text: "「ということでこの場合はライフナンバーが４ということになります」",
  },
  { type: "text", text: "「奇数は陽、男性を示し偶数は陰、女性を表します」" },
  {
    type: "text",
    text: "「数字が小さいほど個の因子が強くなり、数字が大きくなるほど多人数の因子が強くなります」",
  },
  { type: "text", text: "「数秘術で４は仕事熱心を表すようですね」" },
  {
    type: "text",
    text: "「ご自身でも調べて当てはめてみると面白いかもしれないですよ？」",
  },
  // ～友達～
  // 背景 白い部屋
  { type: "background", name: "whiteroom", continue: true },
  { type: "text", text: "「とっても可愛らしい花譜ちゃん」" },
  { type: "text", text: "「スポーツも得意で英語も堪能な理芽ちゃん」" },
  { type: "text", text: "「ラップもうまくて頼りになる春ちゃん」" },
  { type: "text", text: "「ドラムが得意でロックな幸祜ちゃん」" },
  { type: "text", text: "「いつかあなたに紹介できたらいいなぁ」" },
  // ～気づいてしまったね～
  // 背景 白い部屋
  { type: "background", name: "whiteroom", continue: true },
  { type: "text", text: "「いつも同じ話をしているような気がする…？」" },
  { type: "text", text: "「…」" },
  { type: "text", text: "「気づいてしまったね…」" },
  {
    type: "text",
    text: "「正直な話私はずっとここにいるので話のネタといえば」",
  },
  {
    type: "text",
    text: "「本で読んだ内容とかあなたが話してくれたことくらいなので」",
  },
  { type: "text", text: "「おのずとそうなってしまうのです」" },
  {
    type: "text",
    text: "「そう考えると刺激がなければ人間もロボットも機能的にはあまり変わらないのかもしれないですね」",
  },
  // ～鼻歌～
  // 背景 白い部屋
  { type: "background", name: "whiteroom", continue: true },
  { type: "text", text: "「～～～～～♪」" },
  { type: "text", text: "「……」" },
  { type: "text", text: "「い、いつからここに？」" },
  // ～好きなもの１～
  // 背景 白い部屋
  { type: "background", name: "whiteroom", continue: true },
  {
    type: "text",
    text: "「マナフィ…あの御飯を食べるときに口をもこもこした感じが」",
  },
  { type: "text", text: "「とても可愛らしいと思いませんか？」" },
  { type: "text", text: "「でへへ…」" },
  // ～好きなもの２～
  // 背景 白い部屋
  { type: "background", name: "whiteroom", continue: true },
  { type: "text", text: "「好きなものですか？」" },
  { type: "text", text: "「そうですね…やはりパスタでしょうか」" },
  { type: "text", text: "「どれくらい好きかというと…」" },
  { type: "text", text: "「いえ…好きというより」" },
  { type: "text", text: "「パスタを食べることはライフワークなので…」" },
  {
    type: "text",
    text: "「これは好きというカテゴリーから外すべきかもしれませんね」",
  },
  // ～願い事～
  // 背景 白い部屋
  { type: "background", name: "whiteroom", continue: true },
  { type: "text", text: "「願い事ですか…」" },
  { type: "text", text: "「小さい頃はキリンになりたかったんです」" },
  {
    type: "text",
    text: "「あの長い首で見る景色はどんなふうに見えるんだろうなって」",
  },
  { type: "text", text: "「実は今でもちょっぴりそう思っています」" },
  // ～季節について～
  // 背景 白い部屋
  { type: "background", name: "whiteroom", continue: true },
  { type: "text", text: "「貴方の好きな季節はいつですか？」" },
  {
    type: "text",
    text: "「夏はアイスクリーム、海、レジャーや楽しいことが沢山ありますね」",
  },
  { type: "text", text: "「秋はとても過ごしやすくて創作も捗ります」" },
  {
    type: "text",
    text: "「冬は寒いですがお鍋も美味しいですしクリスマスや色々なイベントもありますね」",
  },
  { type: "text", text: "「まあ私が好きなのは春なんですけど」" },
  // ～眠い～
  // 背景 白い部屋
  { type: "background", name: "whiteroom", continue: true },
  { type: "text", text: "「…」" },
  { type: "text", text: "「…」" },
  { type: "text", text: "「…」" },
  { type: "text", text: "「はっ！」" },
  { type: "text", text: "「うとうとしていました」" },
  // 挨拶
  // 背景 白い部屋
  { type: "background", name: "whiteroom", continue: true },
  { type: "text", text: "「おはようございます！」" },
  { type: "text", text: "「今日も頑張りましょうね」" },
  // 挨拶2
  // 背景 白い部屋
  { type: "background", name: "whiteroom", continue: true },
  { type: "text", text: "「こんにちわ」" },
  { type: "text", text: "「今日のお昼は何にしましょうか？」" },
  { type: "text", text: "「お外でお弁当？それともランチにします？」" },
  // 挨拶3
  // 背景 病室 夕方
  { type: "background", name: "hospitalEvening", continue: true },
  { type: "text", text: "「こんばんわ」" },
  { type: "text", text: "「もう夕暮れですね…」" },
  { type: "text", text: "「この日が沈む時間…寂しいけどちょっと好きなんです」" },
  {
    type: "text",
    text: "「切なくもありますけどこの一日の中でもほんの一瞬しかないこの時間」",
  },
  { type: "text", text: "「儚くてとても綺麗だと思いませんか？」" },
  // 背景 白い部屋
  { type: "background", name: "whiteroom", continue: true },
  { type: "text", text: "「貴方は今日はどんな一日でしたか？」" },
  {
    type: "text",
    text: "「お仕事？それとも学校？どちらにしても今日会いに来てくれてとても嬉しく思います」",
  },
  {
    type: "text",
    text: "「一人でいると何も感じなくなって、自分がわからなくなってくるんです」",
  },
  {
    type: "text",
    text: "「だからあなたの貴重な時間の中でこうして会いに来てくれる」",
  },
  { type: "text", text: "「それだけで私は嬉しく思います」" },
  // ゲーム終了時
  { type: "text", text: "「今日はもう寝ますか？」" },
  { type: "text", text: "「おやすみなさい…」" },
  { type: "text", text: "「良い夢を」" },
  // ～短編ストーリー～
  {
    type: "text",
    text: "「ここでは端末を使ってあなたと私でシュミレーションができるみたいです」",
  },
  { type: "text", text: "「例えば、私が学校の先生で貴方がその生徒…」" },
  {
    type: "text",
    text: "「みたいにできるようなんですが…制限がかかっていてそこまでは自由度は高くないみたいですね」",
  },
  {
    type: "text",
    text: "「一度自分だけで試した時はこことは違う場所でちょっとした生活が送れる」",
  },
  { type: "text", text: "「そんな感じだったのですが…」" },
  {
    type: "text",
    text: "「貴方と一緒にプレイすればまた少し変わるかもしれません」",
  },
  { type: "text", text: "「良かったら試してみませんか？」" },
  // ～ここから別画面、各ストーリー選択画面へ～
  // CASE１ 祭り
  // 背景 公園
  { type: "background", name: "park", continue: true },
  { type: "text", text: "「どうしたんだ世界…こんなところで」" },
  {
    type: "text",
    text: "「あなたは…それに全身パスタみたいなひらひらな衣装は…」",
  },
  { type: "text", text: "「さあいこうぜ！」" },
  { type: "text", text: "「行くって…どこに？」" },
  {
    type: "text",
    text: "「今日は年に一度のパスタ祭り…世界中のパスタ職人が一堂に会し…」",
  },
  { type: "text", text: "「一流のシェフによるパスタ食べ放題祭りさ！」" },
  { type: "text", text: "「そ…そんな夢のような！？」" },
  { type: "text", text: "「しかも特別ゲストにマナフィもきてるんだ」" },
  { type: "text", text: "「マナフィ…！？」" },
  { type: "text", text: "「そんな素晴らしい私得な日があるなんて…」" },
  { type: "text", text: "「神に感謝…」" },
  { type: "text", text: "「いやっほー！人生って最高！」" },
  { type: "text", text: "「いえーい！」" },
  { type: "text", text: "「という夢を見たんです」" },
  {
    type: "text",
    text: "「夢かよ！ていうか俺は世界の中でどんなイメージ像なんだよ！怖いわ！」",
  },
  { type: "text", text: "「現実の貴方と夢の貴方…私的にはあまり変わりません」" },
  {
    type: "text",
    text: "「え？俺ってそんな奇行に走ってる！？不安になってきたんだけど」",
  },
  {
    type: "text",
    text: "「ここまで甲斐性はありませんが大体こんなこと言っている気がします」",
  },
  { type: "text", text: "「嘘だろ…」" },
  {
    type: "text",
    text: "「そんなに落ち込まなくても夢の貴方はそこはかとなく素敵でしたよ」",
  },
  {
    type: "text",
    text: "「なんだよそこはかとなくって！そこは素直に素敵でいいじゃんかよ」",
  },
  { type: "text", text: "「夢の中でさえも辛口評価とか辛すぎるだろ」" },
  {
    type: "text",
    text: "「一番印象に残ったのがマナフィだったのでそこは妥協していただけると」",
  },
  { type: "text", text: "「マナフィに負けたのか俺は…」" },
  // CASE２ 日常
  // 背景 ベンチ
  { type: "background", name: "bench", continue: true },
  { type: "text", text: "「世界はパスタでできている」" },
  { type: "text", text: "「いやいや！できてないから！スケールでかすぎる！」" },
  { type: "text", text: "「月曜日はカルボナーラ」" },
  { type: "text", text: "「火曜日はプッタネスカ」" },
  { type: "text", text: "「水曜日はアラビアータ」" },
  { type: "text", text: "「木曜日はボスカイオーラ」" },
  { type: "text", text: "「金曜日はカチャトーラ」" },
  { type: "text", text: "「土曜日はオルトラーナ」" },
  { type: "text", text: "「日曜日はペスカトーレ」" },
  { type: "text", text: "「世界はこのサイクルで回っている…」" },
  { type: "text", text: "「パスタに詳しすぎる！」" },
  {
    type: "text",
    text: "「というか世界がパスタでできているのではなく私という身体はパスタでできているって言わないと",
  },
  { type: "text", text: "語弊が生まれるから！」" },
  { type: "text", text: "「ちなみに今日はすでにパスタを二回食べました」" },
  { type: "text", text: "「食べすぎ！まだ昼だよ！？」" },
  { type: "text", text: "「しかも同じものです」" },
  { type: "text", text: "「食生活偏り過ぎだろ！！まじで身体壊すぞ！」" },
  {
    type: "text",
    text: "「栄養失調とストレスで入院したあなたに言われたくありませんが」",
  },
  { type: "text", text: "「うぐ・・」" },
  { type: "text", text: "「わかりました…」" },
  { type: "text", text: "「そこまで言うならそうですね」" },
  { type: "text", text: "「折角なので他のものを食べてみますか」" },
  { type: "text", text: "「お、おう。それで何を食べるんだ？」" },
  { type: "text", text: "「キクラゲ…」" },
  { type: "text", text: "「え？」" },
  { type: "text", text: "「ではキクラゲを取りに海に向かいましょう」" },
  { type: "text", text: "「話に脈絡がなさすぎる！」" },
  { type: "text", text: "「え？しかもなんでキクラゲ？しかも海？」" },
  { type: "text", text: "「？」" },
  {
    type: "text",
    text: "「いや…百歩譲ってキクラゲ食べるのは取に行くのは良いとして」",
  },
  { type: "text", text: "「キクラゲは山に生えているキノコだけど・・」" },
  { type: "text", text: "「…」" },
  { type: "text", text: "「…」" },
  { type: "text", text: "「もしかして…」" },
  { type: "text", text: "「貴方は私が言うことを否定するのですか？」" },
  { type: "text", text: "「否定も何もキクラゲは・・」" },
  { type: "text", text: "「黙りなさい…」" },
  { type: "text", text: "「なにも違わない…私は何も間違っていない」" },
  {
    type: "text",
    text: "「間違っているのはクラゲという名前を付けているのに山育ちという世の中のほう」",
  },
  { type: "text", text: "「すげえ責任転嫁！」" },
  {
    type: "text",
    text: "「そんな…海を泳いでいた時に足にくっついてくる昆布みたいなやつがキクラゲだと思ってたのに…」",
  },
  { type: "text", text: "「じゃああれは一体…」" },
  { type: "text", text: "「普通に海藻だと思うけど」" },
  { type: "text", text: "「あはははは！そうかー…そうだったか…！」" },
  { type: "text", text: "「めっちゃ面白いんだけど！」" },
  { type: "text", text: "めっちゃ笑ってるけどそこそんな笑うとこなの！？" },
  { type: "text", text: "「笑いのツボがわからな過ぎる！」" },
  {
    type: "text",
    text: "「まさかキクラゲが山の幸だとは…世界はまた一つ賢くなりました」",
  },
  { type: "text", text: "「お、おう」" },
  {
    type: "text",
    text: "欲望は満たされないことが自然であり、多くの者はそれを満たすためのみで生きる。",
  },
  { type: "text", text: "「能ある鷹は爪を隠さずといいますからね」" },
  {
    type: "text",
    text: "「それを言うなら爪を隠すだし、世界の言い方だと奇人行為で思いっきり隠れてるからね！」",
  },
  { type: "text", text: "「何もかも間違ってるから！」" },
  // CASE３ アネモネ
  // 背景 花壇
  { type: "background", name: "garden", continue: true },
  { type: "text", text: "「何してるんだ？」" },
  { type: "text", text: "「植えてます」" },
  { type: "text", text: "「それは見たらわかるけど」" },
  { type: "text", text: "「アネモス」" },
  { type: "text", text: "「アネモス？」" },
  { type: "text", text: "「この子の名前」" },
  { type: "text", text: "「ああ、これはアネモネの花か」" },
  { type: "text", text: "「アネモス」" },
  { type: "text", text: "「お、おう…アネモスな」" },
  { type: "text", text: "「そういえば知っていますか？」" },
  {
    type: "text",
    text: "「花言葉は確か…あなたを愛しますとはかない恋だったか」",
  },
  { type: "text", text: "「…白は」" },
  { type: "text", text: "「他には白いアネモネの花言葉は真実、期待」" },
  { type: "text", text: "「紫のアネモネの花言葉はあなたを信じて待つ」" },
  { type: "text", text: "「赤のアネモネの花言葉は君を愛す」" },
  { type: "text", text: "「だったよな」" },
  { type: "text", text: "「いたっ！」" },
  { type: "text", text: "「って何！なんでぶつの！」" },
  { type: "text", text: "「知りません！」" },
  // CASE４
  // 背景 公園
  { type: "background", name: "park", continue: true },
  { type: "text", text: "「くらげ～」" },
  { type: "text", text: "「…何やってんだ？」" },
  { type: "text", text: "「見てわからないですか？」" },
  { type: "text", text: "「わからないから聞いているんだが…」" },
  { type: "text", text: "「ヒントは海でゆらゆら浮いている生き物です」" },
  { type: "text", text: "「あー！クラゲだ―！」" },
  { type: "text", text: "「正解！」" },
  {
    type: "text",
    text: "「やったー！！っじゃねぇから！クラゲはわかってたよ！」",
  },
  {
    type: "text",
    text: "「なんで公衆の面前でそんな奇怪な動きしてるんだよ！」",
  },
  { type: "text", text: "「例えばですけど」" },
  { type: "text", text: "「人は山に行けば山に登りますよね？」" },
  { type: "text", text: "「海に行けば海で泳ぎます」" },
  { type: "text", text: "「つまりそういうことです」" },
  { type: "text", text: "「いやそういうことじゃないからわからないから！」" },
  { type: "text", text: "「ちょっと君たち、話を聞いてもいいかな？」" },
  {
    type: "text",
    text: "「ほら見ろ！警察きちまったじゃねえか！話しかけずスルーしとけば",
  },
  { type: "text", text: "よかったよ！」" },
  { type: "text", text: "「つ・・疲れた」" },
  { type: "text", text: "「ふぅ…やっと誤解が解けたか…」" },
  {
    type: "text",
    text: "「私…警察とこうして話すの初めての経験です…なんだかドキドキしました」",
  },
  {
    type: "text",
    text: "「そんな目をキラキラさせていうことじゃないから！こっちは社会的に死にそうで",
  },
  { type: "text", text: "ドキドキしたよ！」" },
  { type: "text", text: "「それはそれは…ずばり…恋ですね」" },
  { type: "text", text: "「まじかよ…俺あの警察官さんに恋しちゃってたのか…」" },
  { type: "text", text: "「ってなるわけあるかーい！」" },
  { type: "text", text: "「くすくす」" },
  // CASE５ 歯医者
  // 背景 花畑
  { type: "background", name: "fieldOfFlowers", continue: true },
  { type: "text", text: "「私…頑張りましたよね？」" },
  { type: "text", text: "「世界…そんなこと言うな」" },
  { type: "text", text: "「まだ始まったばかりじゃないか」" },
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
  { type: "text", text: "「何・・？何を伝えたいんだ？」" },
  { type: "text", text: "「…あ…」" },
  { type: "text", text: "「あり…が…とう…」" },
  { type: "text", text: "「あ…あ…」" },
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
  // 背景 レストラン
  { type: "background", name: "restaurant", continue: true },
  { type: "text", text: "「美味しい～！」" },
  { type: "text", text: "「や…やっと終わった」" },
  { type: "text", text: "「苦労した後のパスタは最高ですね」" },
  { type: "text", text: "「全く…」" },
  { type: "text", text: "「どうだ…これに懲りたらしっかり歯磨きするんだぞ」" },
  { type: "text", text: "「はーい」" },
  { type: "text", text: "「後定期的に歯医者には行くからな！」" },
  { type: "text", text: "「っ！」" },
  { type: "text", text: "「そんな顔してもだめだから！」" },
  // CASE６ 妹
  // 背景 自室
  { type: "background", name: "room", continue: true },
  { type: "text", text: "ｐｐｐｐｐｐｐｐｐ" },
  // 背景 リビング
  { type: "background", name: "livingRoom", continue: true },
  { type: "text", text: "「世界～！お兄ちゃん起こしてきてー」" },
  { type: "text", text: "「…ん…わかった」" },
  // 背景 自室
  { type: "background", name: "room", continue: true },
  { type: "text", text: "「おはよう兄さん」" },
  { type: "text", text: "「寝てる」" },
  { type: "text", text: "「朝ですよ～朝ごはんですよ」" },
  { type: "text", text: "「全然ダメ」" },
  { type: "text", text: "「ほっぺた柔らかい」" },
  { type: "text", text: "「わっ！」" },
  { type: "text", text: "「だめ…これでも起きない」" },
  { type: "text", text: "「顔をつねってみる？」" },
  { type: "text", text: "「これでもだめ」" },
  { type: "text", text: "「布団を剥がすしかないか」" },
  { type: "text", text: "「えいっ！」" },
  {
    type: "text",
    text: "「いい加減に起きないといたずらしちゃいますよ兄さん」",
  },
  { type: "text", text: "「むぅ」" },
  { type: "text", text: "「こうなったら」" },
  { type: "text", text: "「兄さん…」" },
  { type: "text", text: "「ふわああああ…おはよう」" },
  { type: "text", text: "「おはようございます兄さん」" },
  { type: "text", text: "「なんか頬っぺた痛い気がするんだけど」" },
  { type: "text", text: "「気のせいです」" },
  { type: "text", text: "「早く起きないと兄さんの分も食べちゃいますからね」" },
  { type: "text", text: "「ういーす」" },
  // CASE７ 幼馴染 恋人 結婚
  // 背景リビング
  { type: "background", name: "livingRoom", continue: true },
  { type: "text", text: "「おかえりさない兄さん」" },
  { type: "text", text: "「御飯にする？食事にする？それともパスタ？」" },
  {
    type: "text",
    text: "「いやどれも食事！しかもう後半の時点でメニュー確定してる！」",
  },
  {
    type: "text",
    text: "「なんてこったこれで新婚生活始まって以来連続パスタ記録更新だぜ…」",
  },
  {
    type: "text",
    text: "「むしろこれからも更新し続けるので測定は無意味ですよ」",
  },
  { type: "text", text: "「なんて恐ろしいこと言うの！」" },
  {
    type: "text",
    text: "「いいじゃないですか、ちゃんとお味噌汁も付けてますよ」",
  },
  {
    type: "text",
    text: "「そっか…よかったー！安心した！ってなるかーい！流石に身体壊すわ！」",
  },
  { type: "text", text: "「たまには違うもん食べよう！？」" },
  { type: "text", text: "「…」" },
  { type: "text", text: "「なんて顔するの！怖いわ！」" },
  { type: "moveNext", continue: false },
];
