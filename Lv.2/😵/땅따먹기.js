//!나의 코드(0점)
function solution(land) {
  let answer = 0;
  // 밟은 열
  let columns = [];
  let i = 0;

  while (land.length > 0) {
    let newLand = land.reduce((acc, cur) => acc.concat(cur));
    let max = Math.max(...newLand); // 8
    let index = newLand.indexOf(max); // 7
    columns.push(index % 4); // 3
    console.log(newLand, max, index, columns);

    // 현재 열이 이전 열과 같지 않을 때
    if (columns.length === 1 || columns[i] !== columns[i - 1]) {
      answer += max;
    } else {
      newLand.splice(index, 1);
      max = Math.max(...newLand);
      answer += max;
    }

    i++;
    land.splice(Math.floor(index / 4), 1);
  }

  return answer;
}

//!다른 분 코드
function solution(land) {
  let answer = 0;

  for (let i = 1; i < land.length; i++) {
    for (let j = 0; j < 4; j++) {
      // 얕은 복사본(원본 배열 수정 X)
      let arr = land[i - 1].slice();
      // 그 전 열의 값을 가장 낮은값으로 설정(같은 열을 지날수 없다.)
      arr[j] = 0;
      // 다음 행이랑 비교해서 가장 큰 값 구하기(현재 행의 가장 큰 값 + 다음 행의 가장 큰 값)
      land[i][j] += Math.max.apply(null, arr);
      answer = Math.max(land[i][j], answer);
    }
  }

  return answer;
}
