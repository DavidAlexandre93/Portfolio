#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const roots = ['components', 'context', 'data', 'pages'];
const exts = new Set(['.js', '.jsx', '.json', '.css', '.md', '.yml', '.yaml']);

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.name === 'node_modules' || entry.name === '.next') continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(fullPath));
    else if (exts.has(path.extname(entry.name))) files.push(fullPath);
  }

  return files;
}

function isFormatted(content) {
  const hasTrailingWhitespace = /[ \t]+$/m.test(content);
  const hasTabs = /^\t+/m.test(content);
  const hasCRLF = /\r\n/.test(content);
  const hasFinalNewline = content.length === 0 || content.endsWith('\n');
  return !hasTrailingWhitespace && !hasTabs && !hasCRLF && hasFinalNewline;
}

const files = roots.flatMap((root) => (fs.existsSync(root) ? walk(root) : []));
const invalid = files.filter((file) => !isFormatted(fs.readFileSync(file, 'utf8')));

if (invalid.length > 0) {
  console.error('Arquivos com formatação inválida:');
  invalid.forEach((file) => console.error(`- ${file}`));
  process.exit(1);
}

console.log(`Formatação validada em ${files.length} arquivos.`);
