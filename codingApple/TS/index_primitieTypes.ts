// 타입 스크립트 기본 타입 정리 (primitive types) ==========
let name: string = "kim";
// 타입 지정은 자동으로 됨 -> 타입 지정 문법 생략 가능
let name2 = "jeong";

let age: number = 20;
let isChecked: boolean = false;

// array
let members: string[] = ["kim", "park"];
let members2 = [1, 2, 3];
// object
let info: { member: string; member2: string } = { member: "kim", member2: "park" };

// 예제 =====
// Q1. 여러분의 이름, 나이, 출생지역을 변수로 각각 저장해봅시다.
let myName = "sun";
let myAge = 25;
let myCountry = "Korea";

// Q2. 여러분이 가장 좋아하는 곡과 가수 이름을 변수에 object 자료형으로 담아보세요.
// object 안엔 노래 제목과 가수 이름이 들어가면 됩니다. 단, 제목과 가수는 문자만 들어올 수 있어야 함.
let myFavorite: { song: string; singer: string } = { song: "Square", singer: "Yerin Baek" };

// Q3. 다음 자료의 타입을 지정해보세요.
let project: {
  member: string[];
  days: number;
  started: boolean;
} = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};

export {};
