# GapToGrowth: Start Here

The GapToGrowth skill created this folder as your personal workspace.

GapToGrowth learns your career history and writing style from your past resumes. Then, for every job description you give it, it:

- shows which keywords you can honestly claim, with a confidence score for each, and asks before claiming anything it can't verify
- writes a tailored one-page resume in your own voice as a Word document, and creates the PDF only after you approve it
- turns every skill gap into a lesson in your **Learning Hub**, a personal website where you can practice with flashcards, quizzes, labs, and mock interviews

It never invents experience.

---

## What you need

- A **Claude Pro plan or higher** (Pro, Max, Team, or Enterprise). GapToGrowth runs in **Claude Cowork**, which is included on paid plans.
- The **Claude Desktop app** for macOS or Windows, so Claude can work with files in this folder.
- **Recommended model: Sonnet 5.** It's the default on Pro, so most people don't need to change anything.

---

## Setup (about 10 minutes)

1. **Keep this folder somewhere permanent**, such as Documents or a drive you back up.
2. **Add your resumes** to `Sample Resume/My Resumes`. Add the word `Current` to your latest resume's file name (for example `Resume_Current.pdf`). If you don't, GapToGrowth will ask.
3. *(Optional)* `Sample Resume/Reference Resumes` holds layout examples. GapToGrowth includes two fictional one-page samples. You can add resumes from friends or colleagues whose layout you like (ask them first). They're used for layout ideas only, never as facts about you.
4. **Open Claude Desktop and start a Cowork task.** If your message box shows "Chat" and "Cowork" options, select "Cowork." If it doesn't, you have the newer Claude experience where Cowork is built in, so just describe your task. Give Claude access to **this folder** only.
5. If your Cowork project has a place for standing instructions, paste this there:
   > Use the GapToGrowth skill for every task in this project.
6. **Send the kickoff prompt** below.

---

## Prompts to copy

**1. Kickoff (first time only)**
```
Use the GapToGrowth skill. Set up my resume agent in this folder and run Phase 0 (Onboarding).
```

**2. Learn my resumes**
```
Start Phase 1. Do not create any resume.
```
It reads every resume and sends ONE list of questions. Answer honestly; your answers become the facts it relies on.

**3. Finalize**
```
All initial sample resumes have been provided. Treat the Resume Master and Writing Style DNA as finalized.
```

**4. For every job**
```
New JD: [Role] at [Company]

[paste the full job description here]
```

| Category | Meaning |
|---|---|
| **Auto-added** | You clearly have it, so it's added without asking |
| **A. Add to resume + Learning Hub** | Recommended; needs your OK |
| **B. Learning Hub only** | Not claimable yet, but worth learning |
| **C. Verify with me** | It asks you a question, then moves the skill to A or B |

**5. Approve the Word version**
```
Looks good, generate the PDF.
```

Whenever GapToGrowth asks you to choose, it ends with **"Reply with one of:"** and the exact words to send.

---

## Your Learning Hub

After your first job, open `Learning Hub/Career_Learning_Hub.html` in your browser (Chrome or Edge work best).

- **What to learn first:** your top skill gaps across all your jobs, ranked by how often employers ask for them.
- **Lessons:** flashcards, a hands-on lab checklist, a quick quiz, story rehearsal, and a 2-minute mock interview.
- **Your status:** move each skill from Not started to Learning, Practiced, and Ready to claim. When a skill is Ready to claim, GapToGrowth offers to add it to your resume evidence as lab experience, with your OK.
- **Saving:** progress saves automatically in your browser. Click **Save your progress** in the hub to keep it in this folder so it shows up in any browser. The hub shows step-by-step instructions.

| Say this to Claude | What happens |
|---|---|
| `Coach me on [skill]` | A step-by-step tutoring session |
| `Expand the [skill] lesson in my Learning Hub.` | Turns a short skill card into a full lesson (shows the size first) |
| `Upgrade my Learning Hub` | Installs the newest Learning Hub design |
| `I added a new resume.` | Updates what GapToGrowth knows about you |

---

## Folder guide

| Folder | What's in it |
|---|---|
| `Instructions` | Your knowledge files (GapToGrowth's rules live in the skill). Don't delete these. |
| `Sample Resume/My Resumes` | Your resumes |
| `Sample Resume/Reference Resumes` | Layout references |
| `Job Descriptions` | Each job description and its keyword decisions |
| `Finished Resume Docs` / `Finished Resume PDFs` | Your tailored resumes |
| `Learning Hub` | Your learning website and saved progress |

---

## Tips

- **One JD per message.**
- **Back up this folder** now and then. It holds everything GapToGrowth has learned about you.
- **Privacy:** this folder contains your career history. To share GapToGrowth with a friend, send them the GapToGrowth link, not your folder.
