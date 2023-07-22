import { defineConfig } from "astro/config";

// import minify from "../src";
import minify from "@frontendista/astro-html-minify";

export default defineConfig({
	compressHTML: true,
	output: "hybrid",
	integrations: [minify()]
});
