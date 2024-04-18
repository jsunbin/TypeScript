"use strict";
// rest parameter & destructuring ==========
// rest 파라미터 타입 정하기 =====
function 전부더하기() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    console.log(a);
}
전부더하기(1, 2, 3, 4, 5);
// destructuring?
var 사람 = { student: true, age: 20 };
// let student = 사람.student;
// let age = 사람.age;
var _a = { student: true, age: 20 }, student = _a.student, age = _a.age;
var _b = ["안녕", 100], a = _b[0], b = _b[1];
// 함수 파라미터에  Destructuring 문법 사용 =====
var person = { student: true, age: 20 };
function 함수(_a) {
    var student = _a.student, age = _a.age;
    console.log(student, age);
}
함수({ student: true, age: 20 });
