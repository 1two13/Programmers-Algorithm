//!나의 코드 (30점, signal: aborted (core dumped) 오류 발생)
// 위의 오류는 2차원 배열을 직접 구현하고자 할 때 발생하는 메모리 문제이다.
// left, right까지의 범위만을 고려해야 한다!

function criteriaArr(n) {
  let arr = [];
  while (n > 0) {
    arr.push(n);
    n--;
  }

  return arr.reverse();
}

function solution(n, left, right) {
  let criteria = criteriaArr(n); // [1,2,3,4]
  let answer = [];

  for (let i = 1; i < n; i++) {
    let slice = criteria.slice(0, i); // [1]
    let newArr = slice.map((el) => el + 1); // [2]

    answer.push([...newArr, ...criteria.slice(i)]);
    criteria = answer[i - 1];
  }
  // 초기화
  criteria = criteriaArr(n);
  answer.unshift(criteria);
  answer = answer.flat().slice(left, right + 1);

  return answer;
}

//!다른 분 코드
function solution(n, left, right) {
  let answer = [];

  for (let i = left; i <= right; i++) {
    // i 위치의 좌표 + 1
    answer.push(Math.max(parseInt(i / n), i % n) + 1);
  }

  return answer;
}
