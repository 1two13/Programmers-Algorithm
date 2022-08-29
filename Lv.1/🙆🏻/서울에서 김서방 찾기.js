//!나의 코드
function solution(seoul) {
  // "Kim"의 위치 x를 찾아 "김서방은 x에 있다" 반환
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") return `김서방은 ${i}에 있다`;
  }
}

//!다른 분 코드
function solution(seoul) {
  return "김서방은 " + seoul.indexOf("Kim") + "에 있다";
}
