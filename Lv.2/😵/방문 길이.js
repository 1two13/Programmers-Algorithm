//! 다른 분 코드
const solution = (dirs) => {
  const set = new Set(); // 지나친 경로 배열(중복x)
  const [min, max] = [-5, 5]; // x, y좌표의 최소, 최대값
  let x = 0; // x좌표
  let y = 0; // y좌표
  let prev = ''; // 바뀌기전 경로

  for (let i = 0; i < dirs.length; i++) {
    prev = '' + x + y;
    if (dirs[i] === 'U' && y + 1 <= max) y++;
    else if (dirs[i] === 'D' && y - 1 >= min) y--;
    else if (dirs[i] === 'R' && x + 1 <= max) x++;
    else if (dirs[i] === 'L' && x - 1 >= min) x--;
    else continue;

    // 양방향 경로저장 [0, 0] => [0, 1] 로 이동 했다면 '0001', '0100'
    set.add(x + (y + prev));
    set.add(prev + x + y);
  }

  return set.size / 2;
};
