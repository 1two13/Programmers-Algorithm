//!나의 코드
function solution(a, b) {
  // ([], [])
  let result = 0;
  // 반복문
  for (let i = 0; i < a.length; i++) {
    result = result + a[i] * b[i];
  }
  return result;
}

//!다른 분 코드
function solution(a, b) {
  return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
}
