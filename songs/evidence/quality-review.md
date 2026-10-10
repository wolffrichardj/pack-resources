# Classic song sheets: quality review record

**Current revision:** four pages: Row, Mountain, B-I-N-G-O, and John Jacob. Earlier reviews below document prior layouts. The worked-repeat review and final pre-print round record the current packet, including two complete example passes on B-I-N-G-O and John Jacob.

October 10, 2026. These are internal editorial reviews from three practical perspectives. No actual Scout leader, den leader, child, or singing audience reviewed or rehearsed the packet. The initial creation reviews preceded physical printing.

## Loop 1: initial sheets and first PDF render

| Perspective | Findings | Changes |
| --- | --- | --- |
| Scout leader | Four source editions are identifiable and public domain in the United States. Lyrics preserve their originals, including Bonnie's dream verse and Sandburg's combined third verse. My Bonnie's draft placed the chorus before Verse 1, making the printed sequence less faithful than it could be. | Moved Verse 1 before the chorus, matching p. 43. Kept the remaining verses in order and the direction to sing the same chorus after every verse. |
| Singing audience | All four draft pages were rendered and visually inspected: readable 18px lyrics; complete song blocks; no clipped letters or overlapping boxes. The rounds have enough white space, and the mountain verses' numbered columns show their order. The mountain refrain could be mistaken for a separate chorus. | Made "there is no separate chorus" explicit. Kept every "When she comes" at its source position. |
| Den leader teaching | The draft round notes said to enter on the "next line," which could require interpretation during teaching. They also lacked a way to finish. The Bonnie B-word mechanism is established and the draft states it correctly. | Named each round entry against Group 1's specific phrase. Added a last-pass cue so each group finishes its own four lines. Kept Bonnie's slow-practice cue. |

Fidelity check: manually compared the retained original p. 69, p. 43, p. 55, and pp. 372-373 images with all printed lyric blocks. All words and internal repetitions match. The builder verified the first four-page Letter export. No lyric rewrite was needed for any correction.

## Loop 2: revised sheets and final PDF render

| Perspective | Final review | Result |
| --- | --- | --- |
| Scout leader | Rechecked every source verse and complete chorus against the final sheets. Version labels distinguish My Bonnie's "is" wording and Sandburg's historical three-verse text from other camp variants. Public-domain basis, excluded candidates, and period scans remain in evidence only. | Pass. All four versions complete. No newly invented verses, sanitized lines, or mixed editions. |
| Singing audience | Visually inspected **every final PDF page** at 130dpi after the edits. Titles, word spacing, apostrophes, stanza breaks, column order, margins, and boxes are legible. Bonnie fits without reducing its lyric size. No source links, footer rules, browser headers, or printable-handout statements appear. | Pass. Four pages, one song per page. No clipping, overlaps, accidental fifth page, or missing lines. |
| Den leader teaching | Walked through each song's directions: unison practice followed by staggered round entries; round ending; Bonnie's Verse 1/chorus/Verse 2/chorus/Verse 3/chorus/Verse 4/chorus; each B-word toggles position; mountain verses 1-3 with the complete last verse. | Pass. Clear chorus/repeat directions. No required novel actions or altered performance mechanism. |

The second loop found no further changes necessary. This is ready for Richard's printing or rehearsal; it is not evidence of a live group sing-through.

## Initial collection verification

- `node scripts/build-classic-songs.js <bundled Python>` passed: exact HTML lyric blocks versus the scan-checked JSON record; directions; no external assets or scripts; print bounds; 375px screen layout; no browser errors; complete PDF lyric blocks; one page per song; all four pages exactly **612 × 792pt**, US Letter portrait.
- Final print-layout heights: Row 522px, Bonnie 1022px, Scotland 522px, Mountain 822px, each within 1056px. All use 18px (13.5pt) lyrics, 32px titles, and the retained skits' margins/type/box vocabulary.
- `pdfinfo`: four unencrypted Letter pages, no forms or JavaScript. Full-page PNGs generated with Poppler and individually inspected; previews remain temporary, outside the repository.
- `npm test` passed all four pack-operations pages and six ceremony pages; `git diff --check` passed. SHA-256 comparisons confirmed all 11 protected files unchanged: root README, retained skit HTML/review/PDF, and unrelated regatta HTML/PDF files. Only the new songs, their evidence, the song PDF, and its builder are included in the feature commit.

