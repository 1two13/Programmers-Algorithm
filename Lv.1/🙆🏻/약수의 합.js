//!나의 코드
function solution(n) {
  // n의 약수를 모두 더한 값
  let answer = 0;
  let i = 1;

  while (i <= n) {
    if (n % i === 0) answer += i;
    i += 1;
  }

  return answer;
}

//!다른 분 코드
function solution(num) {
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) sum += i;
  }

  return sum;
}
