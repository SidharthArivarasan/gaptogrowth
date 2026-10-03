# GapToGrowth Lesson Format Guide (schema 1)

Read this guide before writing or expanding any Learning Hub content. Write content as plain text inside JavaScript strings. No HTML, no em dashes. Put commands in `backticks` so the hub shows a Copy button.

## One content file per JD

File name: `Learning Hub/content/<YYYY-MM-DD>_<Role>_<Company>.js` (no spaces, for example `2026-09-26_SeniorDataAnalyst_HarborlineHealth.js`). After writing it, append the file name to `Learning Hub/content/index.js`:

```js
window.G2G_FILES = [
  "2026-09-12_DataAnalyst_LakeviewRetail.js",
  "2026-09-26_SeniorDataAnalyst_HarborlineHealth.js"
];
```

Files load in this order. A later file may replace an earlier lesson by setting the same key (used by Expand).

## File structure

```js
window.G2G = window.G2G || { jds: [], lessons: {}, addenda: [] };

// 1. The job. List ONLY Category A and B keywords (never AUTO-ADDED or C).
G2G.jds.push({
  id: "2026-09-26_SeniorDataAnalyst_HarborlineHealth",   // same as the file name without .js
  role: "Senior Data Analyst", company: "Harborline Health", date: "2026-09-26",
  keywords: [
    { skill: "dbt", category: "B", need: "required", score: 30 },     // need: required, preferred, or unknown
    { skill: "Tableau", category: "B", need: "preferred", score: 55 } // score: Claim Confidence at review time
  ]
});

// 2. New lessons. Key = skill name in lowercase. Only for skills with no lesson yet (check file 04).
G2G.lessons["dbt"] = { /* see Full lesson or Card below */ };

// 3. Addenda for skills that already have a lesson from an earlier JD.
G2G.addenda.push({ skill: "SQL", jd: "2026-09-26_SeniorDataAnalyst_HarborlineHealth",
  note: "This job emphasizes window functions for patient cohort analysis." });
```

## Full lesson

Use when the skill is used in a resume bullet, OR the JD lists it as required. Target 600 to 900 words across all text fields.

```js
G2G.lessons["dbt"] = {
  schema: 1,
  skill: "dbt",                 // display name
  tier: "full",
  origin: "2026-09-26_SeniorDataAnalyst_HarborlineHealth",
  what: "",        // what it is, from fundamentals (2 to 4 sentences)
  why: "",         // why employers need it (2 to 3 sentences)
  transfer: "",    // the user's verified, related experience only
  knowVsNot: "",   // what they know vs. what to learn, honestly
  concepts: [ { term: "", definition: "" } ],   // 3 to 6, become flashcards
  resources: [ { title: "", url: "https://..." } ],  // free, official sources where possible
  lab: [ "Step text with `command` in backticks" ],  // 3 to 6 steps, free tools only
  outcome: "",     // what they can explain or demonstrate after the lab
  story: { situation: "", task: "", action: "", result: "" },  // ONLY for resume-bullet skills, from verified facts; otherwise leave all four empty
  talk: "",        // how to talk about it honestly in an interview
  questions: [ { q: "", a: "", checklist: [ "" ] } ],   // 4 to 6
  quiz: [ { q: "", options: [ "", "", "", "" ], answer: 0, explain: "" } ],  // exactly 3; answer is the index of the correct option
  canClaim: [ "" ],      // must match file 03
  mustNotClaim: [ "" ]   // what would be dishonest to claim
};
```

## Card

Use for skills that are neither required nor in a resume bullet. Target 100 to 150 words. The hub shows an "Expand with Claude" button on cards.

```js
G2G.lessons["tableau"] = {
  schema: 1, skill: "Tableau", tier: "card",
  origin: "2026-09-26_SeniorDataAnalyst_HarborlineHealth",
  what: "", why: "", talk: "",
  concepts: [ { term: "", definition: "" } ],   // up to 3
  canClaim: [ "" ], mustNotClaim: [ "" ]
};
```

## Expanding a card

Write a NEW file `Learning Hub/content/<YYYY-MM-DD>_expand_<skill>.js` (no spaces in the skill part) that sets the same key with `tier: "full"` and every full-lesson field. Keep the original `origin`. Append it to `index.js`. Update file 04's Tier column.

## Rules

- Never edit or delete an existing content file. New information always goes in a new file.
- Keys are the skill name in lowercase (for example `"a/b testing"`). Use the same spelling as file 04.
- Escape double quotes inside strings as `\"`. Keep each file valid JavaScript.
- Only verified facts in `transfer`, `story`, and `canClaim`. Never invent experience.
- Optional field `extra: [ { heading: "", text: "" } ]` holds sections that do not fit other fields (used when converting older lessons).
