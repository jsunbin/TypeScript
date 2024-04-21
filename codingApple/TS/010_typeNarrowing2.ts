// Narrowing 할 수 있는 방법 더 알아보기 ==========
// null & undefined 체크하는 법 =====
if (변수 && typeof strs === "string") {
}

//
function printAll(strs: string | undefined) {
  if (strs && typeof strs === "string") {
    console.log(strs);
  }
}

// 근데 한 눈에 안들어온다면 안쓰는게 좋습니다.
// 그냥 if (저 변수가 undefined일 경우) 어쩌구~ 이렇게 if문을 하나 더 쓰는게 어떨까요.
// if (변수 != null) 이렇게 조건식을 써도 null, undefined 이거 두 개를 동시에 거를 수 있습니다.

// in 연산자로 object 자료 narrowing =====
// 서로 배타적인 속성을 가져와야 narrowing이 가능
type Fish = { swim: string };
type Bird = { fly: string };
function 함수(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim;
  }
  return animal.fly;
}

// class로부터 생산된 object라면 instanceof로 narrowing
let 날짜 = new Date();
if (날짜 instanceof Date) {
  console.log("참이에요");
}

// literal type이 있으면 narrowing 쉬움 =====
type Car = {
  wheel: "4개";
  color: string;
};
type Bike = {
  wheel: "2개";
  color: string;
};

function 함수2(x: Car | Bike) {
  if (x.wheel === "4개") {
    console.log("the car is " + x.color);
  } else {
    console.log("the bike is " + x.color);
  }
}

export {};
