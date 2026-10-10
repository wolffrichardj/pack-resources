// From the repo root: node scripts/build-classic-songs.js [python-with-pypdf]
const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');
const { spawnSync } = require('child_process');
const assert = require('assert/strict');
const { chromium } = require('playwright');
const songs = require('../songs/evidence/source-transcriptions.json');

(async () => {
  const temp = fs.mkdtempSync(path.join(require('os').tmpdir(), 'pack-classic-songs-'));
  const output = path.resolve('output/pdf/classic-campfire-songs.pdf');
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 816, height: 1056 } });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.emulateMedia({ media: 'print' });
    for (const song of songs) {
      await page.goto(pathToFileURL(path.resolve(`songs/${song.slug}_one-pager.html`)).href);
      assert.equal(await page.locator('h1').textContent(), song.title);
      assert.deepEqual(await page.locator('.lyrics').evaluateAll(nodes => nodes.map(node => node.innerText.split('\n'))), song.sections.map(section => section.lines), `${song.slug}: source transcription mismatch`);
      assert.equal(await page.locator('.flow').textContent(), song.flow);
      assert.equal(await page.locator('.note p').textContent(), song.teaching);
      assert.equal(await page.locator('footer, a, script, link, img').count(), 0, `${song.slug}: unexpected assets or footer`);
      const layout = await page.locator('.page').evaluate(el => {
        const r = el.getBoundingClientRect();
        return { height: r.height, width: r.width, overflow: el.scrollWidth > el.clientWidth };
      });
      assert(layout.height <= 1056 && layout.width <= 816 && !layout.overflow, `${song.slug}: exceeds Letter: ${JSON.stringify(layout)}`);
      await page.pdf({ path: path.join(temp, song.slug + '.pdf'), preferCSSPageSize: true, printBackground: true, displayHeaderFooter: false });
      console.log(`${song.slug}: ${Math.ceil(layout.height)}px / 1056px`);
      await page.emulateMedia({ media: 'screen' });
      await page.setViewportSize({ width: 375, height: 812 });
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${song.slug}: narrow-screen overflow`);
      await page.setViewportSize({ width: 816, height: 1056 });
      await page.emulateMedia({ media: 'print' });
    }
    assert.deepEqual(errors, [], 'Browser errors');
    fs.mkdirSync(path.dirname(output), { recursive: true });
    const merged = spawnSync(process.argv[2] || 'python3', ['-c', `
import json, re, sys
from pathlib import Path
from pypdf import PdfReader, PdfWriter
temp, output, evidence = sys.argv[1:]
songs = json.loads(Path(evidence).read_text())
writer = PdfWriter()
normalize = lambda text: re.sub(r'\\s+', ' ', text).strip()
for song in songs:
    reader = PdfReader(Path(temp) / (song['slug'] + '.pdf'))
    assert len(reader.pages) == 1, song['slug'] + ': expected one page'
    text = normalize(reader.pages[0].extract_text())
    assert normalize(song['title']) in text
    position = 0
    for section in song['sections']:
        fragment = normalize(' '.join(section['lines']))
        found = text.find(fragment, position)
        assert found >= 0, song['slug'] + ': missing or reordered PDF lyrics'
        position = found + len(fragment)
    writer.append(reader)
writer.add_metadata({'/Title': 'Classic Campfire Songs - Four One-Page Song Sheets'})
writer.write(output)
reader = PdfReader(output)
assert len(reader.pages) == len(songs)
for page in reader.pages:
    assert float(page.mediabox.width) == 612 and float(page.mediabox.height) == 792
    text = page.extract_text()
    assert 'Reference:' not in text and 'Printable handout' not in text
    assert not page.get('/Annots'), 'Unexpected printed links or annotations'
print('Verified four complete US Letter pages with source-matched lyrics.')
`, temp, output, path.resolve('songs/evidence/source-transcriptions.json')], { stdio: 'inherit' });
    assert.equal(merged.status, 0, 'PDF merge/verification failed; provide Python with pypdf installed.');
  } finally {
    await browser.close();
    fs.rmSync(temp, { recursive: true, force: true });
  }
})().catch(error => { console.error(error); process.exit(1); });
