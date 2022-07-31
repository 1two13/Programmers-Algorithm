/* 
각 문자열의 n번째 글자 기준으로 오름차순 정렬
각 문자열의 n번째 글자가 같은 경우 사전순으로 앞선 문자열이 앞으로
*/

//!나의 코드 (sort는 리턴값 -1, 0, 1 에 따라 자동으로 정렬시켜준다!)
function solution(strings, n) {
  return strings.sort((a, b) => {
    // 리턴값이 0보다 큰 경우 b가 먼저 옴
    if (a[n] > b[n]) return 1;
    // 리턴값이 0보다 작은 경우 a가 먼저 옴
    else if (a[n] < b[n]) return -1;
    else if (a[n] === b[n]) {
      // 리턴값이 0보다 큰 경우 b가 먼저 옴
      if (a > b) return 1;
      // 리턴값이 0보다 작은 경우 a가 먼저 옴
      else if (a < b) return -1;
      // 리턴값이 0인 경우 변경하지 않음
      return 0;
    }
  });
}

//!다른 분 코드
function solution(strings, n) {
  return strings.sort((s1, s2) =>
    s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])
  );
}
