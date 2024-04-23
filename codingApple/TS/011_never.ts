// 함수에서 사용하는 never ==========
function 함수(): never {
  // 조건1. 리턴이 없어야함.
  // 조건2. endpoint가 없어야함. = 끝나지 않는 함수여야함.
  throw new Error("");

  while (true) {
    // 내부코드를 무한히 반복함
  }
}

// never 타입의 활용 =====
function 함수2(parameter: string) {
  if (typeof parameter === "string") {
    console.log(parameter);
  } else {
    console.log(parameter);
  }
}

let 함수3 = function () {
  throw new Error("");
};

export {};
