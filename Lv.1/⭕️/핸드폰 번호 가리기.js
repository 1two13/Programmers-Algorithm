//!나의 코드
function solution(phone_number) {
  const length = phone_number.length - 4;
  // *로 바뀔 문자열
  let start = phone_number.slice(0, length);
  // *로 바꾼 문자열
  let star = start.replace(/[0-9]/gi, "*");
  // *로 바꾸지 않을 뒤 4자리
  let end = phone_number.slice(length);

  return star + end;
}

//!다른 분 코드
function solution(phone_number) {
  let result = "*".repeat(phone_number.length - 4) + phone_number.slice(-4);

  return result;
}
