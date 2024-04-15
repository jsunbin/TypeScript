// class 만들 때 타입지정 가능 ==========
class Person {
  data: number = 0;

  name: string;
  constructor(a: string) {
    this.name = a;
  }

  함수(a: string): void {
    console.log("안녕" + a);
  }
}

let 사람1 = new Person("rui");
let 사람2 = new Person("hui");

console.log(사람1.data);

console.log(사람1.name);

사람1.함수("fu");

// 숙제 =====
// 01. Car 클래스를 만들고 싶습니다.
/**
 * 1. 대충 { model : '소나타', price : 3000 } 이렇게 생긴 object를 복사해주는 class를 만들어보십시오.
 * 2. 그리고 복사된 object 자료들은 .tax() 라는 함수를 사용가능한데 현재 object에 저장된 price의 10분의1을 출력해주어야합니다.
 * 3. model과 price 속성의 타입지정도 알아서 잘 해보십시오. tax() 함수의 return 타입도요.
 * (동작 예시)
    let car1 = new Car('소나타', 3000)
    console.log(car1) //콘솔창 출력결과는 { model : '소나타', price : 3000 }
    console.log(car1.tax()) //콘솔창 출력결과는 300
 */
class Car {
  model: string;
  price: number;
  constructor(model: string, price: number) {
    this.model = model;
    this.price = price;
  }

  tax(): number {
    return this.price / 10;
  }
}
let car1 = new Car("소나타", 3000);
console.log(car1);
console.log(car1.tax());

// 02. class인데 파라미터가 잔뜩 들어가는 class Word를 만들어봅시다.
/**
 * 1. object 만들 때 new Word() 소괄호 안에 숫자 혹은 문자를 입력하면
 * 2. 숫자는 전부 object 안의  num 속성 안에 array 형태로 저장되고
 * 3. 문자는 전부 object 안의 str 속성 안에 array 형태로 저장되는 class를 만들어봅시다.
 * 4. class 만들 때 넣을 수 있는 숫자와 문자 갯수는 일단 제한은 없습니다. 그리고 타입 빼먹지 마셈
 * (동작 예시)
    let obj = new Word('kim', 3, 5, 'park');
    console.log(obj.num) //[3,5]
    console.log(obj.str) //['kim', 'park']
 */
class Word {
  num;
  str;
  constructor(...params: (number | string)[]) {
    let numbers: number[] = [];
    let strings: string[] = [];
    params.forEach((e) => {
      if (typeof e === "string") {
        strings.push(e);
      } else {
        numbers.push(e);
      }
    });

    this.num = numbers;
    this.str = strings;
  }
}
let obj = new Word("kim", 3, 5, "park");
console.log(obj);
console.log(obj.num);
console.log(obj.str);

export {};
