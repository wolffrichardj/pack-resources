# Classic campfire songs

Four familiar songs, each preserving one identified version of public-domain lyrics. Each HTML sheet is self-contained and prints on one US Letter page. Historical songbooks establish Row and Mountain; the contemporary publishers linked in the evidence identify B-I-N-G-O and John Jacob as public-domain songs.

| PDF page | Song sheet | Performance |
| --- | --- | --- |
| 1 | [Row, Row, Row Your Boat](row-row-row-your-boat_one-pager.html) | Sing together or as a two-part round; one short entry cue |
| 2 | [She'll Be Comin' Round the Mountain](shell-be-comin-round-the-mountain_one-pager.html) | Sandburg's three-verse version; no separate chorus |
| 3 | [B-I-N-G-O](bingo_one-pager.html) | Full sung pass and full one-clap pass; patterns for passes 3-6 |
| 4 | [John Jacob Jingleheimer Schmidt](john-jacob-jingleheimer-schmidt_one-pager.html) | Full normal and quieter passes; bold Fa-la ending stays loud |

[Download the four-page packet](../output/pdf/classic-campfire-songs.pdf). Print at actual size on Letter paper.

The 1927 mountain song combines meeting her, the red rooster, and chicken and dumplin' in its third verse. It preserves that source version. **My Bonnie** and **Scotland's Burning** were removed at Richard's request; their research evidence remains separate from the active sheets.

John Jacob preserves the identified source's **They say** and **Fa-la-la-la-la-la-la!** wording. Other familiar versions use **There goes** or **Da**; these sheets do not blend variants. B-I-N-G-O selects the source's optional **who** and corrects its one printed zero to the letter **O**. Both repeating songs show two complete passes so the change is visible. Short continuation cues cover later passes without printing the same verse six times.

Sources, reproduction basis, candidate decisions, and page-image evidence are in [evidence/sources-and-versions.md](evidence/sources-and-versions.md). The [two internal review rounds](evidence/quality-review.md) are editorial checks, not reviews by actual Scout leaders or children.

## Rebuild and verify

From the repository root, with the existing Playwright dependency and Chromium installed:

```sh
node scripts/build-classic-songs.js /path/to/python-with-pypdf
npm test
```

Omit the Python argument if `python3` already has `pypdf`. The builder checks the HTML lyrics against the manually verified source transcriptions, including full example passes, their performance headings, and B-I-N-G-O's numbered continuation patterns and directions, checks narrow-screen layout, exports each retained song, verifies its PDF text and one-page Letter dimensions, then combines the pages. It removes its temporary component PDFs automatically. Visual inspection of a fresh render is still required after layout changes.

The sheets use the retained three skits' type family, 32px titles, 0.5in top/bottom and 0.55in side margins, muted metadata, and rounded boxes. Lyrics are larger than skit dialogue: 18px (13.5pt). Source links, review notes, and reproduction evidence stay off the sheets.
