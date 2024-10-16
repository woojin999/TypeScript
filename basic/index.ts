// number
// string
// boolean
// null
// nudefined
// any

// 변수
let a: number = 3;
let b: string = "type";

let c: any = "asd";

let d: number | string = "asdasd";
d = 3;

let e: string[] = ["apple", "mongo"];
e.push("string");

// 함수
function addNumber(a: number): number {
  return a;
}
addNumber(3);
