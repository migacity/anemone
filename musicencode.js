// 音声ファイルをエンコードする。

import { writeFile } from "fs/promises";
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";

const ffmpeg = createFFmpeg({ log: true });
const musics = [
  {
    from: "arcadia.ogg",
    to: ["arcadia.m4a", "arcadia.ogg"],
  },
  {
    from: "housekitan_1.ogg",
    to: ["housekitan_1.m4a", "housekitan_1.ogg"],
  },
  {
    from: "kasumi_1.ogg",
    to: ["kasumi_1.m4a", "kasumi_1.ogg"],
  },
  {
    from: "sirius1_1.ogg",
    to: ["sirius1_1.m4a", "sirius1_1.ogg"],
  },
  {
    from: "sirius2_1.ogg",
    to: ["sirius2_1.m4a", "sirius2_1.ogg"],
  },
  {
    from: "tomedonaki1_1.ogg",
    to: ["tomedonaki1_1.m4a", "tomedonaki1_1.ogg"],
  },
  {
    from: "tomedonaki2_2.ogg",
    to: ["tomedonaki2_2.m4a", "tomedonaki2_2.ogg"],
  },
];

async function main() {
  await ffmpeg.load();

  for (const { from, to: tos } of musics) {
    const inputpath = "./media/bgm/" + from;
    ffmpeg.FS(
      "writeFile",
      from,
      await fetchFile(inputpath),
    );

    for (const to of tos) {
      const tmpfile = "tmp_" + to;
      const outputpath = "./assets/" + to;
      await ffmpeg.run("-i", from, "-b:a", "96k", tmpfile);
      await writeFile(outputpath, ffmpeg.FS("readFile", tmpfile));
    }
  }
};

await main()
process.exit(0);
