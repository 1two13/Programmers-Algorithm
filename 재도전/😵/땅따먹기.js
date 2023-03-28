//!다른 분 코드
function solution(land) {
  let answer = 0;

  for (let i = 1; i < land.length; i++) {
    for (let j = 0; j < 4; j++) {
      // 얕은 복사본(원본 배열 수정 X)
      let arr = land[i - 1].slice();
      // 그 전 열의 값을 가장 낮은값으로 설정(같은 열을 지날수 없다.)
      arr[j] = 0;
      // 다음 행이랑 비교해서 가장 큰 값 구하기(현재 행의 가장 큰 값 + 다음 행의 가장 큰 값)
      land[i][j] += Math.max.apply(null, arr);
      answer = Math.max(land[i][j], answer);
    }
  }

  return answer;
}
