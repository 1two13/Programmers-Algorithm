//!나의 코드 (6.3점)
function solution(citations) {
  // h번 이상 인용된 논문은 h편 이상,
  // 나머지 논문(citations.length - h)이 h번 이하 인용된 h의 최댓값
  let answer = 0;
  // 논문 수
  let length = citations.length;

  // 오름차순(작은 => 큰) 배열 정렬
  citations.sort((a, b) => a - b);
  // 배열의 가운데 값
  let mid = Math.floor(length / 2); // 2

  if (citations[mid] !== length - mid) {
    answer = (citations[mid] + citations[mid - 1]) / 2;
  } else answer = citations[mid];

  return answer;
}

//!다른 분 코드
function solution(citations) {
  let answer = 0;
  // 내림차순 정렬(큰 => 작은)
  citations.sort((a, b) => b - a);

  while (answer + 1 <= citations[answer]) answer++;
  return answer;
}
