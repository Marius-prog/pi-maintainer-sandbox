// title.js: the window title for a model reply, shortened to fit a tmux window name.
const MAX = 40;

// Mood rules, checked in order; the first match gives the emoji prefix.
// A reply that matches none gets no prefix.
const MOODS = [
  [/\b(error|errors|fail|fails|failed|failure|cannot|can't|broken)\b/i, "❌"],
  [/\b(done|fixed|success|successful|passed|complete|completed)\b/i, "✅"],
  [/\?$/, "❓"],
];

export function windowTitle(reply) {
  const lines = reply.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  const line = lines.length ? lines[lines.length - 1] : "";
  const mood = MOODS.find(([re]) => re.test(line));
  const prefix = mood ? `${mood[1]} ` : "";
  const room = MAX - prefix.length;
  const text = line.length > room ? `${line.slice(0, room - 1)}…` : line;
  return prefix + text;
}
