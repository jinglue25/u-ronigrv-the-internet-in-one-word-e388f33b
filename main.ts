import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const sourceUrl = import.meta.url;
const line = "Arguments.";
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outputFile = join(outputDirectory, "entry.txt");

mkdirSync(outputDirectory, { recursive: true });
writeFileSync(outputFile, `${line}\n`, "utf8");

const characterCount = readFileSync(outputFile, "utf8").trim().length;
if (characterCount === 0 || characterCount > 30) {
  throw new Error(
    `Competition gate failed: entry.txt must contain 1–30 trimmed characters; got ${characterCount}. Source: ${sourceUrl}`,
  );
}
