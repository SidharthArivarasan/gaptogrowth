// GapToGrowth demo content (fictional). Job 2.
window.G2G = window.G2G || { jds: [], lessons: {}, addenda: [] };
G2G.jds.push({
  id: "2026-09-26_SeniorDataAnalyst_HarborlineHealth",
  role: "Senior Data Analyst", company: "Harborline Health", date: "2026-09-26",
  keywords: [
    { skill: "A/B testing", category: "A", need: "required", score: 80 },
    { skill: "dbt", category: "B", need: "required", score: 30 },
    { skill: "Tableau", category: "B", need: "preferred", score: 55 },
    { skill: "Snowflake", category: "B", need: "preferred", score: 0 }
  ]
});
G2G.lessons["a/b testing"] = {
  schema: 1, skill: "A/B testing", tier: "full", origin: "2026-09-26_SeniorDataAnalyst_HarborlineHealth",
  what: "A/B testing compares two versions of something, such as a checkout page, by randomly splitting users and measuring which version performs better on a chosen metric.",
  why: "It lets teams make product decisions from evidence instead of opinions, and it shows the size of an effect, not just its direction.",
  transfer: "You designed checkout-flow experiments at Lakeview using SQL and Python, which is exactly the core of this skill.",
  knowVsNot: "You know: experiment setup, conversion metrics, and reading results. To strengthen: sample size planning, statistical power, and avoiding peeking at results early.",
  concepts: [
    { term: "Control and variant", definition: "Control is the current version. The variant is the change you are testing." },
    { term: "Statistical significance", definition: "How unlikely the observed difference would be if there were truly no effect." },
    { term: "Statistical power", definition: "The chance a test detects a real effect of a given size. Low power means real wins get missed." },
    { term: "Peeking", definition: "Checking results repeatedly and stopping early, which inflates false positives." }
  ],
  resources: [ { title: "statsmodels documentation (z-tests and power)", url: "https://www.statsmodels.org/" } ],
  lab: [
    "Simulate two groups of 5,000 users in Python with conversion rates of 10% and 11%",
    "Run a two-proportion z-test with `statsmodels`",
    "Calculate the sample size needed to detect a 1-point lift with 80% power",
    "Write a one-paragraph result summary for a non-technical manager"
  ],
  outcome: "You can plan a test's sample size, run it, and explain the result in plain language.",
  story: {
    situation: "Lakeview's checkout conversion had stalled, and the team was debating redesigns based on opinions.",
    task: "I was asked to measure which checkout changes actually helped.",
    action: "I designed A/B tests for 4 checkout flows, wrote the SQL to assign and track users, and analyzed results in Python.",
    result: "The winning flow lifted conversion by 6%, and the team adopted testing before every checkout change."
  },
  talk: "Lead with the checkout story, then explain how you would plan sample size up front.",
  questions: [
    { q: "Walk me through an A/B test you ran.", a: "Use the Lakeview checkout story: the problem, how users were split, the metric, the analysis, and the 6% result.", checklist: ["Clear metric", "Random assignment", "Result with numbers"] },
    { q: "How do you decide how long to run a test?", a: "Calculate the sample size needed for the smallest effect worth detecting at a chosen power, then run until you reach it instead of stopping when results look good.", checklist: ["Sample size", "Power", "No peeking"] },
    { q: "A test shows a win, but only on mobile. What do you do?", a: "Treat it as a new hypothesis. Segment results can be noise, so confirm with a follow-up test targeted at mobile before acting.", checklist: ["Multiple comparisons risk", "Follow-up test"] },
    { q: "What would make you distrust an A/B test result?", a: "Unequal group sizes from a broken split, too small a sample, stopping early, or a metric that changed definition mid-test.", checklist: ["Sample ratio mismatch", "Early stopping"] }
  ],
  quiz: [
    { q: "Why is peeking at results risky?", options: ["It slows the website", "It inflates false positives", "It reduces sample size", "It breaks randomization"], answer: 1, explain: "Stopping when a result first looks significant makes chance wins look real." },
    { q: "What does statistical power describe?", options: ["Server capacity", "The chance of detecting a real effect", "The size of the variant", "The test duration"], answer: 1, explain: "Power is the probability of detecting a true effect of a given size." },
    { q: "Which group sees the current version?", options: ["Variant", "Holdout", "Control", "Segment"], answer: 2, explain: "The control group keeps the existing experience for comparison." }
  ],
  canClaim: ["Designed and analyzed A/B tests for checkout flows (professional)"],
  mustNotClaim: ["Building an experimentation platform"]
};
G2G.lessons["snowflake"] = {
  schema: 1, skill: "Snowflake", tier: "card", origin: "2026-09-26_SeniorDataAnalyst_HarborlineHealth",
  what: "A cloud data warehouse where teams store and query large datasets with SQL.",
  why: "It separates storage from compute, so analysts can run heavy queries without slowing others down.",
  talk: "\"I haven't used Snowflake yet, but it's SQL-based, and I'm comfortable with warehouse SQL.\"",
  concepts: [ { term: "Virtual warehouse", definition: "The compute cluster that runs your queries. It can be resized or paused." } ],
  canClaim: ["Strong SQL that transfers to Snowflake"],
  mustNotClaim: ["Any Snowflake experience"]
};
G2G.addenda.push({ skill: "dbt", jd: "2026-09-26_SeniorDataAnalyst_HarborlineHealth", note: "This job also asks for dbt tests on healthcare data quality, so practice `accepted_values` tests." });
