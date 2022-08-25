// 한 번에 한 명 신고 가능
// 신고횟수 제한 없음
// 대신 동일한 유저에 대한 신고 횟수는 1회로 처리됨

// k번 이상 신고된 유저는 정지됨

// 유저가 신고한 모든 내용을 취합해 마지막에 한꺼번에 이용 정지 + 이용 정지 메일 발송

//!나의 코드 (정확성 8.3)
function solution(id_list, report, k) {
  // (["이용자ID",...], ["이용자ID 이용자가신고한ID",...], 정지 기준 되는 신고 횟수)

  // 각 유저별로 처리 결과 메일을 받은 횟수
  let answer = [];

  let newReport = [];
  for (let i = 0; i < report.length; i++) {
    // 공백을 기준으로 잘라서 배열 안에 담기
    newReport.push(report[i].split(" "));
  }
  // console.log(newReport); // 이중 배열

  // 신고당한 ID와 횟수가 담겨있는 객체
  let obj = {};
  for (let i = 0; i < newReport.length; i++) {
    // obj 객체에 유저가 신고한 ID가 없다면 객체에 새로운 키와 값을 추가하고
    if (obj.hasOwnProperty(newReport[i][1]) === false) obj[newReport[i][1]] = 1;
    // obj 객체에 유저가 신고한 ID가 있다면 해당 키에 값 추가
    else obj[newReport[i][1]] += 1;
  }
  // console.log(obj) // { frodo: 2, neo: 2, muzi: 1 }

  // 유저와 해당 유저가 신고한 ID가 담겨있는 객체
  let idObj = {};
  for (let i = 0; i < newReport.length; i++) {
    // 객체에 유저가 신고한 ID가 없다면 객체에 새로운 키와 값을 추가
    if (idObj.hasOwnProperty(newReport[i][0]) === false)
      idObj[newReport[i][0]] = [newReport[i][1]];
    // 객체에 유저가 신고한 ID가 있다면 해당 키에 값 추가
    else idObj[newReport[i][0]].push(newReport[i][1]);
  }
  // console.log(idObj) // {muzi: [ 'frodo', 'neo' ], apeach: [ 'frodo', 'muzi' ], frodo: [ 'neo' ]}

  // 정지 당하는 ID
  let idArr = [];
  for (let key in obj) {
    if (obj[key] === k) idArr.push(key);
  }
  // console.log(idArr) // [ 'frodo', 'neo' ]

  // idObj 깊은 복제
  let deepCopyIdObj = JSON.parse(JSON.stringify(idObj));
  // deepCopyIdObj 값을 모두 0으로 바꾸기
  for (let key in deepCopyIdObj) {
    deepCopyIdObj[key] = 0;
  }
  // console.log(deepCopyIdObj) // { muzi: 0, apeach: 0, frodo: 0 }

  for (let key in idObj) {
    for (let i = 0; i < idArr.length; i++) {
      for (let j = 0; j < idObj[key].length; j++) {
        if (idArr[i] === idObj[key][j]) {
          deepCopyIdObj[key] += 1;
        }
      }
    }
  }
  // console.log(deepCopyIdObj) // { muzi: 2, apeach: 1, frodo: 1 }

  for (let i = 0; i < id_list.length; i++) {
    if (deepCopyIdObj.hasOwnProperty(id_list[i]))
      answer.push(deepCopyIdObj[id_list[i]]);
    else answer.push(0);
  }
  return answer;
}

//!다른 분 코드
function solution(id_list, report, k) {
  const answer = new Array(id_list.length);
  answer.fill(0); // [0, 0, 0, 0]

  const report_list = {};

  id_list.map((user) => {
    report_list[user] = []; // key로 userid를 value로 빈 배열을 가지는 객체
  });
  // console.log(report_list) // { muzi: [], frodo: [], apeach: [], neo: [] }

  report.map((user) => {
    // 띄어쓰기를 기준으로 split하고, split 한 값을 구조분해할당
    const [user_id, report_id] = user.split(" ");

    // 값에 user_id 값이 없으면 추가해주기
    if (!report_list[report_id].includes(user_id))
      report_list[report_id].push(user_id);
  });

  for (const key in report_list) {
    // 만약 해당 key가 이용정지 유저라면
    if (report_list[key].length >= k) {
      report_list[key].map((user) => {
        answer[id_list.indexOf(user)] += 1;
      });
    }
  }

  return answer;
}
