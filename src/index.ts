import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

import { glob } from "glob";
import {
	Minifier,
	type TerserOptions,
	type LightningCSSOptions,
	type ESBuildOptions
} from "@frontendista/html-minifier-terser";

import type { AstroIntegration } from "astro";

interface IntegrationOptions {
	html?: TerserOptions;
	css?: LightningCSSOptions;
	js?: ESBuildOptions;
}

export default function createIntegration(options?: IntegrationOptions): AstroIntegration {
	const minifier = new Minifier()
		.withHTMLOptions(options?.html || {})
		.withCSSOptions(options?.css || {})
		.withJSOptions(options?.js || {});

	return {
		name: "@frontendista/astro-minify",
		hooks: {
			"astro:build:done": async ({ dir }) => {
				const cwd = fileURLToPath(dir);

				const htmlFiles = await glob("**/*.html", {
					cwd
				});

				if (htmlFiles.length === 0) {
					return;
				}

				for (const filename of htmlFiles) {
					const filePath = join(cwd, filename);

					let html = await readFile(filePath, "utf8");

					// html = removeTestAttributes
					// 	? [/data-test=".*?"/g, /data-test-id=".*?"/g, /data-testid=".*?"/g].reduce(
					// 			(currentHTML, attributeRegex) => {
					// 				return currentHTML.replace(attributeRegex, "");
					// 			},
					// 			html
					// 	  )
					// 	: html;

					const optimizedHTML = await minifier.minify(html);

					await writeFile(filePath, optimizedHTML, "utf-8");
				}
			}
		}
	};
}
