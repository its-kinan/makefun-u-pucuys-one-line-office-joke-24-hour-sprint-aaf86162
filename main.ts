import { mkdirSync, writeFileSync } from "node:fs";

// One-Line Office Joke — revised again (145 chars, under the 200-char gate).
// "a firm belief" became "a signed statement": the printer doesn't just
// believe, it issues formal paperwork about you — HR register, more office,
// more visual, and the punchline stays on "buttons". Same joke, tighter —
// setup, payoff, stop. Deterministic: one fixed string, no network, no
// clock, no randomness. Writes it to /output/entry.txt.
const text =
  "I asked the printer for one page and it printed my search history, my calendar, and a signed statement that I should not be trusted with buttons.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
console.log(text);
