import { cp, mkdir, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const root = fileURLToPath(new URL('../', import.meta.url));
const output = path.join(root, 'dist');
await mkdir(output, { recursive: true });
for (const name of ['index.html', 'styles.css', 'app.js', 'favicon.svg', 'fonts', 'robots.txt', '_headers', '404.html']) {
  await cp(path.join(root, name), path.join(output, name), { recursive: true });
}
const { size } = await stat(path.join(output, 'index.html'));
console.log(`Built static site in dist/ (${(size / 1024).toFixed(1)} KB HTML). No runtime dependencies.`);
