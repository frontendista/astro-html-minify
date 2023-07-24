# Astro HTML minify

HTML minifier for statically rendered files in Astro.

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

### 1.2.2 Add to configuration

Default import the integration and add it to `integrations` key in your `astro.config.{mjs,js,ts}` configuration.

```ts
import { defineConfig } from "astro/config";

import minify from "@frontendista/astro-html-minify";

export default defineConfig({
	integrations: [minify()]
});
```

## 1.3 Customize minifiers options

```ts
import { defineConfig } from "astro/config";

import minify from "@frontendista/astro-html-minify";

export default defineConfig({
	integrations: [
		minify({
			html: {
				// Customize Terser options
			},
			css: {
				// Customize LightningCSS options
			},
			js: {
				// Customize ESBuild options
			}
		})
	]
});
```
