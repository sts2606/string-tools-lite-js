export function capitalize(str = '') {
  if (!str) return '';

  const strArr = str.split(' ');

  console.log(strArr);

  return strArr
    .map(
      (word) =>
        word.charAt(0).toUpperCase() + word.slice(1).toLocaleLowerCase(),
    )
    .join(' ');
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
