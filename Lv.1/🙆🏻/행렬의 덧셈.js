function solution(arr1, arr2) {
  let answer = [];

  // arr1 길이만큼 미리 2차원 배열 생성하기
  for (let i = 0; i < arr1.length; i++) {
    answer.push([]);
  }

  // arr1 전체 배열 반복
  for (let i = 0; i < arr1.length; i++) {
    // arr1 배열 안에 배열의 각 요소 반복
    for (let j = 0; j < arr1[i].length; j++) {
      answer[i].push(arr1[i][j] + arr2[i][j]);
    }
  }
  return answer;
}