## Selection revision

Richard requested removing My Bonnie and expressed that Scotland's Burning did not appeal; both sheets and PDF pages were removed. Mountain remains unchanged. Row keeps its exact lyrics, with one short direction covering unison or the optional two-group round entry. The longer leader-note box was removed. No additional performance explanation is needed for the familiar song.

Rebuilt the two-page packet, checked all retained lyrics, directions, print bounds, narrow-screen layout, page counts and Letter dimensions, then rendered and visually inspected both pages. The validation manifest identified that two-page PDF at this stage; it now identifies the final four-page selection below. The retained skits and unrelated local work remain unchanged.


## Selected additions: loop 1

Reviewed the new sheets, manually checked the original Stanford PDF and John Jacob score render, and inspected every page of the first four-page export.

| Perspective | Finding | Action |
| --- | --- | --- |
| Scout leader | Stanford explicitly identifies its printed B-I-N-G-O lyrics as public domain. The John Jacob publisher identifies its underlying freely arranged songs as public domain, with no exception for this traditional song. The modern arrangement has a separate license. These are different evidence bases from Row and Mountain's historical scans. | Documented those specific publisher statements without inventing an early publication date. Transcribed only traditional lyrics. Preserved John Jacob's They say and Fa-la variant. |
| Singing audience | The six-pass clap table is legible and complete. All four pages fit, and the final five-clap row stays on one line. The printed full B-I-N-G-O verse could be taken as an extra pass before starting the chart. | Changed its heading to **Verse · Pass 1**, making clear the chart's first row describes the already printed verse. Kept 18px lyrics and spelling patterns. |
| Den leader teaching | Each B-I-N-G-O pattern must be sung three times; the first two lines and final name-o line belong to every pass. John Jacob gets quieter on repeats but returns to loud singing for the ending. | Kept those exact mechanics explicit in brief directions. No fixed John Jacob pass count, extra action, or new verse was added. |

## Selected additions: loop 2

After the B-I-N-G-O heading change, rebuilt the PDF and independently rechecked the final directions and lyric blocks against the source publications. Rendered and visually inspected all four final pages at 120dpi.

| Perspective | Final check | Result |
| --- | --- | --- |
| Scout leader | Every lyric word and internal repetition matches the identified version, subject only to the recorded optional who selection, O typo correction, line breaks, and joined score syllables. No modern score arrangement or guide artwork was copied. Source/status evidence remains separate from the handouts. | Pass. Row and Mountain HTML are byte-for-byte unchanged from the previous commit. My Bonnie and Scotland remain excluded. |
| Singing audience | Inspected each final page for titles, margins, apostrophes, line spacing, boxes, full verse visibility, and chart order. B-I-N-G-O's Pass 1 label is clear. All six spelling rows fit without wrapping or clipping on Letter paper. John Jacob's title and long They say line fit. | Pass. Four pages, one song per page; no overlap, clipping, unwanted blank page, printed links, footer rule, or browser header/footer. |
| Den leader teaching | Walked through B-I-N-G-O's whole verse for passes 1-6: unchanged farmer opening, each row three times, closing name-o line; the last pass replaces all five letters with claps. Walked through John Jacob's quieter repetitions and always-loud Fa-la ending. Row retains its one short optional entry cue. | Pass. Complete performance flow with source-consistent repeat conventions. |

### Current packet validation

- Builder passed exact HTML lyric/direction checks, B-I-N-G-O chart contents and numbered order, 375px screen layout, print bounds, PDF lyrics and chart order, one page per song, and all four pages at **612 × 792pt**.
- Final print heights: Row 408px, Mountain 822px, B-I-N-G-O 810px, John Jacob 473px, within 1056px. Lyrics and printed chart patterns remain 18px (13.5pt).
- `pdfinfo` confirms four unencrypted Letter pages without forms or JavaScript. All final 120dpi page renders were individually inspected. `validation.json` records the final PDF digest, all four render digests, and source-evidence digests.
- `npm test` passed four pack-operations pages and six ceremony pages. `git diff --check` passed. SHA-256 comparison confirmed all 11 protected files unchanged, including root README, retained skit HTML/review/PDF, and unrelated regatta HTML/PDF files.
- Both review loops are internal editorial checks, not real leader reviews or a live rehearsal. No physical print job was sent.


