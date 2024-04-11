// prototype 문법 짚어보기 ==========
class Hero {
  constructor(skillQ, skillW) {
    this.q = skillQ;
    this.w = skillW;
  }
}

// 상속 기능: prototype에 뭔가를 추가하면 자식들도 사용 가능 =====
Hero.prototype.name = 'fu' // ezreal에 직접 추가하지 않아도 ezreal.name으로 확인할 수 있다.

const ezreal = new Hero('Rising Spell Force', 'Mystic Shot')

ezreal.name;
// object에서 자료 뽑을 때 일어나는 일
// 1. 직접 자료를 가지고 있으면 그거 출력
// 2. 없으면 부모 유전자에서 찾음
// 3. 부모에도 없으면 부모의 부모 유전자까지 찾음
// ===== 계속 위로 올라감: prototype chain =====


var 어레이 = [1, 3, 5];
var 어레이 = new Array(1, 4, 5);
어레이.sort()

// 모든 Array에서 사용할 수 있는 함수를 추가해보자 =====
Array.prototype.함수 = function () {};
var 어레이 = [4, 2, 1];