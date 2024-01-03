// 0-constants.js

export function taskFirst() {
  const option = 'I prefer const when I can.';
  return option;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combo = 'But sometimes let';
  combo += getLast();

  return combo;
}
