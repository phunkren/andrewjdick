export function formatId(id) {
  return id
    .replace(/\s+/g, '-')
    .replace(/[^a-zA-Z-]+/g, '')
    .toLowerCase();
}
