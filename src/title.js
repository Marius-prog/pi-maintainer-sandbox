// title.js: the window title for a model reply, shortened to fit a tmux window name.
const MAX = 40;

export function windowTitle(reply) {
  const lines = reply.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  const line = lines.length ? lines[lines.length - 1] : "";
  return line.length > MAX ? `${line.slice(0, MAX - 1)}…` : line;
}
