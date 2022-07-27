//!나의 코드
function solution(x, n) {
  // 정수, 자연수
  let answer = []; // x부터 시작해 x씩 증가하는 숫자를 n개 지나는 리스트
  let num = x;

  // n번 반복
  for (let i = 0; i < n; i++) {
    answer.push(num);
    num += x;
  }

  return answer;
}

//!다른 분 코드
function solution(x, n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  return answer;
}