## Worked repeats: teaching revision

The repeating songs now show two complete examples. B-I-N-G-O places the all-letter pass beside the one-clap pass, followed by a numbered chart for passes 3-6. John Jacob prints the same complete verse twice under Normal voice and Quieter voice, with both Fa-la endings bolded. The continuation cue makes clear that later repeats keep getting quieter. Row and Mountain are unchanged.

### Review loop 1: content and teaching

| Perspective | Check | Result |
| --- | --- | --- |
| Scout leader | The example passes follow the already sourced repeat mechanisms. B-I-N-G-O's second pass repeats its farmer opening and name-o ending and replaces B with a clap in all three spelling lines. John Jacob's two blocks are identical lyrics. | Pass. No new verse or changed source wording; performance labels are separate from lyrics. |
| Audience | Inspected the new pages in grayscale. B-I-N-G-O's two columns read in numbered order; each complete line fits. John Jacob's two blocks make the changed volume visible and the bold ending draws attention to the loud exception. | Pass. Retained 18px lyrics and the established title, margin, and box styles. |
| Den leader | Walked through first and second passes, then each continuation. B-I-N-G-O has six total passes, with three spelling patterns per pass; John Jacob has two examples and a clear instruction for further quieter repeats. | Pass. Examples demonstrate the change without requiring every repeat to be printed. |

### Review loop 2: final export

Rechecked every final page rendered in grayscale at 120dpi. The builder verified the full lyric blocks, performance headings, directions, remaining clap patterns and numbering, PDF text order, and one-page Letter dimensions. All four pages remain clear and complete with no clipping, overlap, broken table rows, printed links, or browser header/footer. Print heights: Row 408px, Mountain 822px, B-I-N-G-O 747px, John Jacob 765px, within 1056px. All PDF text stays inside 0.5-inch print margins.

Compared the expanded examples with the previous source record: B-I-N-G-O's new pass changes only the three B spelling positions to claps; John Jacob repeats the exact six source lines twice. Row and Mountain JSON records and HTML files are unchanged. SHA-256 checks confirmed all 11 protected files unchanged. `npm test` and `git diff --check` passed. The validation manifest now records the updated PDF and four final grayscale render digests.

Both loops are internal editorial checks, without a live group rehearsal. No physical print job was submitted.


## Final pre-print round

October 10, 2026. Reviewed the exact committed four-page PDF against its recorded SHA-256, then inspected every page in a fresh 150dpi grayscale render. No content or layout changes were needed.

| Perspective | Final finding | Result |
| --- | --- | --- |
| Scout leader | Retained source versions, complete lyrics, full first two repeat examples, and continuation mechanisms are consistent. Row's optional round entry follows the source's phrase interval. Mountain's three stanzas remain complete and in order. | Pass. No added verse, altered repeat rule, or remaining editorial correction. |
| Audience | All four grayscale pages are legible. Titles, verse blocks, chart rows, bold endings, and margins remain clear; no clipped lines, overlaps, unwanted page breaks, or missing glyphs. | Pass. One song per Letter page. |
| Den leader | B-I-N-G-O demonstrates all-letter then one-clap passes and specifies three spelling repetitions in each later pass. John Jacob demonstrates normal and quieter voices while keeping the ending loud. Row's brief cue is sufficient. | Pass. Examples and continuation cues are ready for teaching. |

Read-only PDF preflight verified the recorded artifact digest, four 612 × 792pt pages, complete ordered lyric blocks and section labels, all directions and remaining clap patterns, embedded fonts, no link annotations, and every printed character within 0.5-inch margins. `npm test` and the full branch whitespace check passed. This remains an internal document review; no live group rehearsal is claimed.
