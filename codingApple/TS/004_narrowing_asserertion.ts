// 타입 확정하기 Narrowing & Assertion ==========
// Narrowing
function 내함수(x: number | string) {
  if (typeof x === "string") {
    return x + "1";
  } else {
    return x + 1;
  }
}

내함수(123);

function 내함수2(x: number | string) {
  let array: number[] = [];
  if (typeof x === "number") array[0] = x;
}

// Assertion
// 타입을 잠깐 덮어쓰는 것 ->  얘를 쓰면 Narrowing 필요없음
// 무슨 타입이 들어올 때 100% 확실할 때 사용하기
function 내함수3(x: number | string) {
  let array: number[] = [];
  array[0] = x as number;
}
