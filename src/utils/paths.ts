// Include the configured GitHub Pages base for every local URL.
export const base = `${import.meta.env.BASE_URL.replace(/\/+$/, '')}/`;

export function withBase(path: string) {
  return `${base}${path.replace(/^\/+/, '')}`;
}
