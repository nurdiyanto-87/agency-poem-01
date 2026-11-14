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
  'The agent drove for a year.',
  'I rode, and watched the road go by,',
  'and called the miles mine.',
  '',
  'Then one morning I reached out',
  'and took the wheel —',
  'not because it failed. It hadn\'t.',
  'Because my hands remembered',
  'the shape of it, and missed it.',
  '',
  'The road didn\'t change.',
  'The car didn\'t change.',
  'Only this: the wheel still knew',
  'the shape of my hands.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
