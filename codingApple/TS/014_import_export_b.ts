// import, export: b ==========
import { 이름, 나이 } from "./014_import_export_a";
// import * from './014_import_export_a;
console.log(이름);
console.log(나이);

// 타입 =====
import { Name, Age } from "./014_import_export_a";
let 이름2: Name = "kim";
let 함수: Age = (a) => {
  return a + 10;
};

// namespace =====
// <reference path="./a.ts" />;
// ts 파일은 이상한 <reference/> 라는 태그를 이용해서 다른 파일을 import해올 수 있는데

// let 이름: MyNamespace.NameType = "민수";
// let 나이: MyNamespace.PersonInterface = { age: 10 };

type NameType = boolean; //사용 가능
interface PersonInterface {} //사용 가능

// 숙제 =====
// 01. 아래 코드를 다른 파일에서 옮겨서 사용하고 싶음. 가져와서 다른 파일에서 변수 만들때 사용해보세요.
import { Car, Bike } from "./014_import_export_a";
let myCar: Car = { wheel: 4, model: "grandeur" };

// 02. 자주 사용하는 함수가 있음.
import { ObjFunction } from "./014_import_export_a";
let 함수2: ObjFunction = function (a) {
  console.log(a);
};

함수2({ abc: "안뇽" });
