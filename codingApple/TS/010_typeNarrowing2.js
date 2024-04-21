// Narrowing 할 수 있는 방법 더 알아보기 ==========
// null & undefined 체크하는 법 =====
if (변수 && typeof strs === "string") {
}
//
function printAll(strs) {
    if (strs && typeof strs === "string") {
        console.log(strs);
    }
}
function 함수(animal) {
    if ("swim" in animal) {
        return animal.swim;
    }
    return animal.fly;
}
// class로부터 생산된 object라면 instanceof로 narrowing
var 날짜 = new Date();
if (날짜 instanceof Date) {
    console.log("참이에요");
}
function 함수2(x) {
    if (x.wheel === "4개") {
        console.log("the car is " + x.color);
    }
    else {
        console.log("the bike is " + x.color);
    }
}
export {};
