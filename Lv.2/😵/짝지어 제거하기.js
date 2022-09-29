//!나의 코드 (정확성 50.2, 효율성 0)
function solution(s) {
  let arr = s.split("");

  // 문자열 모두 제거할 때까지 반복
  let idx = 0;
  while (arr.length > 0 && idx < arr.length) {
    // 같은 알파벳이 2개 붙어 있다면
    if (arr[idx] === arr[idx + 1]) {
      // 짝(2개) 제거
      arr.splice(idx, 2);
      idx = 0;
    }
    // 그렇지 않다면
    else idx++;
  }

  // 문자열 모두 제거할 수 있으면 1
  if (arr.length === 0) return 1;
  // 아니면 0 리턴
  else return 0;
}

//!다른 분 코드
function solution(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    stack[stack.length - 1] === s[i] ? stack.pop() : stack.push(s[i]);
  }

  return stack.length === 0 ? 1 : 0;
}
