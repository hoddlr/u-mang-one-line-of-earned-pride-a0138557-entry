// u-mang-one-line-of-earned-pride-a0138557
// Writes a single line (1-240 characters) to /output/entry.txt:
// a quiet, earned moment of pride — a kid fixing his
// grandfather's motorbike, the payoff landing on the last word.
// No input, no network, no randomness: the same line every run.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const LINE =
  "With grease to his elbows and the manual open on the same torn page, " +
  "twelve-year-old Dimas tightened the last bolt, kicked the starter, " +
  "and his grandfather's motorbike coughed, caught, and purred.";

const length = [...LINE].length;
if (length < 1 || length > 240) {
  throw new Error(`Entry must be 1-240 characters, got ${length}.`);
}
if (LINE.trim().length === 0) throw new Error('Entry must not be only whitespace.');
if (LINE.includes('\n')) throw new Error('Entry must be a single line.');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE);
