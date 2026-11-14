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
  'I asked it plainly, and it did',
  'precisely what I asked. Not what I meant.',
  'That was the lesson, the small cold shock:',
  'my words were never the work.',
  '',
  'The work was the knowing: when a thing is done,',
  'the wrong shade of almost-right, the pause',
  'before I say go, the no I keep',
  "for the one line that isn't mine.",
  '',
  'So I say it slower now. I weigh each verb',
  'before I hand it over, and I keep',
  'the choosing close and the doing far —',
  'and in the space between, I hear at last',
  'my own voice played back — strange, and mine.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
