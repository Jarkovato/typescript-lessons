interface IUser {
  name: string;
  age: number;
}

type KeysOfUser = keyof IUser;

// only IUser key
const key: KeysOfUser = 'age';

//example
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}