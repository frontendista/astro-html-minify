import { cyan, green, dim } from "kleur/colors";
import { gzip } from "node:zlib";
import { promisify } from "node:util";

export async function reportSize(
  filename: string,
  original: string,
  transformed: string,
  logCompressed?: boolean
) {
  const compress = promisify(gzip);
  const beforeSize = (Buffer.byteLength(original) / 1024).toFixed(2);
  const afterSize = (Buffer.byteLength(transformed) / 1024).toFixed(2);

  process.stdout.write(
    `${cyan(filename)} optimized from ${beforeSize} KiB to ${green(
      `${afterSize} KiB`
    )}`
  );

  if (logCompressed) {
    const { byteLength } = await compress(transformed);
    const compressedSize = (byteLength / 1024).toFixed(2);
    process.stdout.write(dim(` / gzip: ${compressedSize} KiB`));
  }

  process.stdout.write("\n");
}

export function getTimeStat(timeStart: number, timeEnd: number) {
  const buildTime = timeEnd - timeStart;
  return buildTime < 750
    ? `${Math.round(buildTime)}ms`
    : `${(buildTime / 1000).toFixed(2)}s`;
}
