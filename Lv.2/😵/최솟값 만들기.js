//!나의 코드
// 재귀로 풀어야한다고 생각해서 식을 써봤는데 도저히 해답이 나오지 않았다..

//!다른 분 코드
function solution(A, B) {
  let answer = 0;

  A = A.sort((a, b) => a - b);
  B = B.sort((a, b) => b - a);

  // A배열에서 가장 작은 수와 B배열에서 가장 큰 수를 곱하기
  for (let i = 0; i < A.length; i++) answer += A[i] * B[i];

  return answer;
}

//!다른 분 코드
function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  return A.reduce((total, val, idx) => total + val * B[idx], 0);
}
