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
//readonly 

//functions
//void - function not return result
function sayMyName(name: string): void {
  console.log(name);
}

//Never
function throwError(message: string): never {
  throw new Error(message);
}

// Type
//Alias, named type
type Login = string;
const login: Login = 'admin';
const login2: Login = 'user';

type ID = string | number;
const id1: ID = 'STRING';
const id2: ID = 1;

