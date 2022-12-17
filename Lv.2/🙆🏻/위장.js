//!나의 코드
function getValues(clothes) {
  let obj = {};
  for (let i = 0; i < clothes.length; i++) {
    const type = clothes[i][1];
    if (obj.hasOwnProperty(type)) obj[type] += 1;
    else obj[type] = 1;
  }

  return Object.values(obj);
}

function solution(clothes) {
  const values = getValues(clothes);
  const answer = values.reduce((a, b) => a * (1 + b), 1);

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
