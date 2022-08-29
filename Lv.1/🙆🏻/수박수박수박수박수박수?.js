//!나의 코드
function solution(n) {
  // n 길이의 문자열
  let answer = "";

  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) answer += "수";
    else answer += "박";
  }

  return answer;
}
