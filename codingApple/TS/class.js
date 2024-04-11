// class 키워드 알아보기 ==========
// var nunu = {
//   q: 'consume',
//   w: 'snowball'

// }

// var garen = {
//   q: 'strike',
//   w: 'courage'
// }

// 비슷한 object를 많이 만들 일이 있으면 class 만들어 사용하세요
// 옛날 ===== 
function 기계 (skillQ, skillW) {
  this.q = skillQ;
  this.w = skillW;
}

var nunu = new 기계('consume', 'snowball');
var garen = new 기계('strike', 'courage');

// 최신 문법: ES6 ===== 
class Hero {
  constructor(skillQ, skillW) {
    this.q = skillQ;
    this.w = skillW;
  }
}

const ezreal = new Hero('Rising Spell Force', 'Mystic Shot')