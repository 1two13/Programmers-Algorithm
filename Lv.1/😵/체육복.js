//!나의코드
// 정확성 5.0
function solution(n, lost, reserve) {
  // (전체 학생수, [체육복을 도난당한 학생들의 번호], [여벌의 체육복을 가져온 학생들의 번호])
  // n에서 lost와 reserve 수를 뺀 개수(n - lost.length - reserve.length) 파악하기 (count에 개수 저장)
  let count = n - lost.length - reserve.length;
  if (count === 0) return n;
  // 반복문
  // reserve - 1 또는 reserve + 1 수가 lost 에 있는지 확인하기
  for (let i = 0; i < reserve.length; i++) {
    // lost에 있다면 count = count + 1 + reserve.length
    if (lost.includes(reserve[i] - 1) || lost.includes(reserve[i] - 1)) {
      count = count + 1 + reserve.length;
      // lost에 없다면 reserve.length를 count에 더해주기
    } else count = count + reserve.length;
  }
  // return 체육수업을 들을 수 있는 학생의 최댓값 (count)
  return count;
}

//!다른 분 코드
function solution(n, lost, reserve) {
  // 체육복을 모두 1벌씩 가지고 있도록 설정 (= 1로 채워진 1차원 배열 생성)
  let result = new Array(n).fill(1);
  // 체육복을 도난당한 학생의 경우 0으로 만들어주기
  for (let i = 0; i < lost.length; i++) {
    result[lost[i] - 1] = 0;
  }
  // 여벌의 체육복을 가져온 학생의 경우 +1
  for (let i = 0; i < reserve.length; i++) {
    result[reserve[i] - 1] += 1;
  }
  // 체육복이 0개인 학생이 뒷번호 또는 앞번호에서 체육복을 빌려올 수 있는 경우
  for (let i = 0; i < n - 1; i++) {
    if (
      (result[i] === 0 && result[i + 1] === 2) ||
      (result[i] === 2 && result[i + 1] === 0)
    ) {
      result[i] = 1;
      result[i + 1] = 1;
    }
  }

  let answer = 0;
  // 체육복을 1개 이상 가지고 있는 경우 => answer++
  for (let i = 0; i < n; i++) {
    if (result[i] >= 1) {
      answer++;
    }
  }
  return answer;
}
