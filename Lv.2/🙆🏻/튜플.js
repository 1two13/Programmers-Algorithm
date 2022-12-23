//!나의 코드
function hasProperty(s) {
  let result = {};
  s = s.replace(/\{/g, '');
  s = s.replace(/\}/g, '');
  s = s.split(',').map(Number);

  for (let i = 0; i < s.length; i++) {
    const number = s[i];
    if (result.hasOwnProperty(number)) result[number] += 1;
    else result[number] = 1;
  }

  return result;
}

function sortable(obj) {
  let result = [];
  for (let key in obj) {
    result.push([key, obj[key]]);
  }

  result.sort(function (a, b) {
    return b[1] - a[1];
  });

  return result;
}

function solution(s) {
  let result = [];
  const obj = hasProperty(s);
  const sortArray = sortable(obj);

  sortArray.forEach((arr) => result.push(Number(arr[0])));

  return result;
}

//!다른 분 코드
function solution(s) {
  let answer = [];
  let newArr = JSON.parse(s.replace(/{/g, '[').replace(/}/g, ']')); // 이중 배열

  newArr.sort((a, b) => a.length - b.length);

  let temp = [];
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr[i].length; j++) {
      temp.push(newArr[i][j]);
    }
  }

  answer = [...new Set(temp)];
  return answer;
}
