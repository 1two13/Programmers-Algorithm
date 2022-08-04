//!나의 코드
function solution(num) {
  // 1이 될때까지의 반복 횟수
  let answer = 0;

  // 결과로 나온 수에 같은 작업을 1이 될 때까지 반복하기
  while (num > 1) {
    // num이 짝수면
    if (num % 2 === 0) {
      // 2로 나누기
      num = num / 2;
      answer++;
    }
    // num이 홀수면
    else if (num % 2 === 1) {
      // 3을 곱하고 1을 더하기
      num = num * 3 + 1;
      answer++;
    }
    // 500번 반복할 때까지 1이 되지 않는다면 -1 반환
    if (answer >= 500) return -1;
  }

  return answer;
}

//!다른 분 코드
function solution(num) {
  let count = 0;

  while (count < 500) {
    if (num === 1) {
      return count;
    }
    count++;
    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
  }

  return -1;
}
