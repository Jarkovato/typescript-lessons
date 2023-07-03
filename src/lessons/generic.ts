const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5, 8];
const arrayOfStrings: ReadonlyArray<string> = ['one', 'two', 'three'];

function reverse<T>(array: T[]): T[] {
  return array.reverse();
}

reverse(arrayOfNumbers);

const str = new Promise<string>((res, rej) => res('test'));

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

getSplittedArr([1, 2, 3]);
// number[]

const split: <T>(data: Array<T>) => Array<T> = getSplittedArr;

// generic Type and Interface
interface iLogLine<T> {
  timeStamp: Date;
  data: T;
}

type LogLineType<T> = {
  timeStamp: Date;
  data: T;
};

const logLineFromInterface: iLogLine<{ a: number }> = {
  timeStamp: new Date(),
  data: {
    a: 1,
  },
};

const logLineFromType: LogLineType<{ a: number }> = {
  timeStamp: new Date(),
  data: {
    a: 1,
  },
};

// Generics in classes

class Vehicle {
  run: number;
}
// extend
function kmToMiles<T extends Vehicle>(vehicle: T): T {
  vehicle.run = vehicle.run / 0.62;
  return vehicle;
}

class LCV extends Vehicle {
  capacity: number;
}

const vehicle = kmToMiles(new Vehicle());
const lcv = kmToMiles(new LCV());
kmToMiles({ run: 1 });
// interfaces work too

//extend union type
function logId<T extends string | number>(s: T): T {
  console.log(s);
  return s;
}
