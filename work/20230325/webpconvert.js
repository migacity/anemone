"use strict";
import fs from "fs/promises";
import path from "path";
import { execSync } from "child_process";

const BASE_PATH = ".";
const ffmpeg = "cmd /c npx @squoosh/cli";
const option =
  '--webp "{"quality":75,"target_size":0,"target_PSNR":0,"method":4,"sns_strength":50,"filter_strength":60,"filter_sharpness":0,"filter_type":1,"partitions":0,"segments":4,"pass":1,"show_compressed":0,"preprocessing":0,"autofilter":0,"partition_limit":0,"alpha_compression":1,"alpha_filtering":1,"alpha_quality":100,"lossless":0,"exact":0,"image_hint":0,"emulate_jpeg_size":0,"thread_level":0,"low_memory":0,"near_lossless":100,"use_delta_palette":0,"use_sharp_yuv":0}"';

fs.readdir(BASE_PATH)
  .then((fileNames) => {
    const images = fileNames.filter((x) =>
      x.toLocaleLowerCase().endsWith(".jpg") ||
      x.toLocaleLowerCase().endsWith(".png")
    );
    images.forEach((n) => {
      try {
        execSync(
          `${ffmpeg} ${option} "${path.join(BASE_PATH, n)}"`,
        );
      } catch (e) {
        console.log(e);
      }
    });
  })
  .catch((err) => console.log(err));
