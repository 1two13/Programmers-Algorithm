// 다트를 3번 던져 그 점수의 합계로 겨루는 게임

// 점수는 0 ~ 10
// 보너스는 S(점수 1제곱), D(점수 2제곱), T(점수 3제곱) 중 하나

// - #은 해당 점수 마이너스 (곱하기 -1)
// 옵션은 없을 수도 있음

// - * 첫 번째 기회에 나오면 => 점수 * 2
// - *은 *과 중첩될 수 있음(2번 이상) => 중첩된 * 이 있는 점수 * 2
// - *은 해당 점수와 바로 전에 얻은 점수를 각각 2배로 (위와 같은 말)
// - *은 #과 중첩될 수 있음 => 중첩된 # 이 있는 점수 * (-2)

//!나의 코드(93.8 => 22, 24번 실패)
function solution(dartResult) {
  // "점수|보너스|[옵션]점수|보너스|[옵션]점수|보너스|[옵션]"

  // 숫자의 위치
  let idx = "";
  for (let i = 0; i < dartResult.length; i++) {
    // num이 숫자인 경우
    // 0인 경우는 점수가 어짜피 0
    if (Number(dartResult[i]) >= 1 && Number(dartResult[i]) <= 10) idx += i;
  }

  // 3번의 기회를 각각 배열 안에 담기
  let chance = [];
  for (let i = 0; i < idx.length; i++) {
    chance.push(dartResult.slice(idx[i], idx[i + 1]));
  }

  // 3번의 기회에서 얻은 점수 합계
  let answer = [0, 0, 0];
  // 별 개수
  let star = 0;
  // # 개수
  let acha = 0;
  // 기회는 3번이니깐 3번 돌기
  for (let i = 0; i < chance.length; i++) {
    let [score, bonus, option, ten] = chance[i].split("");
    score = Number(score);

    // 점수가 10일 경우(즉, bonus가 "0"일 경우) 예외처리
    if (bonus === "0") {
      score = score + bonus;
      bonus = option;
      option = ten;
      ten = undefined;
    }

    // bonus에 따른 점수 제곱
    if (bonus === "S") answer[i] += Math.pow(score, 1);
    else if (bonus === "D") answer[i] += Math.pow(score, 2);
    else if (bonus === "T") answer[i] += Math.pow(score, 3);

    // 옵션값이 *인 경우
    if (option === "*") {
      // * 개수 세기
      star += 1;

      // 1번째 기회에 *이 있는 경우
      if (i === 0) {
        // 점수 2배
        answer[0] = answer[0] * 2;
      }
      // 2번째 또는 3번째 기회에 *이 있는 경우
      else {
        // 해당 점수 2배
        answer[i] = answer[i] * 2;
        // 바로 전에 얻은 점수 2배
        answer[i - 1] = answer[i - 1] * 2;
      }
    }

    // 옵션값이 #인 경우
    if (option === "#") {
      // # 개수 세기
      acha += 1;

      // 해당 점수를 마이너스로 만들기
      answer[i] = answer[i] * -1;
    }

    // 옵션값이 없는 경우
    if (option === undefined) {
      continue;
    }
  }

  return answer.reduce((acc, cur) => acc + cur);
}

//!다른 분 코드
function solution(dartResult) {
  // "점수|보너스|[옵션]점수|보너스|[옵션]점수|보너스|[옵션]"

  // 숫자의 위치
  let idx = "";
  for (let i = 0; i < dartResult.length; i++) {
    // num이 숫자인 경우
    // 0인 경우는 점수가 어짜피 0
    // 한자리 숫자의 경우 0 ~ 9, 10은 나올 수 없음. 애초에 한자리를 숫자로 바꾼 코드이기 때문에
    if (Number(dartResult[i]) >= 0 && Number(dartResult[i]) <= 9) {
      // 현재 자리가 숫자이더라도, 바로 직전이 숫자인지 판단해야함 왜냐하면 10의 경우 현재자리가 0으로 숫자이기때문
      // Number(idx[idx.length - 1])는 바로 직전에 추가된 index 자리의 값
      // 바로 직전에 추가된 index에 + 1 했을 때 현재 index랑 같은거면 연속되는 숫자, 즉 10이라는 뜻이므로 하기 if 함수 실행하지 않기
      if (idx.length === 0 || Number(idx[idx.length - 1]) + 1 !== i) {
        idx += i;
      }
      // console.log(idx);
    }
  }

  // 3번의 기회를 각각 배열 안에 담기
  let chance = [];
  for (let i = 0; i < idx.length; i++) {
    chance.push(dartResult.slice(idx[i], idx[i + 1]));
  }

  // 3번의 기회에서 얻은 점수 합계
  let answer = [0, 0, 0];
  // 별 개수
  let star = 0;
  // # 개수
  let acha = 0;
  // 기회는 3번이니깐 3번 돌기
  for (let i = 0; i < chance.length; i++) {
    let [score, bonus, option, ten] = chance[i].split("");
    score = Number(score);

    // 점수가 10일 경우(즉, bonus가 "0"일 경우) 예외처리
    if (bonus === "0") {
      score = score + bonus;
      bonus = option;
      option = ten;
      ten = undefined;
    }

    // bonus에 따른 점수 제곱
    if (bonus === "S") answer[i] += Math.pow(score, 1);
    else if (bonus === "D") answer[i] += Math.pow(score, 2);
    else if (bonus === "T") answer[i] += Math.pow(score, 3);

    // 옵션값이 *인 경우
    if (option === "*") {
      // * 개수 세기
      star += 1;

      // 1번째 기회에 *이 있는 경우
      if (i === 0) {
        // 점수 2배
        answer[0] = answer[0] * 2;
      }
      // 2번째 또는 3번째 기회에 *이 있는 경우
      else {
        // 해당 점수 2배
        answer[i] = answer[i] * 2;
        // 바로 전에 얻은 점수 2배
        answer[i - 1] = answer[i - 1] * 2;
      }
    }

    // 옵션값이 #인 경우
    if (option === "#") {
      // # 개수 세기
      acha += 1;

      // 해당 점수를 마이너스로 만들기
      answer[i] = answer[i] * -1;
    }

    // 옵션값이 없는 경우
    if (option === undefined) {
      continue;
    }
  }

  return answer.reduce((acc, cur) => acc + cur);
}
