// numbers 배열에 담긴 정수들의 순서는 바꾸지 않기

// 깊이 우선 탐색

//!나의 코드
// DFS 로 푸는것은 맞는거 같은데! 재귀로 못 돌리겠다..
// 하기 코드는 정답코드가 아님.
function solution(numbers, target) {
  // 숫자가 담긴 배열, 만드려고 하는 숫자

  let count = 0;
  let result = 0;

  for (let i = 0; i < numbers.length; i++) {
    // 종료조건
    // 위 과정을 반복해서 돌았을 때 결과가 target 과 같다면 count++
    if (result === target) count++;
    // numbers의 요소가 target 보다 크거나 같다면 numbers 요소에 + 붙이기
    if (numbers[i] >= target) {
      result = result + numbers[i];
      // numbers의 요소가 target 보다 작다면 numbers 요소에 - 붙이기
    } else if (numbers[i] < target) {
      result = result - numbers[i];
    }
  }
  // return numbers를 이용해서 target을 만드는 경우의 수
  return count;
}

//!다른 분 코드
function solution(numbers, target) {
  let answer = 0;

  dfs(0, 0);

  function dfs(index, sum) {
    if (index === numbers.length) {
      if (sum === target) answer++;
      return;
    }

    dfs(index + 1, sum + numbers[index]);
    dfs(index + 1, sum - numbers[index]);
  }

  return answer;
}
