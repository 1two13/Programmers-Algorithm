// 진도가 100%일 때 서비스에 반영할 수 있음
// 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포

//!나의 코드
function solution(progresses, speeds) {
  // 각 배포마다 몇 개의 기능이 배포되는지
  let answer = [];
  let days = [];
  let memo = 1;

  for (let i = 0; i < progresses.length; i++) {
    let day = Math.ceil((100 - progresses[i]) / speeds[i]);
    days.push(day);
  }

  for (let j = 0; j < days.length; j++) {
    if (memo < days[j]) {
      answer.push(1);
      memo = days[j];
    } else answer[answer.length - 1] += 1;
  }

  return answer;
}

//!다른 분 코드
function solution(progresses, speeds) {
  let answer = [0];
  let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
  let maxDay = days[0];

  for (let i = 0, j = 0; i < days.length; i++) {
    if (days[i] <= maxDay) answer[j] += 1;
    else {
      maxDay = days[i];
      // 전위증가로 구현한 게 포인트!
      answer[++j] = 1;
    }
  }

  return answer;
}
