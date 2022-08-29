//!나의 코드
// 처음에 어떻게 접근해야할지 잘 모르겠어서 넘기고 다른날 풀이했는데 풀렸다!
// 자바스크립트 내장 기능으로 년, 월, 일을 이용해서 요일을 구할 수 있었다.
function solution(a, b) {
  // 2016년 a월 b일
  let today = new Date(`2016-${a}-${b}`).getDay();
  let week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  return week[today];
}

//!다른 분 코드
function getDayName(a, b) {
  // a, b 가 각각 1이라고 가정했을 때, date = Fri Jan 01 2016 00:00:00 GMT+0900 (한국 표준시)
  let date = new Date(2016, a - 1, b);
  return date.toString().slice(0, 3).toUpperCase();
}
