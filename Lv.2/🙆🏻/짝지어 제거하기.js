//!나의 코드
function solution(s) {
  let arr = [];

  for (let i = 0; i < s.length; i++) {
    if (arr.length === 0) arr.push(s[i]);
    else if (s[i] !== arr.slice(-1)[0]) arr.push(s[i]);
    else arr.pop();
  }

  // 모두 제거가능하면 1, 아니면 0
  return arr.length === 0 ? 1 : 0;
}

//!다른 분 코드
function solution(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    stack[stack.length - 1] === s[i] ? stack.pop() : stack.push(s[i]);
  }

  return stack.length === 0 ? 1 : 0;
}
