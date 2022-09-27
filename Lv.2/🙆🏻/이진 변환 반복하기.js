//!나의 코드
function solution(s) {
  // 이진 변환 횟수
  let cnt = 0;
  // 제거된 모든 0의 개수
  let zero = 0;
  // s의 길이

  // 1이 될 때까지 계속 이진 변환하기
  while (s.length > 1) {
    let length = s.length;
    // x의 모든 0 제거
    s = s.replaceAll("0", "");
    // 제거한 0의 개수
    zero += length - s.length;
    // x의 길이(s.length)를 2진법으로 표현한 문자열로 바꾸기
    s = s.length.toString(2);
    // 이진 변환 횟수 증가
    cnt++;
  }

  // [이진 변환 횟수, 제거된 모든 0의 개수]
  return [cnt, zero];
}

//!다른 분 코드
function solution(s) {
  let answer = [0, 0];

  while (s.length > 1) {
    // 이진 변환 횟수 증가
    answer[0]++;
    // 0의 개수 구하기
    answer[1] += (s.match(/0/g) || []).length;
    // s에서 0 제거하고, 그 길이를 2진법으로 표현하기
    s = s.replace(/0/g, "").length.toString(2);
  }

  return answer;
}
