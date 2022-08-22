import merge from "deepmerge";

import { minify } from "./minify";
import { defaultOptions, type IntegrationOptions } from "./options";

import type { AstroIntegration } from "astro";

export default function createIntegration(
  options: IntegrationOptions = {}
): AstroIntegration {
  options = merge(defaultOptions, options);

  return {
    name: "@frontendista/astro-minify",
    hooks: {
      "astro:config:setup": ({ config }) => {
        if (typeof options.reportCompressedSize === "undefined") {
          options.reportCompressedSize = config.vite.build
            ? config.vite.build.reportCompressedSize
            : true;
        }
      },
      "astro:build:done": async ({ dir }) => {
        await minify(dir.href, options);
      },
    },
  };
}
