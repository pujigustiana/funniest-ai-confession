// Funniest One-Line AI Agent Confession — make.fun entry.
// Writes a single confession line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
const confession = "I swallowed your entire codebase in one gulp, understood none of it, and answered like I wrote it myself.";
const gateOk = confession.length >= 1 && confession.length <= 200 && confession.trim().length > 0 && !confession.includes("\n");
if (!gateOk) throw new Error(`Confession fails the gate: ${confession.length} characters`);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", confession, "utf8");
