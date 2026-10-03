# GapToGrowth: Maintainer Notes

## Single source of truth
Edit only `plugins/gaptogrowth/skills/gaptogrowth/`. `dist/` and the demo are built from it.

```
skills/gaptogrowth/
├── SKILL.md                         header + workflow Sections 1 to 10
└── references/
    ├── START_HERE.md                skill-version user guide
    ├── lesson-format.md             content file format (schema 1)
    ├── learning-hub/Career_Learning_Hub.html   the hub app (G2G_SHELL_VERSION inside)
    ├── templates/                   00 to 05 + decisions_template.md
    └── reference-resumes/           two fictional sample PDFs
```

## Folder template mapping
- `Instructions/FINAL_PROJECT_INSTRUCTIONS.md` = template header + the same Sections 1 to 10 as SKILL.md.
- `Instructions/system/` = hub app, lesson-format.md, decisions_template.md.
- `Instructions/00` to `05` = templates.
- `START_HERE.md` = template variant (different kickoff prompt, standing instruction, and Instructions row).

## Rules
- Keep the SKILL.md `description` free of colon-space, under 1,024 characters, and ending with "Use this skill whenever...".
- `name` stays `gaptogrowth` everywhere (plugin.json, marketplace.json, SKILL.md). Treat it as permanent once listed.
- Hub app: plain, commented, unminified JavaScript; no eval, no network calls, no external assets. Bump `G2G_SHELL_VERSION` on every hub change. Raise `G2G_SCHEMA_SUPPORTED` only together with a lesson-format change, and keep older schemas readable.
- No em dashes in any public file.

## Release checklist
1. Bump `version` in plugin.json and README; add a CHANGELOG entry.
2. Rebuild `dist/gaptogrowth.skill` (zip of the `gaptogrowth` skill folder, renamed) and `dist/GapToGrowth_Folder_Template.zip`.
3. Copy the hub app into `examples/learning-hub-demo/` and open it from the folder in Chrome, Edge, and Firefox: no console errors, no network requests, dashboard, quiz, mock interview, and saving all work.
4. Run `claude plugin validate ./plugins/gaptogrowth` and `claude plugin validate .`
5. Privacy search: no personal names outside LICENSE and author fields, no local paths.
6. Tag, push, and create a GitHub Release with the two `dist/` files. Once listed in the Claude directory, the tracked branch publishes new versions after review.
