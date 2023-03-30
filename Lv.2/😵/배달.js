// a와 b를 잇는 도로가 여러 개 있을 수도 있음
//!다른 분 코드
function solution(N, road, K) {
  const dist = Array(N + 1).fill(Infinity); // 노드별 거리를 무한으로 하는 배열 생성
  const adj = Array.from({ length: N + 1 }, () => []); // 인접한 노드별 가중치의 정보를 담고 있는 배열 생성
  // 인접한 노드별 가중치의 정보를 담고 있는 배열에 데이터 추가
  road.forEach(([a, b, c]) => {
    adj[a].push({ to: b, time: c });
    adj[b].push({ to: a, time: c });
  });

  // 1번 마을에서부터 우선순위 큐 시작
  const pq = [{ to: 1, time: 0 }];
  // 초기값 할당
  dist[1] = 0;

  // 우선순위 큐 배열에 값이 없을 때까지 반복
  while (pq.length) {
    let { to, time } = pq.pop();
    // 연결된 노드에서의 값이 현재의 값 + 해당 노드의 가중치보다 클 경우, 값을 대체하고 우선순위 큐에 데이터 추가
    adj[to].forEach((next) => {
      if (dist[next.to] > dist[to] + next.time) {
        dist[next.to] = dist[to] + next.time;
        pq.push(next);
      }
    });
  }

  // K이하의 시간에 배달되는 값 filter
  return dist.filter((item) => item <= K).length;
}
