//!나의 코드
function solution(arr) {
  // arr에서 가장 작은 수
  let min = Math.min(...arr);

  // 만약 arr.length === 1이면 [-1] 리턴
  if (arr.length === 1) return [-1];
  // arr에서 가장 작은 수를 제거한 배열
  return arr.filter((el) => el !== min);
}

//!다른 분 코드
function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  if (arr.length < 1) return [-1];
  return arr;
}
