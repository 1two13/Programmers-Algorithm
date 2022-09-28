//!나의 코드
function solution(n) {
  // n을 2진수로 변환했을 때 1의 개수
  let nCnt = n.toString(2).replaceAll("0", "").length;

  // 1. answer > n 조건 충족
  let answer = n + 1;
  // 2. answer.toString(2)의 1의 갯수와 n.toString(2)의 1의 갯수가 같을 때까지 반복
  while (answer.toString(2).replaceAll("0", "").length !== nCnt) {
    answer++;
  }

  // 1, 2 조건을 만족하는 수 중 가장 작은 수
  return answer;
}

//!다른 분 코드
function solution(n, a = n + 1) {
  return n.toString(2).match(/1/g).length == a.toString(2).match(/1/g).length
    ? a
    : solution(n, a + 1);
}
