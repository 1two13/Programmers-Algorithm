//!나의 코드
function solution(brown, yellow) {
  let sum = brown + yellow;

  // 가로 * 세로 === brown + yellow
  // 약수 구하는 식
  let idx = 1;
  while (idx <= sum) {
    if (sum % idx === 0) {
      // 가로 -2 * 세로 -2 한 값이 yellow랑 같고, 가로가 세로보다 크거나 같을 떄
      if ((idx - 2) * (sum / idx - 2) === yellow && idx >= sum / idx) {
        // [가로, 세로]
        return [idx, sum / idx];
      }
    }
    idx++;
  }
}
