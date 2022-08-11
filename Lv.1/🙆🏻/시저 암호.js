// A ~ Z 는 65 ~ 90
// a ~ z 는 97 ~ 122

//!나의 코드
function solution(s, n) {
  // s(문자열)를 n(거리)만큼 민 암호문
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    let num = s.charCodeAt(i);
    let sum = num + n;
    // console.log(sum);

    // 공백은 아무리 밀어도 공백
    if (num === 32) {
      answer += String.fromCharCode(num);
    }

    // 소문자 => num + n이 122 보다 크면
    else if (sum > 122) {
      answer += String.fromCharCode(sum - 122 + 96);
    }
    // sum이 97이상 이거나 122이하 이면서 소문자일 때
    else if (sum >= 97 && sum <= 122 && s[i].toLowerCase() === s[i]) {
      answer += String.fromCharCode(sum);
    }

    // sum이 65이상 이거나 90이하 이면서 대문자일 때
    else if (sum >= 65 && sum <= 90 && s[i].toUpperCase() === s[i]) {
      answer += String.fromCharCode(sum);
    }
    // 대문자 => num + n이 90보다 크고 97보다 작으면
    else answer += String.fromCharCode(sum - 90 + 64);
  }

  return answer;
}

//!다른 분 코드
function solution(s, n) {
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lower = "abcdefghijklmnopqrstuvwxyz";
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    let text = s[i];

    if (text == " ") {
      answer += " ";
      continue;
    }

    let textArr = upper.includes(text) ? upper : lower;
    let index = textArr.indexOf(text) + n;

    if (index >= textArr.length) index -= textArr.length;
    answer += textArr[index];
  }

  return answer;
}
