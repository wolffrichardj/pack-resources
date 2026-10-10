# Classic song sheets: two internal review loops

**Current revision:** two pages, Row and Mountain. The four-song review below documents the initial collection; the revision check at the end documents Richard's selection changes.

October 10, 2026. These are internal editorial reviews from three practical perspectives. No actual Scout leader, den leader, child, or singing audience reviewed or rehearsed the packet. No physical print job was submitted.

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

## Verification

- `node scripts/build-classic-songs.js <bundled Python>` passed: exact HTML lyric blocks versus the scan-checked JSON record; directions; no external assets or scripts; print bounds; 375px screen layout; no browser errors; complete PDF lyric blocks; one page per song; all four pages exactly **612 × 792pt**, US Letter portrait.
- Final print-layout heights: Row 522px, Bonnie 1022px, Scotland 522px, Mountain 822px, each within 1056px. All use 18px (13.5pt) lyrics, 32px titles, and the retained skits' margins/type/box vocabulary.
- `pdfinfo`: four unencrypted Letter pages, no forms or JavaScript. Full-page PNGs generated with Poppler and individually inspected; previews remain temporary, outside the repository.
- `npm test` passed all four pack-operations pages and six ceremony pages; `git diff --check` passed. SHA-256 comparisons confirmed all 11 protected files unchanged: root README, retained skit HTML/review/PDF, and unrelated regatta HTML/PDF files. Only the new songs, their evidence, the song PDF, and its builder are included in the feature commit.

## Selection revision

Richard requested removing My Bonnie and expressed that Scotland's Burning did not appeal; both sheets and PDF pages were removed. Mountain remains unchanged. Row keeps its exact lyrics, with one short direction covering unison or the optional two-group round entry. The longer leader-note box was removed. No additional performance explanation is needed for the familiar song.

Rebuilt the two-page packet, checked all retained lyrics, directions, print bounds, narrow-screen layout, page counts and Letter dimensions, then rendered and visually inspected both pages. The validation manifest now identifies this two-page PDF. The retained skits and unrelated local work remain unchanged.
