# Astro HTML minify

Little Astro integration for optimizing statically rendered HTML, it uses [html-minifier-terser](https://github.com/terser/html-minifier-terser) and [@parcel/css](https://github.com/parcel-bundler/parcel-css) for fast minification.

If you want advanced optimizations (such as images, svgs) see [astro-compress](https://github.com/Playform/astro-compress).

# 1. Usage

## 1.1 Using `astro add` command

```sh
# Using npm
npx astro add @frontendista/astro-html-minify

# Using yarn
yarn astro add @frontendista/astro-html-minify

# Using pnpm
pnpx astro add @frontendista/astro-html-minify
```

## 1.2 Manually

### 1.2.1 Install dependency

```sh
# Using npm
npm install --save-dev @frontendista/astro-html-minify

# Using npm
yarn add -D @frontendista/astro-html-minify

# Using npm
pnpm add -D @frontendista/astro-html-minify
```

### 1.2.1 Add to configuration

Default import the integration and add it to `integrations` key in your `astro.config.{mjs,js,ts}` configuration.

```ts
import { defineConfig } from "astro/config";
import compress from "astro-compress";
import htmlMinify from "@frontendista/astro-html-minify";

export default defineConfig({
  integrations: [compress(), htmlMinify()],
});
```

## 1.3 How to customize integration options

```ts
import { defineConfig } from "astro/config";
import compress from "astro-compress";
import htmlMinify from "@frontendista/astro-html-minify";

export default defineConfig({
  integrations: [
    compress(),
    htmlMinify({
      reportCompressedSize: false,
      htmlTerserMinifierOptions: {
        removeComments: false,
      },
    }),
  ],
});
```

**Note:** Your custom configuration is merged with the defaults, so feel free to omit properties.

## 1.4 You are good to go 🚀

```sh
# Build your application
pnpm astro build

# Check your minified **/*.html files in your build folder
```

- Note that minification occurs only in building the application. In development mode it is left intact.

# 2. Integration options

| Flag                        | Description                                   | Default Value                                    |
| --------------------------- | --------------------------------------------- | ------------------------------------------------ |
| `reportCompressedSize`      | Log gzipped optimized HTML size               | depends on vite.build.reportCompressedSize value |
| `htmlTerserMinifierOptions` | override default html-minifier-terser options | See table below                                  |

## 2.1 Default html-minifier-terser options

| Option                          | @frontendista/astro-html-minify default                          | html-minifier-terser default                                  |
| ------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------- |
| `caseSensitive`                 | true                                                             | `false`                                                       |
| `collapseBooleanAttributes`     |                                                                  | `false`                                                       |
| `collapseInlineTagWhitespace`   | true                                                             | `false`                                                       |
| `collapseWhitespace`            | true                                                             | `false`                                                       |
| `conservativeCollapse`          |                                                                  | `false`                                                       |
| `continueOnParseError`          |                                                                  | `false`                                                       |
| `customAttrAssign`              |                                                                  | `[ ]`                                                         |
| `customAttrCollapse`            |                                                                  |                                                               |
| `customAttrSurround`            |                                                                  | `[ ]`                                                         |
| `customEventAttributes`         |                                                                  | `[ /^on[a-z]{3,}$/ ]`                                         |
| `decodeEntities`                |                                                                  | `false`                                                       |
| `html5`                         |                                                                  | `true`                                                        |
| `ignoreCustomComments`          |                                                                  | `[ /^!/, /^\s*#/ ]`                                           |
| `ignoreCustomFragments`         |                                                                  | `[ /<%[\s\S]*?%>/, /<\?[\s\S]*?\?>/ ]`                        |
| `includeAutoGeneratedTags`      |                                                                  | `true`                                                        |
| `keepClosingSlash`              | true                                                             | `false`                                                       |
| `maxLineLength`                 |                                                                  |
| `minifyCSS`                     | Uses [@parcel/css](https://github.com/parcel-bundler/parcel-css) | `false` (could be `true`, `Object`, `Function(text, type)`)   |
| `minifyJS`                      | true                                                             | `false` (could be `true`, `Object`, `Function(text, inline)`) |
| `minifyURLs`                    |                                                                  | `false` (could be `String`, `Object`, `Function(text)`)       |
| `noNewlinesBeforeTagClose`      |                                                                  | `false`                                                       |
| `preserveLineBreaks`            |                                                                  | `false`                                                       |
| `preventAttributesEscaping`     |                                                                  | `false`                                                       |
| `processConditionalComments`    | true                                                             | `false`                                                       |
| `processScripts`                |                                                                  | `[ ]`                                                         |
| `quoteCharacter`                |                                                                  |                                                               |
| `removeAttributeQuotes`         |                                                                  | `false`                                                       |
| `removeComments`                | true                                                             | `false`                                                       |
| `removeEmptyAttributes`         |                                                                  | `false` (could be `true`, `Function(attrName, tag)`)          |
| `removeEmptyElements`           |                                                                  | `false`                                                       |
| `removeOptionalTags`            |                                                                  | `false`                                                       |
| `removeRedundantAttributes`     | true                                                             | `false`                                                       |
| `removeScriptTypeAttributes`    | true                                                             | `false`                                                       |
| `removeStyleLinkTypeAttributes` | true                                                             | `false`                                                       |
| `removeTagWhitespace`           | true                                                             | `false`                                                       |
| `sortAttributes`                |                                                                  | `false`                                                       |
| `sortClassName`                 | true                                                             | `false`                                                       |
| `trimCustomFragments`           |                                                                  | `false`                                                       |
| `useShortDoctype`               |                                                                  | `false`                                                       |
