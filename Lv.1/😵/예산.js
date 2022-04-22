//!나의 코드
// tree구조? => 완전 아니였다고 한다
function solution(d, budget) {
  // ([숫자...], 숫자) // (부서별로 신청한 금액, 예산)
  // 오름차순 정렬
  let newD = d.sort((a, b) => a - b);
  let answer = 0; // 물품을 지원할 수 있는 최대 부서 개수

  for (let i = 1; i <= newD.length; i++) {
    if (newD.slice(0, i).reduce((a, b) => a + b) === budget) answer = i;
    else i++;
  }

  return answer;
}

//!다른 분 코드
function solution(d, budget) {
  // ([숫자...], 숫자) // (부서별로 신청한 금액, 예산)
  // 오름차순 정렬
  d.sort((a, b) => a - b);
  let answer = 0,
    sum = 0;

  for (let i = 0; i < d.length; i++) {
    sum += d[i];
    answer++;

    if (sum > budget) answer--;
  }
  return answer;
}

//!다른 분 코드
function solution(d, budget) {
  d.sort((a, b) => a - b);

  while (d.reduce((a, b) => a + b, 0) > budget) d.pop();

  return d.length;
}
