// 숫자로만 구성되어 있으면서 길이가 4 또는 6인 것만 true 리턴

//!나의 코드 (틀린 코드)
function solution(s) {
  let answer = true;
  // 문자열 길이가 4가 아니거나 6이 아니면 false
  if (s.length !== 4 && s.length !== 6) answer = false;
  // 문자열 길이가 4 또는 6이면
  else if (s.length === 4 || s.length === 6) {
    // for문으로 모든 자릿수가 숫자로 구성되어 있는지 확인하기
    for (let i = 0; i < s.length; i++) {
      // 해당 자릿수가 숫자가 아니면 다른 자릿수 검사할 필요 없이 바로 false 리턴
      if (Number(s[i]) === NaN) return false;
      // 해당 자릿수가 숫자면
      else answer = true;
    }
  }
  return answer;
}

//!다른 분 코드
function solution(s) {
  let answer = true;
  // 문자열 길이가 4가 아니거나 6이 아니면 false
  if (s.length !== 4 && s.length !== 6) answer = false;
  // 문자열 길이가 4 또는 6이면
  else {
    // for문으로 모든 자릿수가 숫자로 구성되어 있는지 확인하기
    for (let i = 0; i < s.length; i++) {
      // 해당 자릿수가 숫자가 아니면 다른 자릿수 검사할 필요 없이 바로 false 리턴
      if (isNaN(Number(s[i]))) return false;
    }
  }
  return answer;
}
