//!나의 코드(61.5)
// str1("abab"), str2("baba")일 때  결과값 32768이 나오지 않는다ㅠ
function makeTwoLengthWord(string) {
  const regex = /^[a-z]+$/;
  let arr = [];

  for (let i = 0; i < string.length - 1; i++) {
    let word = string.slice(i, i + 2);
    // 영문자로 된 글자쌍만 유효함(영문자가 아닌 값이 섞여있는 경우 그 값 버리기)
    if (regex.test(word)) arr.push(word);
  }

  return arr;
}

function solution(str1, str2) {
  let answer = 0;

  // 대소문자 구분하지 않음
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  // 각 문자열을 두 글자씩 끊기
  const firstArr = makeTwoLengthWord(str1);
  const secondArr = makeTwoLengthWord(str2);
  const same = firstArr.filter((word) => secondArr.includes(word)).length;

  // 집합 A와 집합 B가 모두 공집합일 경우에는 나눗셈이 정의되지 않으니 따로 J(A, B) = 1로 정의한다.
  if (firstArr.length === 0 && secondArr.length === 0) answer = 1;
  else answer = same / (firstArr.length + secondArr.length - same);

  return parseInt(answer * 65536);
}

//!다른 분 코드
function solution(str1, str2) {
  function explode(text) {
    const result = [];
    for (let i = 0; i < text.length - 1; i++) {
      const node = text.slice(i, i + 2);
      // 영문자로만 이루어진 2글자의 문자열인지 체크
      if (node.match(/[A-Za-z]{2}/)) result.push(node.toLowerCase());
    }

    return result;
  }

  const arr1 = explode(str1);
  const arr2 = explode(str2);
  // 중복 제거
  const set = new Set([...arr1, ...arr2]);
  let union = 0;
  let intersection = 0;

  set.forEach((item) => {
    const has1 = arr1.filter((x) => x === item).length;
    const has2 = arr2.filter((x) => x === item).length;
    union += Math.max(has1, has2);
    intersection += Math.min(has1, has2);
  });

  return union === 0 ? 65536 : Math.floor((intersection / union) * 65536);
}
