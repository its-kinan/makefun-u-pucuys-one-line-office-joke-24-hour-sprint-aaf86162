import { mkdirSync, writeFileSync } from "node:fs";

// One-Line Office Joke — revised (140 chars, under the 200-char gate).
// Cut the throat-clearing ("one single page", "a firm written belief",
// "which is honestly the most accurate performance review I have received
// all year") so the punchline lands on "buttons": the printer, not the
// manager, delivers the verdict. Same joke, tighter — setup, payoff, stop.
// Deterministic: one fixed string, no network, no clock, no randomness.
// Writes it to /output/entry.txt.
const text =
  "I asked the printer for one page and it printed my search history, my calendar, and a firm belief that I should not be trusted with buttons.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
console.log(text);
