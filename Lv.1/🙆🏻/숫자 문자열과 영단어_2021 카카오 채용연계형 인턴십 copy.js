//!나의 코드
function solution(s) { // ''
  let result = '';
  // 반복문으로 돌면서 타입이 문자열이면 숫자로 바꾸기
  for (let i = 0; i < s.length; i++) {
    // s의 타입이 모두 숫자면 바꾸지 않기
    if (isNaN(s[i]) === false) {
        result = result + s[i];
    } else 
    // 어떤 문자열을 어떤 숫자로 바꿀지 명시해야 함 
    if (s.slice(i, i+4) === 'zero') {
        result = result + 0;
    } else if (s.slice(i, i+3) === 'one') {
        result = result + 1;
    } else if (s.slice(i, i+3) === 'two') {
        result = result + 2;
    } else if (s.slice(i, i+5) === 'three') {
        result = result + 3;
    } else if (s.slice(i, i+4) === 'four') {
        result = result + 4;
    } else if (s.slice(i, i+4) === 'five') {
        result = result + 5;
    } else if (s.slice(i, i+3) === 'six') {
        result = result + 6;
    } else if (s.slice(i, i+5) === 'seven') {
        result = result + 7;
    } else if (s.slice(i, i+5) === 'eight') {
        result = result + 8;
    } else if (s.slice(i, i+4) === 'nine') {
        result = result + 9;
    }
  }
  return Number(result);
}

//!다른분 코드
function solution(s) {
  // 배열안에 문자열을 모두 담기
  // 어떤 문자열을 어떤 숫자로 바꿀지 명시하는 것도 반복문으로 찾아내는 것도 매우 쉬움
  let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  var answer = s; // 현재 문자열
  
  for(let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]); // split 메소드를 사용하여 문자열을 배열로 변경 // answer에 number[i]가 있으면 삭제하고 빈 문자열로 변경 // 없으면 원본 그대로
    answer = arr.join(i); // numbers 배열의 문자열과 인덱스로 바꿔야하기 때문에 가능
  }

  return Number(answer);
}