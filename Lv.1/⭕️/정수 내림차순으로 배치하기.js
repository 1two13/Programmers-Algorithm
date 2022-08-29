// n의 각 자릿수를 큰거부터 작은 순으로 정렬시키기

//!나의 코드
function solution(n) {
  let arr = n
    .toString()
    .split("")
    .sort((a, b) => b - a); // [ '8', '7', '3', '2', '1', '1' ]

  return Number(arr.join(""));
}

//!다른 분 코드
function solution(n) {
  const newN = n + "";
  const newArr = newN.split("").sort().reverse().join("");

  // + 를 사용하여 숫자로 변환
  return +newArr;
}
