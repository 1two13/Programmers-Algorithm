// p의 개수랑 y개수가 같으면 true, 다르면 false
// p, y 가 하나도 없으면 true
// 대소문자 구별하지 않음

//!나의 코드
function solution(s) {
  let answer = true;
  let cntP = 0;
  let cntY = 0;
  // s를 전부 소문자로 바꾸기
  let lowerS = s.toLowerCase();

  // p의 개수와 y의 개수 세기
  for (let i = 0; i < lowerS.length; i++) {
    if (lowerS[i] === "p") cntP++;
    else if (lowerS[i] === "y") cntY++;
  }
  // p의 개수와 y의 개수 비교하기
  if (cntP === cntY) answer = true;
  else answer = false;

  return answer;
}

//!다른 분 코드
function solution(s) {
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}
