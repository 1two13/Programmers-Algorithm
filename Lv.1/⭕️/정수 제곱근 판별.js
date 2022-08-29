//!나의 코드
function solution(n) {
  let answer = 0;
  let sqrt = Math.sqrt(n);

  // n이 어떤 수의 제곱이 되는 수인지 판별하기
  // n이 양의 정수 x의 제곱이라면 x+1의 제곱 리턴
  if (Number.isInteger(sqrt)) {
    return (sqrt + 1) * (sqrt + 1);
    // 아니라면 -1 리턴
  } else return -1;
}
