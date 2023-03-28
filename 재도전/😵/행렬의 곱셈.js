//!나의 코드(테케만 통과)
function solution(arr1, arr2) {
  let arr = new Array(arr1.length).fill(0);
  let answer = arr.map((el) => (el = new Array(arr1[0].length).fill(0)));

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      for (let k = 0; k < arr1[i].length; k++) {
        answer[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }

  return answer;
}

//!다른 분 코드
function solution(arr1, arr2) {
  const answer = [];

  for (let i = 0; i < arr1.length; i++) {
    let arr = [];
    for (let j = 0; j < arr2[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < arr2.length; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }
      arr.push(sum);
    }
    answer.push(arr);
  }

  return answer;
}
