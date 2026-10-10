// Run from the repo root: node scripts/build-classic-skits.js
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const skits = ['invisible-bench', 'clean-socks', 'viper-is-coming'];
(async () => {
  fs.mkdirSync('tmp/pdfs', { recursive: true });
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 816, height: 1056 } });
    await page.emulateMedia({ media: 'print' });
    for (const name of skits) {
      await page.goto('file://' + path.resolve(`skits/${name}-skit_one-pager.html`));
      const layout = await page.locator('.page').evaluate(el => ({ height: el.getBoundingClientRect().height, width: el.getBoundingClientRect().width }));
      if (layout.height > 1056 || layout.width > 816) throw new Error(`${name}: exceeds Letter page: ${JSON.stringify(layout)}`);
      await page.pdf({ path: `tmp/pdfs/${name}.pdf`, preferCSSPageSize: true, printBackground: true, displayHeaderFooter: false });
      console.log(`${name}: ${Math.ceil(layout.height)}px of 1056px`);
    }
  } finally { await browser.close(); }
  // Pass a Python executable with pypdf installed as the optional first argument.
  const { spawnSync } = require('child_process');
  const merge = spawnSync(process.argv[2] || 'python3', ['-c', `
from pypdf import PdfReader, PdfWriter
from pathlib import Path
names = ${JSON.stringify(skits)}
writer = PdfWriter()
for name in names:
    reader = PdfReader('tmp/pdfs/' + name + '.pdf')
    assert len(reader.pages) == 1, name + ': expected one page'
    writer.append(reader)
writer.add_metadata({'/Title': 'Classic Cub Scout Skits - Three One-Page Handouts'})
Path('output/pdf').mkdir(parents=True, exist_ok=True)
writer.write('output/pdf/classic-cub-scout-skits.pdf')
reader = PdfReader('output/pdf/classic-cub-scout-skits.pdf')
assert len(reader.pages) == len(names)
for page in reader.pages:
    assert float(page.mediabox.width) == 612 and float(page.mediabox.height) == 792
    assert 'LEADER NOTE' in page.extract_text() and 'Reference:' in page.extract_text()
print('Verified three complete Letter pages.')
`], { stdio: 'inherit' });
  if (merge.status !== 0) throw new Error('PDF merge failed; supply a Python executable with pypdf installed.');
})().catch(error => { console.error(error); process.exit(1); });
