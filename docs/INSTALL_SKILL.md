# Install GapToGrowth as a Claude Skill

## What you need
- A **Claude Pro plan or higher** (Cowork is included on paid plans).
- The **Claude Desktop app** for macOS or Windows.
- **Recommended model: Sonnet 5**, the default on Pro.

## Install (one time)
1. In Claude, open **Settings > Capabilities** and turn on **Code execution and file creation**.
2. Go to **Customize > Skills**, upload `dist/gaptogrowth.skill`, and turn it on.

Menu names are current as of October 2026.

## Start
1. Create an empty folder, for example `Documents/GapToGrowth`.
2. Start a Cowork task in Claude Desktop (select "Cowork" if you see it; otherwise just describe your task) and give Claude access to that folder only.
3. Send:
   ```
   Use the GapToGrowth skill. Set up my resume agent in this folder and run Phase 0 (Onboarding).
   ```
4. Follow the `START_HERE.md` guide it creates in your folder.

## Updating
Upload the new `.skill` file the same way. Your folder, lessons, and progress stay untouched. The newest Learning Hub design installs at your next job, or say `Upgrade my Learning Hub`.
