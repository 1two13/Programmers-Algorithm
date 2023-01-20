//!나의 코드
function solution(n, words) {
  let arr = [words[0]];
  let turn = 1;

  for (let i = 1; i < words.length; i++) {
    // 차례 구하기
    if (i % n === 0) turn++;
    // 이전에 등장했던 단어가 아니고, 앞사람이 말한 단어의 마지막 문자로 시작하는 단어인 경우
    if (!arr.includes(words[i]) && arr.slice(-1)[0].slice(-1) === words[i].slice(0, 1)) {
      arr.push(words[i]);
      // 가장 먼저 탈락하는 사람의 번호, 탈락하는 차례
    } else return [(i % n) + 1, turn];
  }

  // 탈락자가 생기지 않는경우
  return [0, 0];
}

//!다른 분 코드
function solution(n, words) {
  // 차례
  let turn = 1;

  for (let i = 1; i < words.length; i++) {
    // 끝말잇기 성공한 경우
    let pass =
      // 현재 첫 글자랑 그 전 마지막 글자랑 같고
      words[i][0] === words[i - 1].slice(-1) &&
      // 이전에 등장하지 않은 단어 일 때
      !words.slice(0, i).includes(words[i]);

    // 차례 증가
    if (i % n === 0) turn++;

    // 가장 먼저 탈락하는 사람의 번호, 그 사람이 자신의 몇 번째 차례에 탈락하는지
    if (!pass) return [(i % n) + 1, turn];
  }

  // 만약 주어진 단어들로 탈락자가 생기지 않으면 [0, 0] 리턴
  return [0, 0];
}
