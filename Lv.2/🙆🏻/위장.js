/*
하루에 최소 한 개의 의상은 입는다.
같은 이름을 가진 의상은 없다.
*/

// 옷의 종류가 3가지고 각각의 옷의 개수가 a, b, c라면 (x+a)(x+b)(x+c) = x3 + (a+b+c)x2 + (ab+bc+ca)x + (abc)라는 식이 정립된다.
// 해당 식의 합을 구하려면 x = 1을 대입하면 된다. 이 때, 맨 앞 x3은 정답에 포함되지 않으므로 1을 빼준다.(아무것도 안 입었을 때)

//!나의 코드
function getCountArray(clothes) {
  let obj = {};
  for (let i = 0; i < clothes.length; i++) {
    if (obj.hasOwnProperty(clothes[i][1])) obj[clothes[i][1]] += 1;
    else obj[clothes[i][1]] = 1;
  }

  return Object.values(obj);
}

function solution(clothes) {
  let answer = 1;
  const countArray = getCountArray(clothes);

  for (let i = 0; i < countArray.length; i++) {
    answer *= 1 + countArray[i];
  }

  return answer - 1;
}

//!다른 분 코드
function solution(clothes) {
  return (
    Object.values(
      clothes.reduce((obj, t) => {
        obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1;
        return obj;
      }, {})
    ).reduce((a, b) => a * (b + 1), 1) - 1
  );
}

//!다른 분 코드
function solution(clothes) {
  let answer = 1;
  const obj = {};

  for (let arr of clothes) {
    obj[arr[1]] = (obj[arr[1]] || 0) + 1;
  }

  for (let key in obj) {
    answer *= obj[key] + 1;
  }

  return answer - 1;
}
