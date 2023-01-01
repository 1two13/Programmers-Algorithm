// 진도가 100%일 때 서비스에 반영할 수 있음
// 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포

//!다른 분 코드
function solution(progresses, speeds) {
  let answer = [0];
  let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
  let maxDay = days[0];

  for (let i = 0, j = 0; i < days.length; i++) {
    if (days[i] <= maxDay) answer[j] += 1;
    else {
      maxDay = days[i];
      answer[++j] = 1;
    }
  }

  return answer;
}
