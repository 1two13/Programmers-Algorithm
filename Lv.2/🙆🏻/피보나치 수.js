//!나의 코드
// 자료형의 크기에 제한이 있는 언어를 쓸 경우, 매번 계산 결과에 1234567로 나눈 나머지를 넣어 int 범위 내에 항상 값이 존재하는 것을 보장할 수 있다.
function solution(n) {
  let fibNum = [0, 1];

  for (let i = 2; i <= n; i++) {
    // n번째 피보나치 수 % 1234567
    fibNum.push((fibNum[i - 2] + fibNum[i - 1]) % 1234567);
  }

  return fibNum[n];
}
