# Classic skits: internal quality review

Current packet: Invisible Bench, Clean Socks, and The Viper Is Coming. The four other October 3 additions were retired after author feedback. The earlier review approved adaptations that weakened these jokes; this review supersedes it.

Two internal editorial loops were completed on October 10, 2026, using scoutmaster, audience-member, and teaching-den-leader perspectives. These are simulated editorial assessments, not a live rehearsal or actual stakeholder feedback.

## Loop 1: restore the joke and specify the staging

| Skit | Scoutmaster perspective | Audience perspective | Den leader perspective |
| --- | --- | --- | --- |
| Viper | Restore the cleaner's W-to-V pronunciation; no sign or named character called Viper. | Nervous warnings contrast with a cheerful ordinary cleaner. "Vipe your vindows" reveals the misunderstanding. | Four messengers enter in number order and stay in a huddle; the fifth Scout enters last with a cloth. Only the cleaner changes pronunciation. |
| Clean Socks | Restore the whole-week explanation for two pairs, with the helper's increasing approval of more frequent changes. | Seven pairs sets up a daily pattern; the helper assumes twelve is even cleaner. The month list reverses that expectation. | Explicit queue, step-forward, handoff, and step-aside instructions. Five roles; mime avoids needing twelve actual pairs. |
| Invisible Bench | Restore the apparent loss of support with a rehearsed controlled sit-down, rather than standing up. | The moved-bench line cues a downward reaction; that physical punchline completes the joke. | Scout 1 begins seated in mime; each sitter repeats the printed exchange. Reserve the mover until last; the mover never sits or falls. |

Revisions were applied to the HTML handouts. Clean Socks initially exceeded one page after restoring the teaching instructions; wording was tightened without shrinking type or removing the progression.

## Loop 2: revised script walkthrough and final rendered pages

- **Scoutmaster:** Rechecked suitable staging and tone. Bench retains the classic apparent fall as a controlled sit-down, with an alternative downward mime where ground seating is unsuitable. Viper's only pronunciation direction is W-to-V. Socks' monthly-change misunderstanding remains a joke, with a private hygiene reminder.
- **Audience:** Walked through each revised spoken exchange and action in order. Viper reveals the cleaner through pronunciation and wiping action, not a sign. Socks builds the helper's expectations before the months. Bench reacts downward at the final word of the reveal. Reaction pauses follow the punchlines; no explanatory spoken line is added afterward.
- **Den leader:** Checked minimum and maximum cast allocation. Viper has five assigned roles, and messengers remain visible for their final reaction. Socks has a shared movement pattern and explicit turn cues. Bench's 4-8 Scouts include one starter, 2-6 joining sitters, and one standing mover. Entrances, repeated dialogue, final cues, and exits are specified.
- **Visual review:** Inspected all three PDF page renders individually. Metadata, script columns, leader notes, and references remain readable and complete. Same typography as before: 32px titles, 18px section headings, 14px script and leader text. No clipping, overlap, or overflow.
- **Mechanical verification:** Three US Letter portrait pages (612 x 792 points), one skit each. Page layouts occupy approximately 1013, 1024, and 905 of 1056 CSS pixels. Builder verifies page counts and leader-note/reference presence. `npm test` passes all ten existing repository page checks.

## Sources and build

- [Scout Life: 10 Funny Campfire Skits](https://scoutlife.org/outdoors/182685/funny-campfire-skits/) - Viper pronunciation and Clean Socks progression.
- [BSA: Roundtable Planning Guide, 2015-2016](https://filestore.scouting.org/filestore/boyscouts/pdf/510-714_WEB.pdf) - Invisible Bench's moved-bench reveal and apparent fall. The handout uses a simplified cast and controlled movement.

HTML handouts remain the editable sources. `scripts/build-classic-skits.js` renders them with Playwright and merges with Python/pypdf. This revision was reviewed and rebuilt; no replacement print job was requested or submitted.
