//!나의 코드
// n을 k진수로 변환한 값을 0을 기준으로 split하는 게 포인트!

// 소수 판별하기
function isPrime(num) {
  if (num === 1) return false;
  if (num === 2) return true;
  // 짝수는 소수가 아님
  if (num % 2 === 0) return false;
  // 제곱근으로 나누어 떨어지면 소수가 아님
  // 홀수만 체크
  for (let i = 3; i <= parseInt(Math.sqrt(num)); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(n, k) {
  // 조건에 맞는 소수 개수(중복되는 소수도 따로 세기)
  let answer = 0;

  // n을 k진수로 바꾸고, 0을 기준으로 split(각 자릿수에 0을 포함하지 않는 소수)
  n = n.toString(k).split(0);
  // 빈 문자열이 나오는 경우가 있기 때문에 n에서 빈 문자열 제거
  n = n.filter((el) => el !== '').map(Number);

  // 조건에 맞는 소수 찾기 (k진법이 아닌 10진법으로 보았을 때 소수여야 함)
  for (let i = 0; i < n.length; i++) {
    if (isPrime(n[i])) answer++;
  }

  return answer;
}

//!다른 분 코드
const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const solution = (n, k) => {
  return n
    .toString(k)
    .split('0')
    .map((m) => Number(m))
    .filter((f) => isPrime(f)).length;
};
