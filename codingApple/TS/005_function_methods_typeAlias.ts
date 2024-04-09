// 함수와 methods에 type alias 지정하는 법 ==========
// 함수 type
type 함수타입 = (a: string) => number;

function 함수() {}

type NumOut = (x: number, y: number) => number;
let ABC: NumOut = function (x, y) {
  return x + y;
};

// methods 안에 타입지정하기
let 회원정보 = {
  name: "kim",
  age: 30,
  plusOne(x) {
    return x + 1;
  },
  changeName: () => {
    console.log("안녕");
  },
};

회원정보.plusOne(1);
회원정보.changeName();
