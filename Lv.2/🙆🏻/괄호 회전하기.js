// //!나의 코드(풀지 못한 코드.. 적다 말았다)
// function solution(s) {
//   // 문자열
//   // s를 왼쪽으로 x(0 <= x < s.length)칸 만큼 회전시켰을 때 s가 올바른 괄호 문자열이 되게 하는 x 개수
//   let answer = 0;
//   let arr = [];

//   for (let i = 0; i < s.length; i++) {
//     // 1. s에서 맨 앞에 있는 글자 i개 제거
//     // 2. 제거한 글자를 맨 뒤에 push
//     arr.push(s.slice(i) + s.slice(0, i));
//   }

//   for (let i = 0; i < arr.length; i++) {
//     let first = 0; // "{"
//     let second = 0; // "("
//     let third = 0; // "["
//     for (let j = 0; j < arr[i].length; j++) {
//       // arr[i]가 올바른 괄호 문자열로 되어 있는지 체크하기

//       // 만약 arr[i]의 맨 앞 글자가 닫힌 괄호이면 다음 i로 넘어가기
//       if (arr[i][0] === '}' || arr[i][0] === ')' || arr[i][0] === ']') break;

//       // 올바른 괄호 문자열이면 answer++;
//       if (arr[i][j] === '{') first++;
//       else if (arr[i][j] === '(') second++;
//       else if (arr[i][j] === '[') third++;
//     }
//   }

//   return answer;
// }

// //!다른 분 코드
// function solution(s) {
//   let answer = 0;

//   for (let i = 0; i < s.length; i++) {
//     const arr = [];
//     // i가 0이면 그대로 사용
//     // i가 0이 아니면 s에서 맨 앞에 있는 글자 i개 제거하고, 제거한 글자를 맨 뒤에 push
//     const newS = i === 0 ? s : s.slice(i) + s.slice(0, i);

//     for (let j = 0; j < newS.length; j++) {
//       // arr에 여는 괄호가 있고, newS[j]가 현재 닫는 괄호이면 arr 맨 앞 요소 제거
//       if (arr[arr.length - 1] === '(' && newS[j] === ')') arr.pop();
//       else if (arr[arr.length - 1] === '[' && newS[j] === ']') arr.pop();
//       else if (arr[arr.length - 1] === '{' && newS[j] === '}') arr.pop();
//       else arr.push(newS[j]);
//     }
//     // 배열에 값이 없다면 올바른 괄호 문자열
//     if (arr.length === 0) answer++;
//   }

//   return answer;
// }
