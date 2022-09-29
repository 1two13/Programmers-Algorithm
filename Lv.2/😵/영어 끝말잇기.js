//!나의 코드 (코드 작성하다가 말았음)
// 뭔가 풀릴듯하면서 알듯하면서 모르겠어서 답지 오픈
function solution(n, words) {
  // 사람 수, 사람들이 순서대로 말한 단어

  // 가장 먼저 탈락하는 사람의 번호, 그 사람이 자신의 몇 번째 차례에 탈락하는지
  let answer = [];
  let arr = [];
  // 몇 번 사람이 말한 단어를 모아둔 이중배열
  let nWords = [];
  // 마지막 단어 추출
  let end;
  // 첫 단어 추출
  let start;

  // 만약 주어진 단어들로 탈락자가 생기지 않으면 [0, 0] 리턴

  // words를 반복문으로 돌면서 이중 배열 만들기
  for (let i = 0; i < n; i++) {
    for (let j = i; j < words.length; j += n) {
      arr.push(words[j]);
    }
    nWords.push(arr);
    arr = [];
  }
  // console.log(nWords) // [ [ 'hello', 'even', 'now', 'draw' ], [ 'one', 'never', 'world' ] ]

  // nWords 반복문으로 돌기
  for (let i = 0; i < nWords[0].length; i++) {
    // 이전에 등장했던 단어는 사용할 수 없음
    for (let j = 0; j < n; j++) {
      if (nWords[j][i] !== undefined) {
        // 끝말잇기 성공했는지 확인
        end = String(nWords[j][i]).slice(-1);
        start = String(nWords[j][i]).slice(0, 1);
        console.log(nWords[j][i], start, end);
      }
    }
  }

  return answer;
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
