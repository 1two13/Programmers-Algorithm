//!나의 코드
function solution(arr) {
  let cnt = 0;

  // n개의 숫자를 담은 arr 배열의 최소공배수 구하기
  let i = 1;
  while (true) {
    for (let j = 0; j < arr.length; j++) {
      // arr[j]를 i로 나누었을 때 나머지 값이 0인 경우 cnt 증가
      if (i % arr[j] === 0) cnt++;
    }

    if (cnt === arr.length) return i;
    else {
      // cnt 초기화
      cnt = 0;
      i++;
    }
  }
}
