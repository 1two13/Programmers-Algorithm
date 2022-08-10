//!나의 코드
function solution(n) {
  let answer = [];
  let strN = String(n);

  for (let i = 0; i < strN.length; i++) {
    answer.unshift(Number(strN[i]));
  }

  return answer;
}

//!다른 분 코드
function solution(n) {
  return n
    .toString()
    .split("")
    .reverse()
    .map((v) => parseInt(v));
}
