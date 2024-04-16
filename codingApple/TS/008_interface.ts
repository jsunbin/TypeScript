// Object에 타입지정하려면 interface ==========
interface Square {
  color: string;
  width: number;
}
let 네모: Square = { color: "red", width: 100 };

// extends =====
// interface Student {
//   name: string;
// }
// interface Teacher {
//   name: string;
//   age: number;
// }

interface Student {
  name: string;
}
interface Teacher extends Student {
  age: number;
}

// type 키워드와 차이점 =====
interface Animal {
  name: string;
}
interface Cat extends Animal {
  legs: number;
}

type Animal2 = {
  name: string;
};
type Cat2 = Animal2 & { legs: number };

// interface도 & 기호 사용 가능
interface Student {
  name: string;
}
interface Teacher {
  age: number;
}

let 변수: Student & Teacher = { name: "kim", age: 90 };

// 타입 이름 중복 선언 가능
interface Animal {
  name: string;
}
interface Animal {
  legs: number;
}
export {};
