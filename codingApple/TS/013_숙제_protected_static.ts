// 숙제: protected, static 키워드 ==========
// Q2. x속성에 숫자를 더해주는 함수가 필요함. =====
// class User {
//   private static x = 10;
//   public static y = 20;
// }
// User.addOne(3); //이렇게 하면 x가 3 더해져야함
// User.addOne(4); //이렇게 하면 x가 4 더해져야함

class User {
  private static x = 10;
  public static y = 20;

  static addOne(파라미터: number) {
    User.x += 파라미터;
  }

  static printX() {
    console.log(User.x);
  }
}
User.addOne(3);
User.addOne(10);
User.printX();

// Q3. 네모 만들기
/**
 * 이렇게 네모.draw()를 할 때마다
 * index.html에 가로 30px, 세로 30px, 배경색이 'red' 의 <div> 박스가 무작위로 배치되어야 함.
 */
class Square {
  constructor(public width: number, public height: number, public color: string) {}
  draw() {
    let a = Math.random();
    let square = `<div style="position:relative; 
      top:${a * 400}px; 
      left:${a * 400}px; 
      width:${this.width}px; 
      height : ${this.height}px; 
      background:${this.color}"></div>`;
    document.body.insertAdjacentHTML("beforeend", square);
  }
}

let 네모 = new Square(30, 30, "red");
네모.draw();
네모.draw();
네모.draw();
네모.draw();
export {};
