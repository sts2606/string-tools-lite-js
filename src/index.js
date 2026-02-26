export function capitalize(str = '') {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function slugify(str = '') {
  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '');
}

export function truncate(str = '', length = 50) {
  if (str.length <= length) return str;
  return str.slice(0, length) + '…';
}
