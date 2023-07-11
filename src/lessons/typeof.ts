let strOrNum: string | number;
let strOrNum2: typeof strOrNum;

const user = {
  name: 'Anton',
  age: '31'
}

type keyOfUser = keyof typeof user;

enum Direction {
  Up,
  Down
}

type d = keyof typeof Direction;