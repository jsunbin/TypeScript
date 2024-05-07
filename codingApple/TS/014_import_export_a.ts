// import, export: a ==========
export var 이름 = "kim";
export var 나이 = 30;

// 타입 =====
export type Name = string | boolean;
export type Age = (a: number) => number;
export {};

// namespace =====
namespace MyNamespace {
  export interface PersonInterface {
    age: number;
  }
  export type NameType = number | string;
}
// 숙제 =====
// 01. 아래 코드를 다른 파일에서 옮겨서 사용하고 싶음. 가져와서 다른 파일에서 변수 만들때 사용해보세요.
// type Car = {
//   wheel: number;
//   model: string;
// };
// interface Bike {
//   wheel: 2;
//   model: string;
// }

export type Car = {
  wheel: number;
  model: string;
};
export interface Bike {
  wheel: 2;
  model: string;
}

// 02. 자주 사용하는 함수가 있음.
/**
 * 이 함수는 파라미터로 object자료 하나를 선택적으로 집어넣을 수 있고
 * 아무것도 return 해주지 않아야합니다.
 * 함수 만들 때마다 여기에 타입 일일이 붙이기 귀찮아서 그런데
 * 이 타입을 다른 파일에 저장해두고 import 해와서 함수 만들 때마다 쓰려면 어떻게 코드를 짜야할까요
 */
export type ObjFunction = (a?: object) => void;

// 03. 타입 중복이 너무 많이 발생합니다.
// type Dog = string;
// interface Dog {
//   name: string;
// }

// let dog1: Dog = "bark";
// let dog2: Dog = { name: "paw" };
/**
 * 위 코드에서 에러를 없애야합니다. 어떻게 코드를 짜면 될까요?
 * (조건) type Dog, interface Dog의 타입이름 변경 금지, 파일 분할 금지
 */

namespace GoodDog {
  export type Dog = string;
}
namespace BadDog {
  export interface Dog {
    name: string;
  }
}

let dog1: GoodDog.Dog = "bark";
let dog2: BadDog.Dog = { name: "paw" };
