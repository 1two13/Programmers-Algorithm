// 처음에 캐릭터는 (1,1), 상대방은 (n, m)에 위치
// 0은 벽이 있는, 1은 벽이 없는

//!나의 코드
function solution(maps) {
  let answer = 0; // 캐릭터가 상대 팀 진영에 도착하기 위해 지나가야 하는 칸의 개수의 최솟값
  let n = maps.length; // maps의 가로 길이
  let m = maps[0].length; // maps의 세로 길이

  // 상대팀이 자신의 팀 진영 주위에 벽을 두었다면 -1 리턴
  if (maps[n - 2][m - 1] === 0 && maps[n - 1][m - 2] === 0) return -1;

  return answer;
}

//!다른 분 코드(BFS)
// 상 우 하 좌
const DIRECTION = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];

// 사용이 가능한 길인지 확인하는 함수
const isRoad = (nextY, nextX, row, col) => nextY < 0 || nextX < 0 || nextY > row || nextX > col;

// BFS 활용
function solution(maps) {
  const row = maps.length - 1,
    col = maps[0].length - 1;

  // 큐 - 시작 위치 y, x, 이동 거리
  const queue = [[0, 0, 1]];

  while (queue.length) {
    // 큐 추출
    let [y, x, count] = queue.shift();
    // 상대 팀 진영이라면
    if (y === row && x === col) return count;
    // 동서남북 확인
    for (let i = 0; i < 4; i++) {
      const [dy, dx] = DIRECTION[i];
      const nextY = dy + y,
        nextX = dx + x;
      // 맵 밖으로 나간다면
      if (isRoad(nextY, nextX, row, col)) continue;
      // 도착한 곳이 벽이라면
      if (maps[nextY][nextX] === 0) continue;
      // 이미 지난 곳 벽으로 만들어서 다음에 접근 방지
      maps[nextY][nextX] = 0;
      // 다음에 확인해야하는 곳 큐에 추가
      // 갈수 있는 곳이 두 곳이라면 두 곳 추가됨
      queue.push([nextY, nextX, count + 1]);
    }
  }

  return -1;
}

function solution(maps) {
  var yLen = maps.length - 1;
  var xLen = maps[0].length - 1;

  var queue = [[0, 0]];

  var visited = Array.from(new Array(maps.length), () => new Array(maps[0].length).fill(false));

  var result = 0;

  while (queue.length) {
    result++;
    var size = queue.length;
    for (var i = 0; i < size; i++) {
      var point = queue.shift();
      var curY = point[0];
      var curX = point[1];

      if (visited[curY][curX]) continue;

      maps[curY][curX] = 0;

      visited[curY][curX] = true;

      if (curY === yLen && curX === xLen) return result;

      if (curY < yLen && maps[curY + 1][curX] === 1) queue.push([curY + 1, curX]);
      if (curX < xLen && maps[curY][curX + 1] === 1) queue.push([curY, curX + 1]);
      if (curY > 0 && maps[curY - 1][curX] === 1) queue.push([curY - 1, curX]);
      if (curX > 0 && maps[curY][curX - 1] === 1) queue.push([curY, curX - 1]);
    }
  }

  return -1;
}
