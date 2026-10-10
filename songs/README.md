# Classic campfire songs

Four familiar songs, each preserving one identified public-domain U.S. songbook version. Each HTML sheet is self-contained and prints on one US Letter page.

| PDF page | Song sheet | Performance |
| --- | --- | --- |
| 1 | [Row, Row, Row Your Boat](row-row-row-your-boat_one-pager.html) | Unison, then a two- to four-part round |
| 2 | [My Bonnie](my-bonnie_one-pager.html) | Four verses; chorus after every verse; optional B-word action |
| 3 | [Scotland's Burning](scotlands-burning_one-pager.html) | Unison, then a two- to four-part round |
| 4 | [She'll Be Comin' Round the Mountain](shell-be-comin-round-the-mountain_one-pager.html) | Sandburg's three-verse version; no separate chorus |

[Download the four-page packet](../output/pdf/classic-campfire-songs.pdf). Print at actual size on Letter paper. No physical print job is part of this collection's creation.

The printed version labels matter: the 1915 **My Bonnie** starts with "My Bonnie is over the ocean" and retains all four verses; the 1927 mountain song combines meeting her, the red rooster, and chicken and dumplin' in its third verse. These are source versions, not newly edited camp adaptations.

Sources, reproduction basis, candidate decisions, and page-image evidence are in [evidence/sources-and-versions.md](evidence/sources-and-versions.md). The [two internal review rounds](evidence/quality-review.md) are editorial checks, not reviews by actual Scout leaders or children.

## Rebuild and verify

From the repository root, with the existing Playwright dependency and Chromium installed:

```sh
node scripts/build-classic-songs.js /path/to/python-with-pypdf
npm test
```

Omit the Python argument if `python3` already has `pypdf`. The builder checks the HTML lyrics against the manually verified source transcriptions, checks narrow-screen layout, exports each song, verifies its PDF text and one-page Letter dimensions, then combines the four pages. It removes its temporary component PDFs automatically. Visual inspection of a fresh render is still required after layout changes.

The sheets use the retained three skits' type family, 32px titles, 0.5in top/bottom and 0.55in side margins, muted metadata, and rounded boxes. Lyrics are larger than skit dialogue: 18px (13.5pt). Source links, review notes, and reproduction evidence stay off the sheets.
