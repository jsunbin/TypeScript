// public, private ==========
// public =====
// public 키워드가 붙으면 모든 자식들이 사용 가능. 사실 있으나 없으나 별로 의미가 없음
class User {
  public name = "bao";
  constructor(a) {
    this.name = a;
  }

  public 함수() {}
}

let 유저1 = new User("le");
유저1.name = "푸바오"; // 자식이 수정 가능

// private =====
// private 키워드가 붙으면 class 안에서만 수정, 사용 가능
class User2 {
  name: string;
  private familyName: string = "bao"; // -> 실수로 변경되면 큰일남!
  constructor(a) {
    this.name = a + this.familyName;
  }

  이름변경함수() {
    this.familyName = "park";
  }
}

let 유저2 = new User2("ai");
console.log(유저2.name);
// 유저2.name = "rui"; // 자식이 수정 불가능

// 긴급상황..!class 밖에서 수정하려면?
/**
 * 1. class안에 이름 변경 함수 제작
 * 2. 자식들이 사용
 */
유저2.이름변경함수();

// private, public 키워드 사용하면 이것도 가능 =====
class Person {
  constructor(public name: string) {
    // 파라미터에 public 키워드를 사용하면, "이 자리에 들어온 파라미터는 자식의 name 속성에 기입해라" 라는 뜻
  }
}

let 자식 = new Person("hui");
console.log(자식);
export {};
