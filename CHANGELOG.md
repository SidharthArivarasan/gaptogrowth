# Changelog

## 1.1.3
- Added a privacy policy (PRIVACY.md) and privacyPolicyUrl.

## 1.1.2
- ATS formatting standards for every resume: honest exact job title, 25 to 35 truthful JD keywords, single column, standard headings, contact details in the body, consistent dates, and a keyword report after each draft.
- Plugin display name "GapToGrowth" and search keywords.

## 1.1.1
- Reference resumes inside the plugin are now Markdown with a Layout specs block, so the Claude directory can inspect every file. Polished PDF and Word versions remain in `examples/reference-resumes/`.
- Added the plugin icon.

## 1.1.0 (first public release)

**Interactive Learning Hub**
- New ready-made hub app: a gap dashboard ranking skills by demand, flashcards, lab checklists with copy buttons, quizzes, story rehearsal, and a 2-minute mock interview.
- Skill status ladder (Not started, Learning, Practiced, Ready to claim) and a growth loop that offers, with your OK, to add practiced skills to your evidence as lab experience.
- Progress auto-saves in the browser and can be saved to your folder (Save to folder, Copy my progress, or Download) so it works across browsers. Step-by-step instructions are built in.

**Lower token usage**
- Sessions read only small index files instead of your full history.
- The hub app is copied, not generated; each job adds one small content file.
- Tiered lessons: full lessons for required skills, short expandable cards for nice-to-haves.
- Token estimates and clear reply options before any optional large task.

**Other**
- Phase 0 invites friends' resumes as layout references, with a consent reminder.
- Keyword reviews record whether each skill is required or preferred.
- Decisions are saved per job next to the job description.
- MIT license and a plugin README for the Claude directory.

## 1.0.0 (local baseline, not published)
- Initial workflow: onboarding, consolidation, honest keyword review, Word then PDF, static Learning Hub.
