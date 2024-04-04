// 타입을 미리 정하기 애매할 때 (union type, any, unknown) ==========
// union type
let 회원: number | string = 123;
// let 회원: (number | string) = 123;

회원 = "kim";

let 회원들: (number | string)[] = [1, "2", 3];
let 오브젝트: { a: string | number } = { a: "123" };

// any
let name: any;
name: 123;
name = true;
name = [];

// unknown
let name2: unknown;
name2 = 123;
name2 = {};

// title - 1; // Error! unknown 타입은 수학연산 불가능

// Q. 변수 age에 문자 또는 숫자가 들어올 수 있다. 타입이 맞는 데 +1이 안되는 이유?
// A. 타입스크립트는 엄격함. string 타입 + 1 (허용), number + 1 (허용), string | number + 1 (불가능)
let age: string | number;
// age + 1; // Error! string | number라는 새로운 타입임. union 타입도 수학연산 불가능

// Q. 변수가 분명 1임에도 불구하고, -1이 안되는 이유?: 타입스크립트는 엄격함. 숫자 타입이어야 수학연산 가능!
let age3: unknown = 1;
// age3 - 1; // Error! 숫자가 들어있지만 unknown 타입임

// 숙제 =====
// 01. 다음 변수 4개에 타입을 지정해봅시다.
let user: string = "kim";
let age2: undefined | number = undefined;
let married: boolean = false;
let 철수: (string | number | undefined | boolean)[] = [user, age2, married];

// 02. 학교라는 변수에 타입을 지정해보세요.
// let 학교 = {
//   score: [100, 97, 84],
//   teacher: "Phil",
//   friend: "John",
// };
// 학교.score[4] = false;
// 학교.friend = ["Lee", 학교.teacher];

let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];

export {};
