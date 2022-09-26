//!나의 코드
function solution(s) {
  // 빈칸 기준으로 split해서 배열에 담기 (s가 2자리 수일때 방지)
  let arrayS = s.split(" ");

  return Math.min(...arrayS) + " " + Math.max(...arrayS);
}
