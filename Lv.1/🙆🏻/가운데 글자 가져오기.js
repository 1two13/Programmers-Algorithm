/* 
짝수일 때는 가운데 2글자 반환
홀수 일때는 가운데 1글자 반환
*/

//!나의 코드
function solution(s) {
  var answer = "";
  let leng = s.length;
  let centerIdx = Math.floor(leng / 2);

  // 홀수 일때는 가운데 1글자 반환
  if (leng % 2 === 1) answer = s[centerIdx];
  // 짝수일 때는 가운데 2글자 반환
  else answer = s[centerIdx - 1] + s[centerIdx];

  return answer;
}

//!다른 분 코드
function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
