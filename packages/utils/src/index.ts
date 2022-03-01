export function treat(text: string, config = { replace: "" }) {
  return text.split(" ").join(config.replace);
}
