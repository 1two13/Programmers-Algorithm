//!나의 코드(정답코드)
// 조건문에서 one[i] === answer[i] 를 비교하게 되면 one[0] ~ one[4] 까지만 확인할 수 있기 때문에,
// one[i % 5] === answers[i] 으로 비교함으로써 one의 인덱스와 관계없이 비교를 할 수 있다.
function solution(answers) {
  const one = [1, 2, 3, 4, 5]; // 5
  const two = [2, 1, 2, 3, 2, 4, 2, 5]; // 8
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; // 10
  // 반복문으로 검사하면서 일치하는 숫자가 있다면 count++
  let oneCount = 0;
  let twoCount = 0;
  let threeCount = 0;
  for (let i = 0; i < answers.length; i++) {
    if (one[i % 5] === answers[i]) {
      oneCount++;
    }
  }
  for (let j = 0; j < answers.length; j++) {
    if (two[j % 8] === answers[j]) {
      twoCount++;
    }
  }
  for (let k = 0; k < answers.length; k++) {
    if (three[k % 10] === answers[k]) {
      threeCount++;
    }
  }
  // oneCount, twoCount, threeCount(점수) 비교해서 제일 큰 수를 배열에 담아서 리턴
  let arr = [oneCount, twoCount, threeCount];
  let result = [];
  if (Math.max(...arr) === oneCount) result.push(1);
  if (Math.max(...arr) === twoCount) result.push(2);
  if (Math.max(...arr) === threeCount) result.push(3);

  return result;
}

//!나의 코드
function solution(answers) {
  const A = [1, 2, 3, 4, 5];
  const B = [2, 1, 2, 3, 2, 4, 2, 5];
  const C = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let arr = [0, 0, 0]; // 문제를 가장 맞힌 사람
  let result = [];

  for (let i = 0; i < answers.length; i++) {
    if (A[i % A.length] === answers[i]) arr[0] += 1;
    if (B[i % B.length] === answers[i]) arr[1] += 1;
    if (C[i % C.length] === answers[i]) arr[2] += 1;
  }

  let max = Math.max(...arr);

  if (max === arr[0]) result.push(1);
  if (max === arr[1]) result.push(2);
  if (max === arr[2]) result.push(3);

  return result;
}

//!다른 분 코드
function solution(answers) {
  let answer = [];
  const a1 = [1, 2, 3, 4, 5];
  const a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let a1c = answers.filter((a, i) => a === a1[i % a1.length]).length; // a1[0], al[1]...
  let a2c = answers.filter((a, i) => a === a2[i % a2.length]).length;
  let a3c = answers.filter((a, i) => a === a3[i % a3.length]).length;
  let max = Math.max(a1c, a2c, a3c);

  if (a1c === max) answer.push(1);
  if (a2c === max) answer.push(2);
  if (a3c === max) answer.push(3);

  return answer;
}
