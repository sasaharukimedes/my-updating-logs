import { Options } from "$fresh/plugins/twindv1.ts";
import { defineConfig, Preset } from "https://esm.sh/@twind/core@1.1.3";
import presetTailwind from "https://esm.sh/@twind/preset-tailwind@1.1.4";

export default {
  ...defineConfig({
    presets: [presetTailwind() as Preset],
  }),
  selfURL: import.meta.url,
  // setup: {
  //   theme: {
  //     colors: {
  //       back: "#e6e6d8",
  //       gray: "#e5e7eb",
  //       letter: "#121212",
  //     },
  //   },
  // },
} as Options;
