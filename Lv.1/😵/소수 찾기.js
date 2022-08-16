// 1부터 자기 자신까지 반복문을 활용하여 나눴을 때 나누어 떨어지면 소수가 아님
// 1은 소수 아님

//!나의 코드 (정확도 테스트 10, 11, 12 미통과 / 효율성 0 => 56.3점)
function solution(n) {
  let answer = 0;
  let cnt = 0;

  // 1 ~ n 까지 모든 수를 확인해보기 위한 반복문
  // n은 2이상의 자연수
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i % j !== 0) cnt += 0;
      else cnt += 1;
    }
    // cnt가 1이면 소수
    if (cnt === 2) answer++;
    cnt = 0;
  }

  return answer;
}

//!다른 분 코드
// 소수인지 판별하는 함수
function isPrime(num) {
  // 1은 소수가 아니니깐 2부터 시작
  // 제곱근보다 작은 수로 나누어 떨어지지 않으면 num은 소수다.
  for (let i = 2; i <= Math.sqrt(num); i++) {
    // 나누어 떨어지면 num은 소수가 아니다.
    if (num % i === 0) return false;
  }
  return true;
}

function solution(n) {
  let answer = 0;

  for (let i = 2; i <= n; i++) {
    // 제곱근보다 작은 소수들로 나누어 떨어지지 않으면 소수이므로 answer++
    if (isPrime(i)) answer++;
  }

  return answer;
}

//!다른 분 코드
function solution(n) {
  let answer = 0;

  for (let i = 2; i <= n; i++) {
    let isPrime = true;

    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    // true는 1
    answer += isPrime;
  }

  return answer;
}

//!다른 분 코드
function solution(n) {
  let notPrimeCnt = 0;
  let answer = 0;

  for (let i = 2; i <= n; i++) {
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        notPrimeCnt += 1;
        break;
      }
    }
    answer++;
  }

  return answer - notPrimeCnt;
}
