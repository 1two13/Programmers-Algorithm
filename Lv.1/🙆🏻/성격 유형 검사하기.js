// 성격은 각 지표에서 두 유형 중 하나로 결정됨
// 검사지에는 총 n개의 질문이 있고, 각 질문은 7개의 선택지가 있음

// 매우 동의(7), 매우 비동의(1) => 3점
// 동의(6), 비동의(2) => 2점
// 약간 동의(5), 약간 비동의(3) => 1점
// 모르겠음(4) => 0점

// 각 지표에서 더 높은 점수를 받은 성격 유형이 검사자의 성격 유형
// 만약 점수가 같으면 사전순으로 빠른 성격 유형이 검사자의 성격 유형

//!나의 코드
function solution(survey, choices) {
  // 판단 지표를 담은 1차원 문자열 배열, 선택한 선택지를 담은 1차원 정수 배열

  // 검사자의 성격 유형 검사 결과를 지표 순서대로
  let answer = "";
  // 판단지표
  let criteria = ["RT", "CF", "JM", "AN"];

  let splitCriteria = {};
  for (let i = 0; i < criteria.length; i++) {
    for (let j = 0; j < 2; j++) {
      splitCriteria[criteria[i][j]] = 0;
    }
  }
  // console.log(splitCriteria); // 	{ R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 }

  // // choices.length만큼 반복문
  // for (let i = 0; i < choices.length; i++) {
  //   // choices가 1 ~ 3 라면, survey[i][0]에 값 주기
  //   if (choices[i] === 1) splitCriteria[survey[i][0]] += 3;
  //   else if (choices[i] === 2) splitCriteria[survey[i][0]] += 2;
  //   else if (choices[i] === 3) splitCriteria[survey[i][0]] += 1;
  //   // choices === 4 라면 survey[i][0], survey[i][1] 모두 0 값 주기
  //   // choices가 5 ~ 7 라면, survey[i][1]에 값 주기
  //   else if (choices[i] === 5) splitCriteria[survey[i][1]] += 1;
  //   else if (choices[i] === 6) splitCriteria[survey[i][1]] += 2;
  //   else if (choices[i] === 7) splitCriteria[survey[i][1]] += 3;
  // }

  // 위에서 하드코딩한 식 수정
  for (let i = 0; i < choices.length; i++) {
    // choices가 1 ~ 3 라면, survey[i][0]에 값 주기
    if (choices[i] >= 1 && choices[i] <= 3)
      splitCriteria[survey[i][0]] += Math.abs(choices[i] - 4);
    // choices === 4 라면 survey[i][0], survey[i][1] 모두 0 값 주기
    // choices가 5 ~ 7 라면, survey[i][1]에 값 주기
    if (choices[i] >= 5 && choices[i] <= 7)
      splitCriteria[survey[i][1]] += Math.abs(choices[i] - 4);
  }
  // console.log(splitCriteria) // { R: 6, T: 1, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 }

  for (let i = 0; i < criteria.length; i++) {
    // 점수가 같거나 크면
    if (splitCriteria[criteria[i][0]] >= splitCriteria[criteria[i][1]])
      answer += criteria[i][0];
    else answer += criteria[i][1];
  }

  return answer;
}

//!다른 분 코드
function solution(survey, choices) {
  const MBTI = {};
  const types = ["RT", "CF", "JM", "AN"];

  types.forEach((type) => type.split("").forEach((char) => (MBTI[char] = 0)));
  // console.log(MBTI); // 	{ R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 }

  choices.forEach((choice, index) => {
    // 구조분해할당
    const [disagree, agree] = survey[index];
    // console.log(disagree, agree)
    MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
  });

  return types.map(([a, b]) => (MBTI[b] > MBTI[a] ? b : a)).join("");
}
