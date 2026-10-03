// GapToGrowth demo content (fictional). Job 1.
window.G2G = window.G2G || { jds: [], lessons: {}, addenda: [] };
G2G.jds.push({
  id: "2026-09-12_DataAnalyst_LakeviewRetail",
  role: "Data Analyst", company: "Lakeview Retail Group", date: "2026-09-12",
  keywords: [
    { skill: "dbt", category: "B", need: "required", score: 30 },
    { skill: "Tableau", category: "B", need: "preferred", score: 55 }
  ]
});
G2G.lessons["dbt"] = {
  schema: 1, skill: "dbt", tier: "full", origin: "2026-09-12_DataAnalyst_LakeviewRetail",
  what: "dbt (data build tool) lets analysts transform raw data inside a data warehouse using plain SQL SELECT statements. You write models, dbt runs them in the right order, tests the results, and documents everything.",
  why: "Teams use dbt so every report is built from the same tested, version-controlled logic instead of one-off queries. It makes analysts more reliable and lets engineers review their work like code.",
  transfer: "You already write production SQL and automate reports in Python. dbt is mostly SQL plus a few conventions, so your strongest skill carries straight over.",
  knowVsNot: "You know: SQL joins, aggregations, and window functions. To learn: dbt project structure, the ref() function, tests, and running dbt from the command line.",
  concepts: [
    { term: "Model", definition: "A single SQL SELECT statement saved as a .sql file. dbt turns it into a table or view." },
    { term: "ref()", definition: "How one model points to another, for example {{ ref('stg_orders') }}. dbt uses it to work out the build order." },
    { term: "Test", definition: "A rule dbt checks after building, such as unique or not_null on a column." },
    { term: "Materialization", definition: "How a model is stored: view, table, incremental, or ephemeral." }
  ],
  resources: [
    { title: "dbt Fundamentals course (free)", url: "https://learn.getdbt.com/" },
    { title: "dbt documentation", url: "https://docs.getdbt.com/" }
  ],
  lab: [
    "Install dbt for DuckDB with `pip install dbt-duckdb`",
    "Create a project with `dbt init demo_shop`",
    "Write a staging model that cleans a sample orders CSV",
    "Add unique and not_null tests, then run `dbt build`",
    "Generate docs with `dbt docs generate`"
  ],
  outcome: "You can explain what a dbt model is, build two models that reference each other, and show tests passing.",
  story: { situation: "", task: "", action: "", result: "" },
  talk: "Be honest: \"I haven't used dbt at work yet. I built a practice project with staging models and tests, and since dbt is SQL-first, I'm confident my production SQL experience transfers quickly.\"",
  questions: [
    { q: "What problem does dbt solve for an analytics team?", a: "It turns scattered SQL into a tested, documented, version-controlled pipeline, so every dashboard uses the same trusted logic.", checklist: ["Consistency of metrics", "Testing", "Version control"] },
    { q: "How does dbt know which order to build models in?", a: "Each model uses ref() to point to the models it depends on. dbt builds a dependency graph from those references and runs models in order.", checklist: ["Mentions ref()", "Mentions the dependency graph"] },
    { q: "When would you choose an incremental model?", a: "When a table is large and only new rows arrive, so rebuilding everything each run would be slow and expensive.", checklist: ["Large tables", "Only new data processed"] },
    { q: "How would you test that an order ID is never duplicated?", a: "Add a unique test, and usually a not_null test, on the order_id column in the model's YAML file, then run dbt test or dbt build.", checklist: ["unique test", "not_null test", "Where tests are defined"] }
  ],
  quiz: [
    { q: "What is a dbt model?", options: ["A Python class", "A SQL SELECT statement saved as a file", "A dashboard", "A database user"], answer: 1, explain: "A model is a .sql file containing one SELECT statement." },
    { q: "Which function links one model to another?", options: ["link()", "join()", "ref()", "source_of()"], answer: 2, explain: "ref() records the dependency so dbt can build in the right order." },
    { q: "Which test checks that a column has no empty values?", options: ["unique", "not_null", "accepted_values", "relationships"], answer: 1, explain: "not_null fails if any row has a missing value in that column." }
  ],
  canClaim: ["Built a practice dbt project with tested staging models"],
  mustNotClaim: ["Professional or production dbt experience"]
};
G2G.lessons["tableau"] = {
  schema: 1, skill: "Tableau", tier: "card", origin: "2026-09-12_DataAnalyst_LakeviewRetail",
  what: "A visual analytics tool for building interactive dashboards from your data.",
  why: "Many teams share results through Tableau dashboards, so analysts who can build one deliver insights faster.",
  talk: "\"I've built dashboards in a course lab and I'm practicing with Tableau Public.\"",
  concepts: [
    { term: "Dimension", definition: "A category you group by, such as region or month." },
    { term: "Measure", definition: "A number you aggregate, such as total sales." }
  ],
  canClaim: ["Course lab dashboard work"],
  mustNotClaim: ["Professional Tableau use"]
};
