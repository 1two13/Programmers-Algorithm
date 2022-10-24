// LRU (가장 오랫동안 참조되지 않은 페이지를 교체)
// cache hit (캐시 안에 찾고자 하는 도시가 있을 때)
// cache miss (캐시 안에 찾고자 하는 도시가 없을 때)

//!나의 코드
// LRU 그게 뭔데...

//!다른 분 코드
function solution(cacheSize, cities) {
  // 총 실행시간
  let answer = 0;
  let arr = [];

  // 1. 도시를 모두 소문자로 통일시키기
  cities = cities.map((el) => el.toLowerCase());

  // 2. cacheSize가 0이면 모든게 cache miss 이므로 *5로 리턴
  if (cacheSize === 0) return cities.length * 5;

  // 배열을 순회하며
  for (let i = 0; i < cities.length; i++) {
    // 만족하는 요소가 없을 때 -1 반환
    const idx = arr.findIndex((el) => el === cities[i]);
    // 캐시 안에 찾고자 하는 도시가 있을 때(cache hit)
    if (idx !== -1) {
      // [idx]
      arr.splice(idx, 1);
      // cache hit
      answer += 1;
      // 배열이 꽉 찾을 때
    } else if (arr.length === cacheSize) {
      // 배열 맨 앞 제거
      arr.shift();
      // cache miss
      answer += 5;
      // 캐시 안에 찾고자 하는 도시가 없을 때(cache miss)
    } else {
      answer += 5;
    }

    // 배열의 맨 뒤로 push
    arr.push(cities[i]);
  }

  return answer;
}

//!다른 분 코드
function solution(cacheSize, cities) {
  const MISS = 5,
    HIT = 1;

  if (cacheSize === 0) return MISS * cities.length;

  let answer = 0,
    cache = [];

  // cities 배열 순회
  cities.forEach((city) => {
    city = city.toUpperCase();

    let idx = cache.indexOf(city);

    // cache hit
    if (idx > -1) {
      cache.splice(idx, 1);
      answer += HIT;
      // cache miss
    } else {
      // 만약 배열이 꽉 찾다면 배열 맨 앞 요소 제거
      if (cache.length >= cacheSize) cache.shift();
      answer += MISS;
    }
    // cache 배열의 맨 뒤에 push
    cache.push(city);
  });

  return answer;
}

cacheSize = 2;
cities = ["Jeju", "Pangyo", "NewYork", "newyork"];
answer = 16;
