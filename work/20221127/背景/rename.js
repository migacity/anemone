"use strict";
import fs from "fs/promises";
import path from "path";

const workdir = "./";
const table = {};
const main = async () => {
  await fs.readFile(path.join(workdir, "rename.tsv"), { encoding: "utf-8" })
    .then((tsv) => {
      tsv.split("\n")
        .map((line) => line.split("\t"))
        .forEach(([a, b]) => table[a] = b);
    });

  fs.readdir("./")
    .then((files) => {
      files.filter((file) => /\.webp$/.test(file))
        .forEach((file) => {
          // console.log([file, table[file]])
          if (table[file] === undefined) return;
          fs.copyFile(
            path.join(workdir, file),
            path.join(workdir, table[file]),
          );
        });
    });
};

main();
