//!나의 코드
function solution(n) {
  // 피보나치 규칙
  let fibNum = [1, 2];

  for (let i = 2; i < n; i++) {
    // 1234567를 나눈 나머지를 리턴하기
    fibNum[i] = (fibNum[i - 1] + fibNum[i - 2]) % 1234567;
  }

  // 끝에 도달하는 총 방법 수
  return fibNum[n - 1];
}
