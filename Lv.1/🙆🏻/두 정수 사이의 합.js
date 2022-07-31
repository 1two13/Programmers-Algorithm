//!나의 코드
function solution(a, b) {
  // a ~ b 의 모든 정수의 합
  let answer = 0;

  // b가 a보다 클 때
  if (a < b) {
    for (let i = a; i <= b; i++) answer += i;
  }
  // a가 b보다 클 때
  else if (a > b) {
    for (let i = b; i <= a; i++) answer += i;
  }
  // a랑 b가 같다면 둘 중 아무거나 리턴
  else if (a === b) answer = a;

  return answer;
}
