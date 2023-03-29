//!나의 코드(테케만 통과)
function solution(numbers) {
  let answer = [];

  for (let i = 0; i < numbers.length; i++) {
    let count = 4;
    let number = numbers[i]; // 2
    let binary = number.toString(2); // '10'
    // 2진수로 변환 시 길이 4에 맞추기
    while (binary.length < 4) {
      binary = 0 + binary; // '0010'
    }
    while (count > 3) {
      number++;
      let anotherBinary = number.toString(2);
      while (anotherBinary.length < 4) {
        anotherBinary = 0 + anotherBinary;
      }
      // binary랑 anotherBinary 각 자리수 비교해서 다른 비트의 개수 세기
      for (let i = 0; i < 4; i++) {
        if (binary[i] !== anotherBinary[i]) count -= 1;
      }
      if (count >= 2) answer.push(number);
      else count = 4;
    }
  }

  return answer;
}

//!다른분 코드(아직 이해 못했다.)
function solution(numbers) {
  let answer = [];

  numbers.forEach((v) => {
    // number가 짝수일 때
    if (v < 2 || v % 2 === 0) answer.push(v + 1);
    // number가 홀수일 때
    else {
      let c = 2;
      while (true) {
        if ((v + 1) % (c * 2) === 0) c = c * 2;
        else break;
      }
      answer.push(v + c / 2);
    }
  });

  return answer;
}
