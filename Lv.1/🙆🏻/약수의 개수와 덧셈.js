//!나의 코드
function solution(left, right) {
  let result = 0;
  let count = 0; // 약수의 개수

  for (let i = left; i <= right; i++) {
    // 약수의 개수를 구하는 코드
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) count++;
    }
    // 약수의 개수가 짝수인 경우 해당 수 +
    if (count % 2 === 0) result = result + i;
    // 약수의 개수가 홀수인 경우 해당 수 -
    else result = result - i;
    // 카운트가 이전 값에서부터 이어서 증가되기 때문에 처음부터 다시 세기 위해 0으로 초기화 시켜주는 작업이 필요하다.
    count = 0;
  }
  return result;
}

//!다른 분 코드
function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    // Math.sqrt(i) 값이 정수(나누어 떨어지는 경우)인 경우 약수의 개수는 홀수이다.
    // Number.isInteger()는 주어진 값이 정수인지 판별한다.
    if (Number.isInteger(Math.sqrt(i))) {
      // 약수의 개수가 홀수이기 때문에 괄호 안의 값은 정수이고, 정수이기 때문에 true 다.
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}
