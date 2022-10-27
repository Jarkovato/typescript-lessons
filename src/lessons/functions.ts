function add(a: number, b: number): number {
  return a + b;
}

function toUppercase(str: string): string {
  return str.toUpperCase();
}

//overloading functions
interface MyPosition {
  x: number | undefined;
  y: number | undefined;
}

interface MyPositionWithDefault extends MyPosition {
  default: string;
}

// function position(): MyPosition;
// function position(a: number): MyPositionWithDefault;
function position(a: number, b: number): MyPosition;

function position(a?: number, b?: number) {
  if (!a && !b) return { x: undefined, y: undefined };
  if (a && !b) return { x: a, y: undefined, default: a.toString() };
  return { x: a, y: b };
}

// void
function logId(id: string): void {
  console.log(id);
}

type voidFunc = () => void;
const f1: voidFunc = () => true;
//it works! but it always return void

