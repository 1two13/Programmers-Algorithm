//!나의 코드
function solution(arr, divisor) {
  // arr[i] % divisor === 0인 값을 오름차순으로 정렬해놓은 배열
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) answer.push(arr[i]);
  }

  // 만약 answer.length === 0 이면 [-1] 리턴하기
  if (answer.length === 0) return [-1];
  // answer 오름차순정렬
  else answer.sort((a, b) => a - b);

  return answer;
}

//!다른 분 코드
function solution(arr, divisor) {
  let answer = arr.filter((v) => v % divisor == 0);
  return answer.length == 0 ? [-1] : answer.sort((a, b) => a - b);
}
