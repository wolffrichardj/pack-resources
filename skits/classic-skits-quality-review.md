# Classic skits: internal quality review

Seven traditional skits adapted into portable, one-page den handouts. Two completed editorial loops use scoutmaster, audience-member, and teaching-den-leader perspectives. These are internal simulated reviews and spoken-line pacing assessments, not a live rehearsal or feedback from actual Scouts or leaders.

## Loop 1: content, delivery, and rehearsal

| Skit | Scoutmaster perspective | Audience perspective | Den leader perspective |
| --- | --- | --- | --- |
| Invisible Bench | Use shallow bends or upright mime; replace falling with a surprised reaction. | Repeated entrances lead directly to the moved-bench reveal. | Select final Scout in advance; teach the reaction first. |
| Ice Fishing | All tools and drilling are pretend; movements are small. | Three attempts establish the pattern; pause after the rink-manager reveal. | Explicitly assign Scout 4 as offstage voice; explain ice rink privately. |
| Is It Time Yet? | Loose ankles and arms-only option avoid awkward balancing. | Limit to three rounds and short waits. | Finding: final switch needed a shared cue. Added the first Scout's nod directly to the script. |
| Amazing Bruce | Bruce is imaginary; no actual person is tossed. | Coordinated gaze sells the invisible performer; later return supplies the payoff. | Finding: callback could be missed. Added the agreed program cue directly to the script. |
| Can't Work in the Dark | Friendly supervisor and pretend tools suit Cub Scouts. | Whole crew stopping together sets up the final line. | Explicit cue is the lightbulb lowering a hand and leaving. |
| Clean Socks | Clean props only; note distinguishes joke from good hygiene. | Stop the month list after March to preserve pace. | Five roles; tokens or mime eliminate twelve-pair prop preparation. |
| Viper Is Coming | Ordinary voice and playful suspense avoid nationality imitation or frightening staging. | Finding: final sentence diluted the pun. Shortened to "Hello! I'm Viper, your window wiper!" | VIPER sign and cloth establish the visitor; practice Viper/wiper clearly. |

Revisions above were applied before final rendering.

## Loop 2: revised performance and final page review

- **Scoutmaster:** Rechecked all seven revised scripts for suitable humor, practical staging, and safe pretend action. Cast ranges match specified lead/support roles. Socks retains a brief private hygiene teaching note. Bruce's callback is coordinated, not improvised.
- **Audience member:** Walked through each revised spoken exchange and action sequence in performance order. Every skit has a distinct payoff. Repetition is bounded, long pauses are avoided, and reaction beats follow the reveals. Viper uses a sign-supported name pun; its effectiveness depends on clear delivery. No live audience response is claimed.
- **Den leader:** Rechecked each handout independently for role allocation, props, starting position, repeated lines, final cue, and exit. The youngest-den choice has very little memorization. Non-speaking roles are deliberate. No separate manual is needed.
- **Visual review:** Inspected PNG renders of all seven final PDF pages individually. Titles, metadata, script columns, leader notes, and source footers fit without clipping, overlap, or overflow. All pages retain 32px titles, 18px section headings, and 14px dialogue/leader text, with the same compact spacing and margins.
- **Mechanical verification:** Exactly seven pages, each 612 x 792 points (US Letter portrait), one skit per page, with leader note and source footer present. Longest layouts use about 965 of 1056 CSS pixels. Repository `npm test` passes all ten existing page checks.

## Sources and build

- [Scouting America: Invisible Bench](https://www.scouting.org/cub-scout-presentations/invisible-bench/)
- [Scout Life: 10 Funny Campfire Skits](https://scoutlife.org/outdoors/182685/funny-campfire-skits/)

HTML handouts are the editable sources. `scripts/build-classic-skits.js` renders them with Playwright and merges them using Python/pypdf. The review is complete before submitting the finalized PDF to print.
