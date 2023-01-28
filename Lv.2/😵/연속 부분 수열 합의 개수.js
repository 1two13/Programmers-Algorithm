//!나의 코드

//!다른 분 코드
function solution(elements) {
  // concat을 사용해서 모든 경우의 수를 미리 만들어 놓을 수 있었다..
  const circular = elements.concat(elements);
  const set = new Set();

  for (let i = 0; i < elements.length; i++) {
    let sum = 0;
    for (let j = 0; j < elements.length; j++) {
      sum += circular[i + j];
      // new Set()한테 배열 메소드를 쓸 수 있구나!
      set.add(sum);
    }
  }

  return set.size;
}

//!다른 분 코드
function solution(elements) {
  const set = new Set();

  for (let i = 1; i <= elements.length; i++) {
    // 원순열 만들기 // i개의 원소를 뒤에 추가
    const els = elements.concat(elements.slice(0, i));
    // set 갱신
    for (let j = 0; j < elements.length; j++) {
      set.add(els.slice(j, j + i).reduce((a, c) => a + c, 0));
    }
  }

  return set.size;
}
