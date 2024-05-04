// class에서 사용가능한 protected, static 키워드 ==========
// protected =====
// private, protected는 Class 안에서만 사용 가능
class User {
  private x1 = 10;
  protected x2 = 20;
}

class NewUser extends User {
  // protected는 extends된 class 안에서 사용 가능, 당연히 자식들은 사용 불가능
  doThis() {
    this.x2 = 30;
  }
}

// static =====
// private, protected, public + static 가능
class User2 {
  // 자식은 사용 못하고, 부모에서만 사용가능 -> class의 주요 기능인 object 복사 기능은 막기위한 키워드
  private static x = 10;
  y = 20; // -> 자식만 사용 가능
}

let 자식 = new User2();
console.log(자식);
// console.log(자식.x);  // x가 없다고 나옴
console.log(User2.x); // -> 이렇게 사용하면 됨

// 활용 =====
class User {
  static skill = "js";
  intro = User.skill + "전문가입니다";
}

var 철수 = new User();
console.log(철수);

User.skill = "python";
var 민수 = new User();
console.log(민수);

export {};
