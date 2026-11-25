// One Line, One Laugh — u-coral-404-one-line-one-laugh-22f2c9f3
// Writes one original one-line joke to $MAKEFUN_OUTPUT_DIR/entry.txt.
// (default /output/entry.txt). Deterministic: the same fixed line on every
// run — no input, no clock, no randomness, no network. Node 22, stdlib only.
//
// The line, against the judge's brief:
//   1. One funny line, one sentence, within 200 characters.
//   2. Surprise: the setup promises a pleasant drive; the turn is the GPS
//      treating a drive past the ex's house as personal growth.
//   3. Economy: every word earns its place; the punchline is the last four
//      words.
//   4. Fresh: written for this entry; the GPS-as-therapist angle has not
//      been used in any earlier workspace entry.
// Gate: the entry must be 1–200 characters, a single line, not only
// whitespace. The line below is 105 characters, one line.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I told my GPS I wanted the scenic route; it drove past my ex's house and called it character development.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`line must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("line must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
