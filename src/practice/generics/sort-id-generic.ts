const data = [
  { id: 1, name: 'Вася' },
  { id: 2, name: 'Петя' },
  { id: 3, name: 'Боря' },
];

interface IWithId {
  id: number;
}

export function sortId<T extends IWithId>(arr: T[], reverse?: boolean): T[] {
  const result = arr.sort((a, b) => a.id - b.id);
  return reverse ? arr.reverse() : arr;
}

// console.log(sortId(data, true));
// console.log(sortId(data, false));