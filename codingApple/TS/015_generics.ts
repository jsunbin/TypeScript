// 타입을 파라미터로 입력하는 Generic ==========
function 함수(x: unknown[]) {
  return x[0];
}

let a = 함수([4, 2]); // x가 unknown이기 때문에 a도 unknown이 됨
console.log(a);
console.log(a + 1); // a가 unknown이라 바로 +1이 안됨
// => 해결책1. Narrowing 또는 as 해주기
// => 해결책2. Generic 함수 만들기: 파라미터로 타입을 입력하는 함수 =====
function 함수제네릭<MyType>(x: MyType[]): MyType {
  return x[0];
}
let a제네릭 = 함수제네릭<number>([4, 2]);
let b제네릭 = 함수제네릭<string>(["4", "2"]);

console.log(a제네릭);

// 타입 파라미터 제한두기 =====
interface LengthCheck {
  length: number;
}

function 함수제네릭2<MyType extends LengthCheck>(x: MyType) {
  // return x - 1;
  return x.length;
}

let a제네릭2 = 함수제네릭2<string[]>(["100"]);
