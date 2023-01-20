//!나의 코드(8.8)
function solution(k, tangerine) {
  // 귤 k개를 고를 때 크기가 서로 다른 종류의 수의 최솟값
  let answer = 0;
  let arr = [tangerine[0]];
  let count = 0;

  tangerine.sort((a, b) => a - b);
  console.log(tangerine);

  let i = 1;
  while (answer <= k) {
    if (arr.includes(tangerine[i])) {
      arr.pop();
      answer += 2;
      count++;
    } else arr.push(tangerine[i]);
    i++;
  }

  return count - 1;
}

//!다른 분 코드
// Dictionary 자료구조
function solution(k, tangerine) {
  let answer = 0;
  const tDict = {};
  // 귤 객체 초기화 (존재하지 않는 키면 1, 존재하는 키면 1씩 증가)
  tangerine.forEach((t) => (tDict[t] = (tDict[t] || 0) + 1));
  // 키는 모두 다르니깐 값만 내림차순 정렬
  const tArr = Object.values(tDict).sort((a, b) => b - a);

  // 필요한 귤만큼 가짓수를 더해주기
  for (const t of tArr) {
    answer++;
    if (k > t) k -= t;
    else break;
  }

  return answer;
}
