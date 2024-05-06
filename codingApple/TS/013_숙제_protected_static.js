// 숙제: protected, static 키워드 ==========
// Q2. x속성에 숫자를 더해주는 함수가 필요함. =====
// class User {
//   private static x = 10;
//   public static y = 20;
// }
// User.addOne(3); //이렇게 하면 x가 3 더해져야함
// User.addOne(4); //이렇게 하면 x가 4 더해져야함
var User = /** @class */ (function () {
    function User() {
    }
    User.addOne = function (파라미터) {
        User.x += 파라미터;
    };
    User.printX = function () {
        console.log(User.x);
    };
    User.x = 10;
    User.y = 20;
    return User;
}());
User.addOne(3);
User.addOne(10);
User.printX();
// Q3. 네모 만들기
/**
 * 이렇게 네모.draw()를 할 때마다
 * index.html에 가로 30px, 세로 30px, 배경색이 'red' 의 <div> 박스가 무작위로 배치되어야 함.
 */
var Square = /** @class */ (function () {
    function Square(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    Square.prototype.draw = function () {
        var a = Math.random();
        var square = "<div style=\"position:relative; \n      top:".concat(a * 400, "px; \n      left:").concat(a * 400, "px; \n      width:").concat(this.width, "px; \n      height : ").concat(this.height, "px; \n      background:").concat(this.color, "\"></div>");
        document.body.insertAdjacentHTML("beforeend", square);
    };
    return Square;
}());
var 네모 = new Square(30, 30, "red");
네모.draw();
네모.draw();
네모.draw();
네모.draw();
export {};
