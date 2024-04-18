// rest parameter & destructuring ==========
// rest 파라미터 타입 정하기 =====
function 전부더하기(...a: number[]) {
  console.log(a);
}

전부더하기(1, 2, 3, 4, 5);

// destructuring?
let 사람 = { student: true, age: 20 };
// let student = 사람.student;
// let age = 사람.age;

let { student, age } = { student: true, age: 20 };
let [a, b] = ["안녕", 100];

// 함수 파라미터에  Destructuring 문법 사용 =====
let person = { student: true, age: 20 };

function 함수({ student, age }: { student: boolean; age: number }) {
  console.log(student, age);
}
함수({ student: true, age: 20 });
