/* 
x는 양의 정수
x의 자릿수의 합으로 x가 나누어 떨어지면 하샤드 수
*/

//!나의 코드
function solution(x) {
  let answer;
  let sum = 0;
  let str = String(x);

  for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]);
  }

  if (x % sum === 0) answer = true;
  else answer = false;

  return answer;
}
