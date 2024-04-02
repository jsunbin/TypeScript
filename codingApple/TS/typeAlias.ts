// 타입도 변수에 담아쓰세요 type 키워드 써서 & readonly Type Alias ==========
type Animal = string | number | undefined;
let animal: Animal = "panda";

type Animal2 = { name: string; age: number };
let animal2: Animal2 = { name: "fu", age: 4 };

// const: 절대 바꿀 수 없는 변수를 만들 때 =====
const city = "seoul";
// const 변수는 등호로 재할당만 막는 역할
// const로 담은 object 수정은 자유롭게 가능
const city2 = { region: "seoul" };
city2.region = "busan";

// readonly =====
// object 자료 수정도 막을 수 있음
// 속성안에서 ? 사용 가능
type Bao = {
  readonly name: string;
  age?: number;
};

const bao: Bao = {
  name: "fubao",
};
// bao.name = "aibao"; // Error!

// type 변수: union Type으로 합치기 =====
type Name = string;
type Age = number;
type Person = Name | Age;

// & 연산자로 object 타입 extend 하기(=합치기) =====
type PositionX = { x: number };
type PositionY = { y: number };

// { x: number, y: number } <- 이`렇게 만들고 싶음
type NewType = PositionX & PositionY;

let position: NewType = { x: 10, y: 20 };

// 숙제 =====
// 01. object 타입을 정의한 type alians 두 개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?
type Parents = {
  name: "aibao";
  age: 10;
};

type Siblings = {
  name: "ruibao";
  age: 1;
  country: "korea";
};

type Family = Parents & Siblings;

let family = { name: "lebao", age: 1, country: "china" };

// 02. 다음 조건을 만족하는 타입을 만들어봅시다.
/**
 * 1. 이 타입은 object 자료형이어야 합니다.
 * 이 타입은 color라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다.
 * 이 타입은 size라는 속성이 있어야하며 항상 숫자가 들어와야 합니다.
 * 이 타입은 position이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.
 */
type NewType2 = {
  color?: string;
  size: number;
  readonly position: number[];
};

// 03. 다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오.
/**
 * 1. { name: 'kim', phone: 123, email: 'abc@naver.com' }
 * 2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.
 * 3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오.
 */
type PersonalInfo = {
  name: string;
  phone: number;
  email: string;
};

// 04. 다음을 만족하는 type alias를 만들어보세요.
/**
 * 1. 숙제2와 같은데 이번엔 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어보세요.
 * 2. 미성년자 여부 속성은 true/false만
 * 3. 숙제3에서 만들어둔 type alias를 재활용합시다.
 */
type Adult = {
  adult: boolean;
};
type NewUser = PersonalInfo & Adult;

let user: NewUser = { name: "fubao", phone: 010, email: "fubao@everland.com", adult: false };
