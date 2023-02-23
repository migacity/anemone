// 音声ファイルをエンコードする。

import { writeFile } from "fs/promises";
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";

const ffmpeg = createFFmpeg({ log: true });
(async () => {
  await ffmpeg.load();
  ffmpeg.FS(
    "writeFile",
    "arcadia.ogg",
    await fetchFile("./media/bgm/arcadia.ogg"),
  );
  await ffmpeg.run("-i", "arcadia.ogg", "-b:a", "96k", "arcadia.m4a");
  await writeFile("./assets/arcadia.m4a", ffmpeg.FS("readFile", "arcadia.m4a"));

  await ffmpeg.run("-i", "arcadia.ogg", "-b:a", "96k", "tmp_arcadia.ogg");
  await writeFile("./assets/arcadia.ogg", ffmpeg.FS("readFile", "tmp_arcadia.ogg"));
  process.exit(0);
})();
