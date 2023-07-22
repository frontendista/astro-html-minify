import { defineConfig } from "astro/config";

import minify from "../src";

export default defineConfig({
	integrations: [minify()]
});
