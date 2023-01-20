//!나의 코드
function solution(A, B) {
  // 두 수를 곱한 값을 누적하여 더한 값의 최소값
  let answer = 0;

  A = A.sort((a, b) => a - b);
  B = B.sort((a, b) => b - a);

  for (let i = 0; i < A.length; i++) answer += A[i] * B[i];

  return answer;
}

//!다른 분 코드
function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  return A.reduce((total, val, idx) => total + val * B[idx], 0);
}
