// title.js: the window title for a model reply, shortened to fit a tmux window name.
const MAX = 40;

export function windowTitle(reply) {
  const line = reply.split("\n")[0].trim();
  return line.length > MAX ? `${line.slice(0, MAX - 1)}…` : line;
}
