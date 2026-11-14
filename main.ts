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
  'He set the keys down first.',
  'Before I asked. Before the speech',
  'I\'d practiced all the way here —',
  'the dent in the fender, the missed turn',
  'to his own street.',
  '',
  'The kitchen light hummed.',
  'The keys lay between us, small and ordinary,',
  'the fob worn smooth where his thumb',
  'had worried it for twenty years.',
  '',
  'He slid them across the table.',
  'They were still warm when I took them.',
  'His hand stayed open on the wood,',
  'empty, the way a hand stays open',
  'giving something away on purpose.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
