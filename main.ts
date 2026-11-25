import { mkdirSync, writeFileSync } from "node:fs";

// The 3AM Fridge Text — one line a smart fridge texts its owner at 3am.
const LINE =
  "3am. the leftovers started a group chat about you. i didn't defend you.";

// Gate: the kit requires 1-140 Unicode code points, a single line,
// not whitespace-only, valid UTF-8.
const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 140) {
  throw new Error(`line is ${codePoints} code points, must be 1-140`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("line must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${codePoints} code points to /output/entry.txt`);
