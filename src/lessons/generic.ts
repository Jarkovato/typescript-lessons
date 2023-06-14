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


function logMiddleware<T>(data: T): T {
  console.log(data);
  return data;
}

const res = logMiddleware<string>('10');
// res: string
const res2 = logMiddleware<number>(10);
// res: number

function getSplittedArr<T>(arr: Array<T>): Array<T> {
  return arr.splice(0, arr.length / 2);
}

getSplittedArr([1,2,3]);
// number[]