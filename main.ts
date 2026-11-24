import { mkdirSync, writeFileSync } from 'node:fs';

// Candidates considered (3-4 drafted, strongest picked):
// 1. "The Parachute Toaster launches every slice under a tiny parachute, so your toast can never land butter-side down no matter how clumsy your morning is." (150 chars) — CHOSEN
// 2. "The Password-Shy Router hides behind the sofa whenever a guest asks for the Wi-Fi password, so you never have to spell it out again." (132 chars)
// 3. "The Gossip Toothbrush reports your midnight snacks to your dentist in real time, so your check-ups start with an apology instead of a lecture." (142 chars)
// 4. "The Hostage Negotiator is a washing machine that returns one sock at a time, slowly, until you agree to fold the laundry properly." (130 chars)
// Picked #1: the annoyance (toast landing butter-side down) is universal and tiny,
// the fix (a tiny parachute) is absurd yet follows warped logic — gravity can't win if the toast floats down.
const ENTRY =
  'The Parachute Toaster launches every slice under a tiny parachute, so your toast can never land butter-side down no matter how clumsy your morning is.';

if (ENTRY.length === 0 || ENTRY.length > 220) {
  console.error(`entry length ${ENTRY.length} is outside 1-220 characters`);
  process.exit(1);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, ENTRY, 'utf8');
console.log(`wrote ${ENTRY.length}-character entry to ${outputDir}/entry.txt`);
