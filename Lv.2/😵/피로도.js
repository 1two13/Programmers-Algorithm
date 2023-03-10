//!나의 코드
// 최소 필요 피로도(게임 시작 전 필요)
// 소모 피로도(끝났을 때 소모)

//!다른 분 코드
function solution(k, dungeons) {
  let answer = -1;
  const dfs = (k, dungeons, prev) => {
    for (let i = 0; i < dungeons.length; i++) {
      const [req, use] = dungeons[i];
      if (!req || req > k) continue;
      const copy = [...dungeons].map((v) => [...v]);
      copy[i] = [null, null];
      dfs(k - use, copy, prev + 1);
    }
    return (answer = Math.max(prev, answer));
  };
  dfs(k, dungeons, 0);
  return answer;
}

//!다른 분 코드
function solution(k, dungeons) {
  const N = dungeons.length;
  const visited = new Array(N).fill(0);
  let ans = 0;

  function dfs(k, cnt) {
    ans = Math.max(cnt, ans);

    for (let j = 0; j < N; j++) {
      if (k >= dungeons[j][0] && !visited[j]) {
        visited[j] = 1;
        dfs(k - dungeons[j][1], cnt + 1);
        visited[j] = 0;
      }
    }
  }

  dfs(k, 0);
  return ans;
}
