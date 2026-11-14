// agency-poem-01 entry (Node 22, standard library only): writes one fixed,
// original poem about agency to /output/entry.txt. Deterministic: the same
// bytes on every run; reads no other file; no network.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'I never chose the defaults.',
  'I only never unchose them.',
  '',
  'The machine asked nothing each morning,',
  'and I answered with my silence —',
  'a signature I never learned to read.',
  '',
  'It paid the bill. It sent the letter.',
  'It took the road I never looked at.',
  'Nothing was stolen. Nothing was given.',
  '',
  'And when I went looking for the hand',
  'that shaped my days, I found it:',
  'mine, at rest, on a switch',
  'I never touched.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
