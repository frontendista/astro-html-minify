import merge from "deepmerge";

import { minify } from "./minify";
import { defaultOptions, type IntegrationOptions } from "./options";

import type { AstroIntegration } from "astro";

const pluginName = "@frontendista/astro-minify";

export default function createIntegration(
  options: IntegrationOptions = {}
): AstroIntegration {
  options = merge(defaultOptions, options);

  return {
    name: pluginName,
    hooks: {
      "astro:config:setup": ({ config }) => {
        if (typeof options.reportCompressedSize === "undefined") {
          options.reportCompressedSize =
            config.vite.build?.reportCompressedSize;
        }
      },
      "astro:build:done": async ({ dir }) => {
        await minify(dir.href, options);
      },
    },
  };
}
