const a = 1; // type is 1
let b = 1; // type is number, because it's not constant
const str: string = "Hello";
const isFetchinf: boolean = true;
const int: number = 42;
const num: number = 3e10;
const float: number = 4.2;

//array
const array: number[] = [1, 1, 2, 3, 5, 8, 13];
const array2: Array<number> = [1, 1, 2, 3, 5, 8, 13]; //generic
const array3: string[] = ["hi", "man"];

//tuple
const array4: [string, number] = ["2", 1];
const array5: [string, number, ...boolean[]] = ["2", 1]; // spread types in tuples

//readonly 
const array6: readonly [string, number] = ["2", 1];

//any
let variable: any = 42;
variable = "new String";

//functions
//void - function not return result
function sayMyName(name: string): void {
  // console.log(name);
}

//union
let union: string | number | boolean = 0;

//Never
// A function never returns 
function throwError(message: string): never {
  throw new Error(message);
}

function dumpError(): never {
  while (true) { }
}

function rec(): never {
  return rec();
}

//example
//switch - case - default : never (if code never gone to default)


// Type
//Alias, named type
type Login = string;
const login: Login = 'admin';
const login2: Login = 'user';

type ID = string | number;
const id1: ID = 'STRING';
const id2: ID = 1;

// intersection

type UserType = {
  name: string;
}
type Role = {
  id: number
}
type UserWithRole = UserType & Role;
let userWithRole: UserWithRole = {
  name: 'admin',
  id: 1
}

//Literal types
let method: 'post' | 'get';
let statusCode: 200 | 500;

//Cast method (Warning)
// method as 'post'

//Unknown
//like any
let input: unknown;
input = 3;
input = 'input'
// we cant make type to res. only unknown or any
let res = input;
// we must check type of unknown arguments
function run(i: unknown): number | undefined {
  if (typeof i === 'number') {
    return i++;
  }
}
// union
type U1 = unknown | number; // unknown
// intesection
type I1 = unknown & string; // string

// Null
const n: null = null;
// StrictNullChecks - false / true - 

// Type guidance

//this syntax not used in JSX
const user = <User>{
  name: 'User'
}
