//!나의 코드
function solution(numbers) {
  // [숫자...]
  let newArr = [];
  // 서로 다른 인덱스에 있는 2개의 수 뽑기
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      // 뽑은 2개의 수 더하기
      // 더한 값이 newArr에 존재하지 않는다면 newArr에 추가하기
      if (!newArr.includes(numbers[i] + numbers[j]))
        newArr.push(numbers[i] + numbers[j]);
    }
  }
  // newArr을 오름차순으로 정리하기
  return newArr.sort((a, b) => a - b);
}

//!다른 분 코드
function solution(numbers) {
  const temp = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      temp.push(numbers[i] + numbers[j]);
    }
  }

  const answer = [...new Set(temp)];

  return answer.sort((a, b) => a - b);
}
