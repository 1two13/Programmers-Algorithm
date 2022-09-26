// * 공백문자가 연속해서 나올 수 있음.

//!나의 코드
function solution(s) {
  let answer = "";
  // s를 공백기준으로 split
  let arrS = s.split(" ");

  // arrS를 반복문으로 돌면서
  for (let i = 0; i < arrS.length; i++) {
    // arrS[i]가 빈 문자열이 아니고,
    if (arrS[i] !== "") {
      // 첫 문자가 알파벳이면
      if (isNaN(Number(arrS[i][0]))) {
        // 모든 단어의 첫 문자는 대문자로
        arrS[i] = arrS[i][0].toUpperCase() + arrS[i].slice(1).toLowerCase();
        // 만약 첫 문자가 알파벳이 아니면 이어지는 알파벳은 소문자로
      } else arrS[i] = arrS[i][0] + arrS[i].slice(1).toLowerCase();
      // arrS[i]가 빈 문자열이면
    } else arrS[i] = "";

    // 조건대로 바꾼 값에 빈 문자열 더하기
    answer += arrS[i] + " ";
  }

  // 맨 뒤에 있는 빈 문자열 한개만 제거하기
  return answer.slice(0, -1);
}

//!다른 분 코드
function solution(s) {
  return (
    s
      .split(" ")
      // 0번째에 해당하는 값은 대문자로, 1번째부터 끝까지 소문자로
      .map((v) => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase())
      .join(" ")
  );
}
