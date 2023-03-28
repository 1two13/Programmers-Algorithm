// 뭔 규칙이지
// 다른 분 코드 답을 봐도 모르겠다..

//!다른 분 코드 (뭔가 수학적인 방법 같은데 잘 모르겠다..)
function solution(word) {
  return [...word].reduce((a, c, i) => a + 'AEIOU'.indexOf(c) * Math.floor(781 / 5 ** i) + 1, 0);
}

//!다른 분 코드
function solution(word) {
  const alphas = ['A', 'E', 'I', 'O', 'U'];
  let isFind = false;
  let answer = -1;

  // 어차피 경우의 수는 6^6 = 46,656 밖에 없으니까 완탐으로
  (function recursion(depth, make) {
    isFind = make === word;
    answer++;

    if (depth === 5 || isFind) return;
    for (let i = 0; i < 5; i++) {
      if (isFind) break;
      recursion(depth + 1, make + alphas[i]);
    }
  })(0, '');

  return answer;
}
