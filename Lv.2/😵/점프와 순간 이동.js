// 순간이동(현재까지 온 거리 * 2에 해당하는 위치) 시 건전지 사용량 변화 없음
// 한 번에 K 칸 점프 시 K 만큼의 건전지 사용량 소모됨
// 0에서 1까지 갈 때 1 만큼의 건전지가 사용됨

//!나의 코드
// 어떤 규칙이 있는걸까...
// 질문하기 힌트보고 코드 짰음
function solution(n) {
  // 사용해야하는 건전지 사용량의 최솟값
  let ans = 0;

  // n이 0이 될 때까지
  while (n > 0) {
    // n이 홀수인 경우에는
    if (n % 2 !== 0) {
      // ans 1씩 증가
      ans++;
      n = n - 1;
    }
    // 계속 2로 나누기
    n = n / 2;
  }

  return ans;
}

//!다른 분  코드
// 이진수로 풀었음
function solution(n) {
  if (n === 1) return 1;
  // 2잔수로 만든 n을 배열에 한자리씩 담기
  const nArr = Array.from(n.toString(2));
  // 문자열 a, b를 숫자로 변경하기 위해 + 추가
  return nArr.reduce((a, b) => +a + +b);
}
