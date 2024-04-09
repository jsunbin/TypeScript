function 함수() { }
var ABC = function (x, y) {
    return x + y;
};
// methods 안에 타입지정하기
var 회원정보 = {
    name: "kim",
    age: 30,
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () {
        console.log("안녕");
    },
};
회원정보.plusOne(1);
회원정보.changeName();
