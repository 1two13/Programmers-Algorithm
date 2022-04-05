//!나의 코드
// 수도코드는 세웠으나 수도코드조차 혼잡하니깐 코드를 짜지 못했던 것 같다.
function solution(lottos, win_nums) {
  // ([구매한 로또 번호], [당첨번호])
  // 정렬
  lottos.sort();
  win_nums.sort();
  // lottos 가 전부 다 0 이면 => return [1, 6]
  let sum = lottos.reduce((acc, cur) => acc + cur);
  if (sum === 0) return [1, 6];
  // lottos === win_nums => return [1, 1]
  if (JSON.stringify(lottos) === JSON.stringify(win_nums)) return [1, 1];
  // 0의 개수 확인하고, zero 에 기록
  let zero = 0; // 0의 개수
  for (let i = 0; i < 6; i++) {
    if (lottos[i] === 0) zero++;
  }
  // lottos 랑 win_nums 비교해서 같은 숫자 개수 확인하고, count 에 기록
  let count = 0;
  for (let j = 0; j < 6; j++) {
    for (let k = 0; k < 6; k++) {
      if (lottos[j] !== 0 && lottos[j] === win_nums[k]) count++;
    }
  }
  let result = [0, 0];
  if (count + zero === 1) result = [0, 6];
  else if (count + zero === 2) result = [0, 5];
  else if (count + zero === 3) result = [0, 4];
  else if (count + zero === 4) result = [0, 3];
  else if (count + zero === 5) result = [0, 2];
  return result;

  // lottos 랑 win_nums 비교해서 같은 숫자 개수에 따라 최저 순위 결정
  // 0의 개수 + 일치하는 숫자 개수에 따라 순위 결정
  // 만약 같은 숫자가 1개이고, 0이 하나도 없으면 => return [6, 6]
}

//!다른분 코드
function solution(lottos, win_nums) {
  // ([구매한 로또 번호], [당첨번호])
  let answer = [];
  // lottos 랑 win_nums 비교해서 같은 숫자 개수
  const correct = lottos.filter((lotto) => win_nums.includes(lotto)).length;
  // 0 의 개수
  const zeros = lottos.filter((lotto) => lotto === 0).length;
  // 최저순위는 7에서 맞은 개수를 빼주면 된다.
  // 맞은 개수가 0개인 경우 7위가 되므로 7 - correct >= 6 이면 결과값 6을 가진다는 삼항연산자를 사용해준다.
  let min = 7 - correct >= 6 ? 6 : 7 - correct;
  // 최고순위는 최저순위에서 0의 개수를 빼주면 된다.
  // 모두 다 0인 경우 min 은 6, max 는 0이 되므로 min - zeros < 1 이면 결과값 1을 가진다는 삼항연산자를 사용해준다.
  let max = min - zeros < 1 ? 1 : min - zeros;

  answer = [max, min];
  return answer;
}
