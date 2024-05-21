// array 자료에 붙일 수 있는 tuple type ===========
// tuple 타입 =====
let 멍멍: [string, boolean?] = ["dog", true];
// let 멍멍: [string, boolean?, number] = ["dog", true]; // Error! 옵션은 뒤에서부터 줄 수 있음.

// rest parameter에 활용 =====
function 함수(...x: number[]) {
  console.log(x);
}
함수(1, 2, 3, 6, 3, 4);

// tuple로 표현 가능
function 함수(...x: [number, string]) {
  console.log(x);
}
함수(111, "222");

// array 합칠 때 점 3개 =====
let arr = [1, 2, 3];
let arr2: [number, number, ...number[]] = [4, 5, ...arr]; // -> ...number[]: array 들어오는 데 몇 개인지 모를 때

// 숙제 ==========
// 01. 최근에 먹은 음식의 1.이름 2.가격 3.맛있는 지 여부를 array 자료에 담아보고 타입지정까지 하기
let food: [string, number, boolean] = ["croissant", 3800, true];

// 02. 이렇게 생긴 자료는 타입지정을 어떻게 해야할까?
/**
 *  let arr = ['동서녹차', 4000, true, false, true, true, false, true]
 *  몇 개인지는 모르겠지만 true와 false가 셋째 자료부터 잔뜩 들어올 수 있음.
 *  tuple 타입과 spread 연산자를 써보도록 하자.
 *  */
type Arr = [string, number, ...boolean[]];
let arrH: Arr = ["동서녹차", 4000, true, false, true, true, false, true];

// 03. 함수에 타입 지정 하기
/**
 * 1. 이 함수의 첮째 파라미터는 문자,
 * 2. 둘째 파라미터는 Boolean,
 * 3. 셋째 파라미터는 숫자 또는 문자가 들어와야 함.
 * 그럼 파라미터를 어떻게 만들고 타입지정은 어떻게 해야할 까?
 * tuple 타입과 rest parameter를 사용해보자
 */
function 함수(...params: [string, boolean, ...(number | string)[]]) {}
함수("a", true, 6, 3, "1", 4);

// 04. 다음과 같은 문자/숫자 분류기 함수를 만들어보십시오.
/**
 * 파라미터 중 문자만 모아서 [] 에 담아주고, 숫자만 모아서 [] 에 담아주는 함수가 필요합니다.
 * 문자 숫자 외의 자료는 입력불가능하고 파라미터 갯수 제한은 일단 없습니다.
 * 함수 만들어보시고 함수의 파라미터/return 타입지정도 확실하게 해봅시다.
 * (동작예시)
 * 함수('b', 5, 6, 8, 'a') 이렇게 사용할 경우 이 자리에 [ ['b', 'a'], [5, 6, 8] ] 이 return 되어야합니다.
 */

function 함수(...rest: (string | number)[]) {
  let result: [string[], number[]] = [[], []];

  rest.forEach((a) => {
    if (typeof a === "string") {
      result[0].push(a);
    } else {
      result[1].push(a);
    }
  });

  return result;
}
