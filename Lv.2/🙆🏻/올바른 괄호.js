//!나의 코드
function solution(s) {
  // 열린 괄호
  let open = 0;
  // 닫힌 괄호
  let close = 0;
  // 열린 괄호와 닫힌 괄호 짝이 맞는지 여부
  let answer = true;

  // 닫힌 괄호랑 열린 괄호랑 갯수가 같아야함
  // 예외 케이스 "())()(()"
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      open++;
      answer = false;
    } else if (s[i] === ")" && answer === false) {
      close++;
      answer = false;
      // 예외 케이스 ")()("
    } else return false;

    if (open === close) answer = true;
  }

  return answer;
}

//!다른 분 코드
function solution(s) {
  let cum = 0;

  for (let paren of s) {
    cum += paren === "(" ? 1 : -1;
    // 짝 없이 ) 로 시작하는 경우
    if (cum < 0) {
      return false;
    }
  }

  return cum === 0 ? true : false;
}
