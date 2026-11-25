// One-Line Office Jokes — entry for u-markk-st-one-line-office-jokes-a51f2bcc.
// Writes a single original one-line office joke to /output/entry.txt.
// Deterministic: no input, no network, no randomness — every run writes
// the exact same bytes.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const JOKE =
  "The office printer has exactly two moods: out of toner, and jammed on the only page I actually needed.";

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, JOKE, "utf8");
console.log(`Wrote ${JOKE.length} chars to ${outPath}`);
