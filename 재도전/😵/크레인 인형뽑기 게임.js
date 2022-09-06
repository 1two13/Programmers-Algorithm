// 바구니에 같은 모양의 인형 두개가 연속해서 쌓이면 모두 바구니에서 사라짐
// 인형이 없는 곳에서 크레인을 작동시키면 아무일도 일어나지 않음
// 바구니는 모든 인형을 넣을 수 있는 크기

// board의 0은 빈칸
// board의 같은 숫자는 같은 모양의 인형
// 가로 세로 길이는 board.length (가로, 세로 길이 같음)

//!나의 코드
function solution(board, moves) {
  // 2차원 배열, 크레인을 작동시킨 위치가 담긴 배열

  // 뽑은 인형을 담는 바구니
  let basket = [];

  // moves.length만큼 반복문으로 돌면서 뽑은 인형을 basket에 담기
  for (let i = 0; i < moves.length; i++) {
    // i는 0, 1, 2, 3, 4, 5, 6, 7
    for (let j = 0; j < board.length; j++) {
      // 0보다 값이 크다면 basket에 해당 값을 담고,
      if (board[j][moves[i] - 1] > 0) {
        basket.push(board[j][moves[i] - 1]);
        // 확인한 값은 0으로 바꾸기
        board[j][moves[i] - 1] = 0;

        break;
      }
      // 0이라면 j 증가
      else continue;
    }
  }
  // console.log(basket) // [4, 3, 1, 1, 3, 2, 4]

  // basket 복제
  let original = [...basket];

  // 재귀와 반복문을 사용해 연속되는 숫자 제거하기
  function removeDuplicate(basket) {
    for (let i = 0; i < basket.length - 1; i++) {
      // 연속되는 같은 숫자가 있다면
      if (basket[i] === basket[i + 1]) {
        // basket[i]부터 2개의 숫자 제거, 즉 같은 숫자 제거
        basket.splice(i, 2);
        // 재귀로 위의 과정 반복하기
        removeDuplicate(basket);
        break;
      }
    }
  }
  // removeDuplicate 함수 실행
  removeDuplicate(basket);

  // 크레인을 모두 작동시킨 후 터트려서 사라진 인형 개수
  return original.length - basket.length;
}
