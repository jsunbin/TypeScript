var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class에서 사용가능한 protected, static 키워드 ==========
// protected =====
// private, protected는 Class 안에서만 사용 가능
var User = /** @class */ (function () {
    function User() {
        this.x1 = 10;
        this.x2 = 20;
    }
    return User;
}());
var NewUser = /** @class */ (function (_super) {
    __extends(NewUser, _super);
    function NewUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // protected는 extends된 class 안에서 사용 가능, 당연히 자식들은 사용 불가능
    NewUser.prototype.doThis = function () {
        this.x2 = 30;
    };
    return NewUser;
}(User));
// static =====
// private, protected, public + static 가능
var User2 = /** @class */ (function () {
    function User2() {
        this.y = 20; // -> 자식만 사용 가능
    }
    // 자식은 사용 못하고, 부모에서만 사용가능 -> class의 주요 기능인 object 복사 기능은 막기위한 키워드
    User2.x = 10;
    return User2;
}());
var 자식 = new User2();
console.log(자식);
// console.log(자식.x);  // x가 없다고 나옴
console.log(User2.x); // -> 이렇게 사용하면 됨
// 활용 =====
var User = /** @class */ (function () {
    function User() {
        this.intro = User.skill + "전문가입니다";
    }
    User.skill = "js";
    return User;
}());
var 철수 = new User();
console.log(철수);
User.skill = "python";
var 민수 = new User();
console.log(민수);
export {};
