//!다른 분 코드
function isMatch(discount, want, number) {
  //! new Map()을 사용한게 포인트
  const wantMap = new Map();
  // undefined || 0 은 0, 1 || 0 은 1
  discount.forEach((el) => wantMap.set(el, (wantMap.get(el) || 0) + 1));

  for (let i = 0; i < want.length; i++) {
    if (wantMap.get(want[i]) !== number[i]) return false;
  }

  return true;
}

function solution(want, number, discount) {
  let answer = 0;

  for (let i = 0; i <= discount.length - 10; i++) {
    const sliceDiscount = discount.slice(i, i + 10);
    if (isMatch(sliceDiscount, want, number)) answer++;
  }

  return answer;
}

//!다른 분 코드
function solution(want, number, discount) {
  let count = 0;
  for (let i = 0; i < discount.length - 9; i++) {
    const slice = discount.slice(i, i + 10);

    let flag = true;
    for (let j = 0; j < want.length; j++) {
      if (slice.filter((item) => item === want[j]).length !== number[j]) {
        flag = false;
        break;
      }
    }
    if (flag) count += 1;
  }
  return count;
}
