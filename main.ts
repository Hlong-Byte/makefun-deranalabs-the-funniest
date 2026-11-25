import { mkdirSync, writeFileSync } from 'node:fs';

// The retry loop's one-line resignation letter (140 characters at most).
const LINE = "I retried four thousand times. You fixed it by restarting the server. I'm leaving, and I'm taking the exponential backoff with me.";

function writeEntry(outDir: string, line: string): void {
  if (line.length > 140) throw new Error(`line is ${line.length} characters, over the 140 the bounty allows`);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/entry.txt`, `${line}\n`, 'utf8');
  console.log(line);
}

writeEntry(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', LINE);
