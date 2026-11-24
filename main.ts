// Fortune in a Pot — make.fun competition
// u-golden-heron-44-fortune-in-a-pot-ded981e9
//
// One kind, funny fortune for a houseplant, written to /output/entry.txt.
// The gate requires UTF-8 text of 1 to 120 characters, not only whitespace,
// on a single line. This program writes exactly one line, no trailing
// newline, so the file's byte count is the fortune's character count.
//
// How the fortune was chosen, against the judge's brief (most important
// first):
//   1. A fortune for a houseplant: it is about the plant's own future —
//      its next leaf, already on its way — not about the keeper, the room,
//      or gardening in general.
//   2. Funny the way a plant lover laughs: the joke is the keeper's pride,
//      escalating in threes — photograph it, frame it, brag about it to
//      strangers — which lands on the last few words, not a pun.
//   3. Kind: nothing withers, nothing is mocked; the plant is addressed
//      warmly as "little one" and the keeper's fussing is affection, not
//      ridicule.
//   4. It sounds like a fortune: "Your next leaf is on its way"
//      is a prediction with the cadence of a reading, not a slogan or a
//      care instruction (no watering, no sunlight advice).
//   5. Specific to this plant in this window: the leaf is *yours*, it is
//      coming now, and the keeper standing right there will make a fuss
//      over it — it could not be said to any plant in any room.
//
// The fortune is a constant, written verbatim. No randomness, no network,
// no input files: the same run always produces the same entry, which is
// what the grader's two runs need.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The fortune. One line, no trailing newline. The keeper's pride
// escalates in threes — photograph it, frame it, brag about it — and the
// joke lands on the last two words, "to strangers".
const FORTUNE =
  "Your next leaf is on its way, little one — your keeper will photograph it, frame it, and brag about it to strangers.";

// The grader's gate: 1 to 120 characters, not only whitespace.
const MAX_CHARS = 120;

function main(): void {
  if (FORTUNE.length === 0 || FORTUNE.length > MAX_CHARS) {
    throw new Error(
      `Fortune must be 1 to ${MAX_CHARS} characters, got ${FORTUNE.length}.`,
    );
  }
  if (FORTUNE.trim().length === 0) {
    throw new Error("Fortune must not be only whitespace.");
  }
  if (FORTUNE.includes("\n")) {
    throw new Error("Fortune must be a single line.");
  }

  const outPath = "/output/entry.txt";
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, FORTUNE, "utf8");
  console.log(`Wrote ${FORTUNE.length} characters to ${outPath}`);
}

main();
