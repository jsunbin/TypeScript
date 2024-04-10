let 제목 = document.querySelector("#title");
if (제목 != null) {
  제목.innerHTML = "반갑소";
}

// 더 좋음! instanceof 사용하는 narrowing 방법
let 제목2 = document.querySelector("#title");
if (제목2 instanceof HTMLElement) {
  제목2.innerHTML = "반갑소";
}

// assertion
let 제목3 = document.querySelector("#title") as HTMLElement;
제목3.innerHTML = "반갑소";

// optional chaining 연산자
let 제목4 = document.querySelector("#title");
if (제목4?.innerHTML != undefined) {
  제목4.innerHTML = "반갑소";
}

// a 태그의 href 속성을 바꾸기
let 링크 = document.querySelector("#link");
if (링크 instanceof HTMLAnchorElement) {
  링크.href = "https://kakao.com"; //잘됨
}

// 이벤트리스너
let 버튼 = document.getElementById("button");
버튼?.addEventListener("click", function () {
  console.log("안녕");
});
