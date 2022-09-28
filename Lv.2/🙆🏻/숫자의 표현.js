//!나의 코드
function solution(n) {
  // 연속된 자연수들로 n을 표현하는 방법의 수
  let answer = 0;

  // 약수를 구하는 식
  let idx = 1;
  while (idx <= n) {
    // 나머지값이 0인 경우 약수
    if (n % idx === 0) {
      // 주어진 수의 홀수의 약수의 개수
      if (idx % 2 === 1) answer++;
    }

    idx += 1;
  }

  return answer;
}
