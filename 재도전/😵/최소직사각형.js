//!나의 코드
// 어떻게 방향성을 잡아야할지 모르겠다.

//!다른 분 코드
function solution(sizes) {
  // w가 h보다 작으면 두개를 바꾸기
  const rotated = sizes.map(([w, h]) => (w < h ? [h, w] : [w, h]));
  let maxSize = [0, 0];

  rotated.forEach(([w, h]) => {
    if (w > maxSize[0]) maxSize[0] = w;
    if (h > maxSize[1]) maxSize[1] = h;
  });

  return maxSize[0] * maxSize[1]; // 모든 명함을 수납할 수 있는 가장 작은 크기
}
