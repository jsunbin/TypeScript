// Literal Types로 만드는 const 변수 유사품 ==========
let name: 123;
// name = 456; Error!

let itsMe: "대머리" | "솔로";
itsMe = "솔로";

function 함수(a: "hello"): 1 | 0 {
  return 1;
}
함수("hello");

// Q1. 이런 함수는 어떻게 만들까?
/**
 * 1. 가위, 바위, 보 중 1개 입력 가능
 * 2. 가위, 바위, 보만 들어올 수 있는 array를 return 해야함.
 */

function question1(a: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
  return ["가위"];
}
question1("가위");

// const 변수의 한계 =====
// -> Literal Type은 const 변수 업그레이드 버전이다~
const 변수 = "kim";

// Literal Type의 문제점 =====
var 자료 = {
  name: "kim",
} as const;
// as const == object value 값을 그대로 타입으로 지정해줌. object 속성들에 모두 readonly를 붙여줌
// => object 자료를 완전히 잠가놓고 싶으면 쓰시오.

function myFunction(a: "kim") {}

myFunction("kim");
myFunction(자료.name);

export {};
