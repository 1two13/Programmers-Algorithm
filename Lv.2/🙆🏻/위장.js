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
