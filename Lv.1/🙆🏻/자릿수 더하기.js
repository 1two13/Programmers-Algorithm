//!나의 코드
function solution(n) {
  // 자연수 n의 각 자릿수의 합
  let answer = 0;
  let strN = String(n);

  for (let i = 0; i < strN.length; i++) {
    answer += Number(strN[i]);
  }

  return answer;
}

//!다른 분 코드
function solution(n) {
  // 문자열로 만든 후 split
  // 0을 넣어 acc 초기값을 정수화시킴
  return (n + "").split("").reduce((acc, cur) => acc + parseInt(cur), 0);
}
