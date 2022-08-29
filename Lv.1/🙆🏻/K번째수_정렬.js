//!나의 코드
function solution(array, commands) {
  // ([], [[i,j,k], [i,j,k]...])
  let result = [];
  for (let l = 0; l < commands.length; l++) {
    let i = commands[l][0];
    let j = commands[l][1];
    let k = commands[l][2];

    // i번째 ~ j번째까지 자르기
    let sArray = array.slice(i - 1, j);
    // 오름차순 정렬하기
    let newArray = sArray.sort((a, b) => a - b);
    result.push(newArray[k - 1]);
  }
  return result;
}

//!다른분 코드
function solution(array, commands) {
  return commands.map((command) => {
    const [i, j, k] = command;
    const newArray = array
      .filter((value, fIndex) => fIndex >= i - 1 && fIndex <= j - 1)
      .sort((a, b) => a - b);

    return newArray[k - 1];
  });
}
