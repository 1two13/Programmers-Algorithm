// 각 칸은 ""(0) 또는 "#"(1)
// 지도1과 지도2 중에서 하나라도 "#"인 칸은 전체 지도에서도 "#"
// 지도1과 지도2 중에서 모두 ""인 칸은 전체 지도에서도 ""

//!나의 코드
function solution(n, arr1, arr2) {
  // 지도는 한 변의 길이가 n인 정사각형 배열, 10진수 배열

  // 2진수 배열
  let arr = [];
  // '#', ""으로 구성된 문자열 배열로 출력
  let result = [];

  for (let i = 0; i < n; i++) {
    // 하나라도 1이라면 전체 지도에서도 1
    let num = arr1[i] | arr2[i];
    // 10진수 값을 2진수로 바꾸고, n길이가 될 때까지 "0" 추가
    let str = num.toString(2).padStart(n, "0");

    arr.push(str);
  }
  // console.log(arr); // [ '11111', '10101', '11101', '10011', '11111' ]
  for (let i = 0; i < arr.length; i++) {
    // 모든 1을 "#"으로 치환
    let replaceOne = arr[i].replace(/1/gi, "#");
    // 모든 0을 " "로 치환
    let replaceZero = replaceOne.replace(/0/gi, " ");
    result.push(replaceZero);
  }

  return result;
}

//!다른 분 코드
function solution(n, a, b) {
  return a.map((a, i) =>
    (a | b[i]).toString(2).padStart(n, 0).replace(/0/g, " ").replace(/1/g, "#")
  );
}
