const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5, 8];
const arrayOfStrings: ReadonlyArray<string> = ["one", "two", "three"];

function reverse<T>(array: T[]): T[] {
  return array.reverse();
}

reverse(arrayOfNumbers);

const str = new Promise<string>((res, rej) => res("test"));

const check: Record<string, boolean> = {
  drive: true,
  kpp: false,
};
