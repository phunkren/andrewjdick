import { stripWhitespace } from './stripWhitespace';

export function formatId(id) {
  return stripWhitespace(id).toLowerCase();
}
