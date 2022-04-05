//!나의 코드
function solution(new_id) {
  // 1. nwe_id 를 소문자로 변경
  // 2. 소문자, 숫자, -, _, . 를 제외한 모든 문자 제거
  // 3. .이 2번 이상 연속된 경우 한 개로 변경
  // 4. .이 처음이나 끝에 있다면 제거
  // 5. 빈 문자열이라면 "a" 넣기
  // 6. 16자 이상이면 초과된 문자 제거 + 만약 제거 후 .가 끝에 있다면 .제거
  // 7. 2자 이하라면 마지막 문자를 한번 더 추가
}

//!다른분 코드
function solution(new_id) {
  let answer = new_id;
  // 1. nwe_id 를 소문자로 변경
  answer = answer.toLowerCase();
  // 2. 소문자, 숫자, -, _, . 를 제외한 모든 문자 제거
  answer = answer.replace(/[^a-z0-9-_.]/g, ""); // ^ => a~z, 0~9, -, _, . 을 제외한 문자열을 ""로 바꿔라
  // 3. .이 2번 이상 연속된 경우 한 개로 변경
  answer = answer.replace(/\.+/g, ".");
  // 4. .이 처음이나 끝에 있다면 제거
  answer = answer.replace(/^\.|\.$/g, "");
  // 5. 빈 문자열이라면 "a" 넣기
  if (answer === "") {
    answer += "a";
  }
  // 6. 16자 이상이면 초과된 문자 제거
  if (answer.length >= 16) {
    answer = answer.substring(0, 15);
  }
  // 만약 제거 후 .가 끝에 있다면 .제거
  answer = answer.replace(/\.$/, "");
  // 7. 2자 이하라면 마지막 문자를 한번 더 추가
  while (answer.length <= 2) {
    answer += answer.charAt(answer.length - 1);
  }
  return answer;
}
