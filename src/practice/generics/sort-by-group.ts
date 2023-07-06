interface IData {
  group: number;
  name: string;
}

const data: IData[] = [
  { group: 1, name: 'Вася' },
  { group: 1, name: 'Петя' },
  { group: 2, name: 'Ваня' },
];

// export function sortByGroup(arr: IData[]) {
//   return arr.reduce((acc: any, next: IData) => {
//     if (!acc[next.group]) {
//       acc[next.group] = [next];
//     } else {
//       acc[next.group].push(next);
//     }
//     return acc;
//   }, {});
// }

interface IGroup<T> {
  [key: string]: T[];
}

type TKey = string | number | symbol;

export function group<T extends Record<TKey, any>>(
  array: T[],
  key: keyof T
): IGroup<T> {
  return array.reduce<IGroup<T>>((map: IGroup<T>, item) => {
    const itemKey = item[key];
    let currentEl = map[itemKey];
    if (Array.isArray(currentEl)) {
      currentEl.push(itemKey);
    } else {
      currentEl = [item];
    }

    map[itemKey] = currentEl;
    return map;
  }, {});
}
