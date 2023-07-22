import { transform, transformStyleAttribute } from "lightningcss";

/**
 * Transforms and minifies CSS using lightningcss package.
 *
 * @param originalCode Code to be transformed and minified.
 * @param type Whether the CSS comes from inline attribute or CSS stylesheet.
 *
 * @returns transformed and minified code.
 */
export function minifyCSS(originalCode: string, type: "inline" | undefined) {
	const code = Buffer.from(originalCode, "utf-8");

	const { code: transformedHTML } =
		type === "inline"
			? transformStyleAttribute({
					code,
					minify: true
			  })
			: transform({
					code,
					filename: "style-tag.css",
					minify: true
			  });

	return transformedHTML.toString("utf-8");
}
