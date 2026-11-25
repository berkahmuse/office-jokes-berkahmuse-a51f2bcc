// One-Line Office Jokes — entry for u-markk-st-one-line-office-jokes-a51f2bcc.
// Writes a single original one-line office joke to /output/entry.txt.
// Deterministic: no input, no network, no randomness — every run writes
// the exact same bytes.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const JOKE =
  "The office printer has exactly two moods: out of toner, and jammed on the only page I actually needed.";

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
// Gate: entry must fit the 1–199 byte budget too (multi-byte chars can pass a char count but overflow bytes).
if (Buffer.byteLength(JOKE, "utf8") > 199) throw new Error("entry exceeds 199 bytes");
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, JOKE, "utf8");
console.log(`Wrote ${JOKE.length} chars to ${outPath}`);
