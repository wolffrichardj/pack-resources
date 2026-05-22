# Pack Resources

Portable scouting resources collected into a dedicated repository.

## Goal

Build reusable scouting materials that are easy to share, adapt, and maintain over time.

The strongest direction in this repo is:

- purpose-based organization
- portable single-file resources when practical
- generic main guidance with local specifics moved into labeled example sections
- lightweight verification for the more standardized page families

## Current Shape

This repo currently contains both older materials and newer standardized references.

- `references/pack-operations/` is the cleanest standardized section today
- `ceremonies/crossover/` is still a useful older ceremony asset set and remains more Pack 285-specific
- `activities/` and `skits/` are lighter standalone resources that may evolve more gradually

## Portability Status

### Portable Now

- `references/pack-operations/` pages are self-contained single HTML files
- `skits/` one-pagers are standalone single HTML files
- `ceremonies/crossover/{lion,tiger,wolf,bear,webelos,aol}.html` are now self-contained single HTML files with embedded styles and images

### Still Asset-Dependent

- `ceremonies/crossover/index.html` is still a hub page that points to sibling files
- `activities/stem/` pages still depend on CDN scripts and, in some cases, local supporting images

## Organized By Purpose

### `activities/stem/`

Hands-on STEM teaching pages and supporting images.

- `activities/stem/catapult/`
- `activities/stem/pulley/`
- `activities/stem/scotch-yoke/`

### `ceremonies/`

Ceremony materials and supporting assets.

- `ceremonies/crossover/`

### `skits/`

Standalone skit one-pagers for den or pack use.

- `skits/bright-idea-skit_one-pager.html`
- `skits/lost-quarter-skit_one-pager.html`

### `references/pack-operations/`

Reusable pack operations references adapted from prior SOP notes.

- `references/pack-operations/pinewood-derby/`
- `references/pack-operations/blue-gold/`
- `references/pack-operations/new-family-orientation/`
- `references/pack-operations/crossover/`

These pages are intentionally self-contained single HTML files so they can be downloaded or shared individually.

## Verification

For the pack operations reference pages, run:

```sh
npm test
```

This uses Playwright to confirm the expected titles, headings, and portability assumptions for the four SOP pages.

## Notes

These files were copied from the Cub Scouts section of a larger scratchpad so they can be managed independently and grow with clearer structure over time.
