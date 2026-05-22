# Repo Goal

- Build portable scouting resources that other packs can reuse with minimal editing.

# Current Lessons

- Prefer self-contained single-file pages unless a resource truly needs separate assets such as images.
- Keep generic guidance in the main body and move local or pack-specific details into clearly labeled example sections.
- Favor purpose-based organization over one-off dumping grounds.
- Treat `references/pack-operations/` as the current model section for new reusable SOP-style pages.

# Content Rules

- Do not add private operational artifacts by default, including email threads, calendar reminders, passwords, or broad personal notes.
- Keep `ceremonies/crossover/` intact as a ceremony asset set; treat the SOP-style crossover page as its logistics companion, not a replacement.
- When adding new reusable references, optimize for portability and clarity before visual complexity.

# Verification

- Run `npm test` after editing `references/pack-operations/` pages.
- Keep pack-specific wording such as `Pack 285` or `St. Mark` out of the main guidance unless it is explicitly part of an example section.
