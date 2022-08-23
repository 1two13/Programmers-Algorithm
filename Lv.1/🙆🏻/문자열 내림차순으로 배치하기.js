//!나의 코드
function solution(s) {
  // 문자열 s를 큰거부터 작은 순으로 정렬
  // 소문자가 대문자보다 더 크다.
  return s
    .split("")
    .sort((a, b) => {
      if (a > b) return -1;
      else if (b > a) return 1;
      else return 0;
    })
    .join("");
}

//!다른 분 코드

function solution(s) {
  return s.split("").sort().reverse().join("");
}
