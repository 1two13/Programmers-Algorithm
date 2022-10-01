//!나의 코드
function solution(n, a, b) {
  // 참가자 수, 참가자 번호, 경쟁자 번호

  // a와 b가 몇 번째 라운드에서 만나는지
  let answer = 0;

  // a랑 b가 같을 때까지 진행
  while (a !== b) {
    // 다음 라운드에 진출할 참가자 번호는 1번부터 N/2번을 차례대로 배정
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    n = n / 2;
    answer++;
  }

  return answer;
}

//!다른 분 코드
function solution(n, a, b) {
  let answer = 0;

  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }

  return answer;
}
