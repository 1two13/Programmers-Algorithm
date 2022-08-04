//!나의 코드
function solution(n, m) {
  // 최대공약수 (1은 무조건 공통 최대 공약수이기 때문에)
  let max = 1;
  // 최소공배수
  let min = 1;

  // 2부터 n과 m의 최솟값까지 모든 정수로 나누어보기
  for (let i = 2; i <= Math.min(n, m); i++) {
    if (n % i === 0 && m % i === 0) max = i;
  }

  // 두 수를 나누었을 때 나머지가 0이 되는 첫 번째 경우의 수
  while (true) {
    if (min % n === 0 && min % m === 0) break;
    min++;
  }

  return [max, min];
}
