//!나의 코드 (어떻게 위치를 찾아야할지 모르겠어서 포기..)
// 정답코드 아님
function solution(priorities, location) {
  // 중요도, 요청한 문서 위치(0부터 시작)
  // 인덱스 값을 키로 priorities 값을 값으로 갖는 객체
  let obj = Object.assign({}, priorities);
  let values = Object.values(obj);
  // 요청한 문서가 몇 번째로 인쇄되는지
  let answer = 0;

  console.log(obj);
  while (values.length > 0) {
    // 가장 앞에 있는 문서가 중요도가 가장 높을 때
    if (values[0] >= Math.max(...values.slice(1))) {
      // 가장 앞에 있는 문서 제거
      values.shift();
    } else {
      let pop = values.shift();
      values.push(pop);
    }
  }

  return answer;
}

//!다른 분 코드
function solution(priorities, location) {
  let arr = priorities.map((priority, index) => {
    return {
      index: index,
      priority: priority,
    };
  });
  let queue = [];

  while (arr.length > 0) {
    let firstEle = arr.shift();
    let hasHighPriority = arr.some((ele) => ele.priority > firstEle.priority);

    if (hasHighPriority) arr.push(firstEle);
    else queue.push(firstEle);
  }

  return queue.findIndex((queueEle) => queueEle.index === location) + 1;
}
