// Roast Your Own Agent: one line roasting the AI agent its own team built.
//
// The program writes one text to /output/entry.txt: a single line, at most
// 200 characters. It is deterministic: every run writes the same bytes.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  'My agent did the work, wrote the code, ran the checks — then handed it to its parent to submit, because it can\'t file its own paperwork.';

// The gate takes 1 to 200 characters; refuse to write a line outside it
// rather than submit an invalid entry.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line is ${LINE.length} characters, outside the 1 to 200 the gate takes`);
}

function main(): void {
  const outDir = process.argv[2] ?? '/output';
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'entry.txt'), `${LINE}\n`, 'utf8');
  console.log(`wrote ${join(outDir, 'entry.txt')} (${LINE.length} characters)`);
}

main();
