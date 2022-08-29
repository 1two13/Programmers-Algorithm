//!나의 코드
// 놀이기구를 N번째 이용한다면 price * N배의 가격을 받음

function solution(price, money, count) {
  // 원래 이용료, 처음 가지고있던 금액, 이용 횟수

  // 필요한 총 이용 금액
  let totalMoney = 0;

  for (let i = 1; i <= count; i++) {
    totalMoney += price * i;
  }

  // 금액이 부족하지 않다면 return 0
  if (totalMoney - money <= 0) return 0;
  else return totalMoney - money;
}

//!다른 분 코드 (가우스 공식)
function solution(price, money, count) {
  const tmp = (price * count * (count + 1)) / 2 - money;
  return tmp > 0 ? tmp : 0;
}
