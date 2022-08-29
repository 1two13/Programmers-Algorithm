// 어떻게 방향성을 잡아야할지 감이 안잡혀서 답지 오픈

//!다른 분 코드
function solution(sizes) {
  // 모든 명함의 가로, 세로길이를 나타내는 2차원 배열 [[w, h]...]

  // w가 h보다 작으면 두개를 바꾸기
  const rotated = sizes.map(([w, h]) => (w < h ? [h, w] : [w, h]));
  let maxSize = [0, 0];

  rotated.forEach(([w, h]) => {
    if (w > maxSize[0]) maxSize[0] = w;
    if (h > maxSize[1]) maxSize[1] = h;
  });

  return maxSize[0] * maxSize[1];
}
