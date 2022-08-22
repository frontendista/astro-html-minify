import glob from "fast-glob";
import { bgBlue, black } from "kleur";
import { fileURLToPath } from "url";
import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { minify as htmlMinify } from "html-minifier-terser";
import { dim } from "kleur";
import { getTimeStat, reportSize } from "./utils";
import type { IntegrationOptions } from "./options";

export async function minify(
  distDirectory: string,
  { htmlTerserMinifierOptions, reportCompressedSize }: IntegrationOptions
) {
  const timer = performance.now();

  const cwd = fileURLToPath(distDirectory);

  const htmlFiles = await glob("**/*.html", {
    cwd,
  });

  if (htmlFiles.length === 0) {
    return;
  }

  console.log("");
  console.log(bgBlue(black(" optimizing html ")));

  for (const filename of htmlFiles) {
    const filePath = join(cwd, filename);

    const html = await readFile(filePath, "utf8");
    const optimizedHTML = await htmlMinify(html, htmlTerserMinifierOptions);

    await reportSize(filename, html, optimizedHTML, reportCompressedSize);
    await writeFile(filePath, optimizedHTML, "utf-8");
  }

  console.log(dim(`Completed in ${getTimeStat(timer, performance.now())}. \n`));
}
