// 실패율 => 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
// stages 요소 중 N+1은 마지막 N번째까지 클리어한 사용자
// 만약 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록
// 스테이지에 도달한 유저가 없는 경우 실패율은 0

//!나의 코드 (70.4)
function solution(N, stages) {
  // 전체 스테이지 개수, 사용자가 위치한 현재 스테이지 번호가 담긴 배열

  // 실패율이 높은 스테이지부터 내림차순으로 스테이지 번호가 담겨있는 배열 (실패율이 큰 순서대로)
  let answer = [];
  // idx를 키로 실패율을 값으로 담을 객체
  let obj = {};
  // 스테이지에 도달한 플레이어 수
  let clear = 0;
  // 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수
  let unClear = 0;

  // N만큼 반복
  for (let i = 1; i <= N; i++) {
    // stages 배열 요소 반복
    for (let j = 0; j < stages.length; j++) {
      if (stages[j] >= i) clear += 1;
      if (stages[j] === i) unClear += 1;
    }

    obj[i] = unClear / clear;
    // console.log(obj); // { '1': 0.125, '2': 0.42857142857142855, '3': 0.5, '4': 0.5, '5': 0 }
    answer.push(unClear / clear);
    // console.log(answer); // [ 0.125, 0.42857142857142855, 0.5, 0.5, 0 ]

    // clear와 unClear 0으로 초기화
    clear = 0;
    unClear = 0;
  }

  // 내림차순 정렬
  answer.sort((a, b) => b - a);
  // console.log(answer) // [ 0.5, 0.5, 0.42857142857142855, 0.125, 0 ]

  let result = [];
  // stages 요소 중 N+1은 마지막 N번째까지 클리어한 사용자
  for (let i = 0; i < answer.length; i++) {
    for (let j = 1; j <= N; j++) {
      if (answer[i] === obj[j]) {
        result.push(j);
        delete obj[j];
      }
    }
  }

  return result;
}

//!나의 코드 + 다른 분 코드
function solution(N, stages) {
  // 전체 스테이지 개수, 사용자가 위치한 현재 스테이지 번호가 담긴 배열

  // 실패율이 높은 스테이지부터 내림차순으로 스테이지 번호가 담겨있는 배열 (실패율이 큰 순서대로)
  let answer = [];
  // 스테이지에 도달한 플레이어 수
  let clear = 0;
  // 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수
  let unClear = 0;

  // N만큼 반복
  for (let i = 1; i <= N; i++) {
    // stages 배열 요소 반복
    for (let j = 0; j < stages.length; j++) {
      if (stages[j] >= i) clear += 1;
      if (stages[j] === i) unClear += 1;
    }

    answer.push([i, unClear / clear]);
    // console.log(answer); // [ [ 1, 0 ], [ 2, 0 ], [ 3, 0 ], [ 4, 1 ] ]

    // clear와 unClear 0으로 초기화
    clear = 0;
    unClear = 0;
  }

  // 내림차순 정렬
  answer.sort((a, b) => b[1] - a[1]);
  // console.log(answer) // 	[ [ 4, 1 ], [ 1, 0 ], [ 2, 0 ], [ 3, 0 ] ]

  return answer.map((v) => v[0]);
}

//!다른 분 코드
function solution(N, stages) {
  let result = [];
  for (let i = 1; i <= N; i++) {
    let reach = stages.filter((x) => x >= i).length;
    let curr = stages.filter((x) => x === i).length;
    result.push([i, curr / reach]);
  }

  // idx 값 기준으로 내림차순 정렬
  result.sort((a, b) => b[1] - a[1]);

  return result.map((x) => x[0]);
}
