// 엄지손가락만 사용하여 숫자 입력
// 맨 처음 왼손 엄지손가락은 *에서 시작
// 맨 처음 오른손 엄지손가락은 #에서 시작

// 상하좌우 4가지 방향으로만 이동할 수 있고 한 칸은 거리로 1에 해당
// 1, 4, 7 => 왼손
// 3, 6, 9 => 오른손
// 2, 5, 8, 0 => 두 엄지손가락 중 현재 위치에서 더 가까운 손가락 사용
// 만약 거리가 같다면, 오른손 잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락 사용

//!나의 코드 (// 눌러야할 숫자가 2, 5, 8, 0 중의 한 숫자일 때 식을 못 세우겠다.)
function solution(numbers, hand) {
  // 순서대로 누를 번호가 담긴 배열, 오른손잡이인지 왼손잡이인지

  // 각 번호를 누른 손이 왼손인지 오른손인지 나타내는 연속된 문자열 ("L" 또는 "R")
  let answer = "";
  // 왼손 위치
  let leftPosition = "*";
  // 오른손 위치
  let rightPosition = "#";

  for (let i = 0; i < numbers.length; i++) {
    // 눌러야할 숫자가 1, 4, 7 중의 한 숫자라면
    if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
      // 해당 번호를 누른 손이 왼손임을 체크
      answer += "L";
      // 왼손 위치를 해당 숫자로 변경
      leftPosition = numbers[i];
      // 눌러야할 숫자가 3, 6, 9 중의 한 숫자라면
    } else if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
      // 해당 번호를 누른 손이 오른손임을 체크
      answer += "R";
      // 오른손 위치를 해당 숫자로 변경
      rightPosition = numbers[i];
      // 눌러야할 숫자가 2, 5, 8, 0 중의 한 숫자라면
    } else {
      let arr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        ["*", 0, "#"],
      ];
      let leftLine = 1;
      let rightLine = 1;
      let targetLine = 1;

      for (let j = 0; j < arr.length; j++) {
        if (arr[j].includes(leftPosition)) {
          leftLine = j + 1;
        }
        if (arr[j].includes(rightPosition)) {
          rightLine = j + 1;
        }
        if (arr[j].includes(numbers[i])) {
          targetLine = j + 1;
        }
      }

      if (targetLine === leftLine) answer += "L";
      else if (targetLine === rightLine) answer += "R";
      else if (hand === "right") answer += "R";
      else answer += "L";
    }
  }

  return answer;
}

//!다른 분 코드
// 위치를 찾아주는 함수
function findKey(key) {
  let keypad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      if (keypad[i][j] === key) return [i, j];
    }
  }
}

// 메인 함수
function solution(numbers, hand) {
  // 각 번호를 누른 손이 왼손인지 오른손인지 나타내는 연속된 문자열 ("L" 또는 "R")
  let answer = "";
  // 왼손이 누른 값
  let left = "*";
  // 오른손이 누른 값
  let right = "#";

  for (let i of numbers) {
    // 눌러야할 숫자가 1, 4, 7 중의 한 숫자라면
    if (i === 1 || i === 4 || i === 7) {
      // 해당 번호를 누른 손이 왼손임을 체크
      answer += "L";
      // 왼손 위치를 해당 숫자로 변경
      left = i;
      // 눌러야할 숫자가 3, 6, 9 중의 한 숫자라면
    } else if (i === 3 || i === 6 || i === 9) {
      // 해당 번호를 누른 손이 오른손임을 체크
      answer += "R";
      // 오른손 위치를 해당 숫자로 변경
      right = i;
    } else {
      // 손위치
      let l = findKey(left);
      let r = findKey(right);
      let middle = findKey(i);
      // console.log(l, r, middle);
      // 눌러야할 키패드 거리
      let ll = Math.abs(l[0] - middle[0]) + Math.abs(l[1] - middle[1]);
      let rr = Math.abs(r[0] - middle[0]) + Math.abs(r[1] - middle[1]);
      // console.log(ll, rr);

      // 거리가 같다면
      if (rr === ll) {
        // 오른손잡이 -> 'R', 왼손잡이 -> 'L'
        hand === "right"
          ? ((right = i), (answer += "R"))
          : ((left = i), (answer += "L"));
        // 오른손의 거리가 더 멀다면
      } else if (rr > ll) {
        answer += "L";
        left = i;
        // 왼손의 거리가 더 멀다면
      } else {
        answer += "R";
        right = i;
      }
    }
  }

  return answer;
}
