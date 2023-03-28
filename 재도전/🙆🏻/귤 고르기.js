//!나의 코드
function solution(k, tangerine) {
  // 귤 k개를 고를 때 크기가 서로 다른 종류의 수의 최솟값
  let answer = 0;
  let obj = {};

  // 크기: 개수
  for (let i = 0; i < tangerine.length; i++) {
    let el = tangerine[i];
    if (obj.hasOwnProperty(el)) obj[el] += 1;
    else obj[el] = 1;
  }

  const arr = Object.values(obj).sort((a, b) => b - a);

  for (let j = 0; j < arr.length; j++) {
    answer += arr[j];
    if (answer >= k) return j + 1;
  }
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
