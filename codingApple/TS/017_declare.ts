// 외부 파일 이용시 declare & 이상한 특징인 ambient module ==========
// declare: 변수 재정의가 가능 =====
import { a } from "./declare/data";
declare let a: number;

console.log(a + 1);
