import type { Options as HTMLTerserOptions } from "html-minifier-terser";

import { minifyCSS } from "./optimizers/css";

export interface IntegrationOptions {
  /**
   * Options for html-minifier-terser.
   *
   * Possible values are available here: https://github.com/terser/html-minifier-terser#options-quick-reference
   */
  htmlTerserMinifierOptions?: HTMLTerserOptions;
  /**
   * Reports gzip size of the transformed files.
   *
   * Overrides the value from vite.build.reportCompressedSize.
   */
  reportCompressedSize?: boolean;
  /**
   * Removes data-test attributes fro html.
   *
   * - data-test
   * - data-test-id
   * - data-testid
   *
   * @default false
   */
  removeTestAttributes?: boolean;
}

export const defaultOptions: IntegrationOptions = {
  removeTestAttributes: false,
  htmlTerserMinifierOptions: {
    minifyCSS,
    minifyJS: true,
    collapseWhitespace: true,
    sortClassName: true,
    removeTagWhitespace: true,
    removeStyleLinkTypeAttributes: true,
    removeScriptTypeAttributes: true,
    removeRedundantAttributes: true,
    removeComments: false,
    processConditionalComments: true,
    keepClosingSlash: true,
    caseSensitive: true,
    collapseInlineTagWhitespace: true,
  },
};
