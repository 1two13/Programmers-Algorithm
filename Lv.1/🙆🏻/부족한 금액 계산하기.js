/* 
공백 기준으로 각 단어별로 0번째부터 세고, 
짝수번째 문자는 대문자로
홀수번째 문자는 소문자로

공백이 한 개 이상일 수도 있다는 반례 케이스
*/

function solution(s) {
  let answer = "";
  let idx = 0;

  for (let i = 0; i < s.length; i++) {
    // s[i]가 공백일 경우 그대로 출력하고, idx를 0으로 초기화
    if (s[i] === " ") {
      answer += s[i];
      idx = 0;
    }
    // idx가 짝수번째일 경우 s[i]를 대문자로, idx++;
    else if (idx % 2 === 0) {
      answer += s[i].toUpperCase();
      idx++;
    }
    // idx가 홀수번째일 경우 s[i]를 소문자로, idx++;
    else if (idx % 2 === 1) {
      answer += s[i].toLowerCase();
      idx++;
    }
  }
  return answer;
}
