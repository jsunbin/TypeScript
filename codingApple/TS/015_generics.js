"use strict";
// 타입을 파라미터로 입력하는 Generic ==========
function 함수(x) {
    return x[0];
}
var a = 함수([4, 2]); // x가 unknown이기 때문에 a도 unknown이 됨
console.log(a);
console.log(a + 1); // a가 unknown이라 바로 +1이 안됨
// => 해결책1. Narrowing 또는 as 해주기
// => 해결책2. Generic 함수 만들기: 파라미터로 타입을 입력하는 함수 =====
function 함수제네릭(x) {
    return x[0];
}
var a제네릭 = 함수제네릭([4, 2]);
var b제네릭 = 함수제네릭(["4", "2"]);
console.log(a제네릭);
function 함수제네릭2(x) {
    // return x - 1;
    return x.length;
}
var a제네릭2 = 함수제네릭2(["100"]);
