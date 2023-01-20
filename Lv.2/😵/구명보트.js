//!나의 코드(35.0점)
function solution(people, limit) {
  // 구명보트 개수의 최솟값
  let answer = 0;
  people.sort((a, b) => b - a);

  while (people.length > 0) {
    let rest = limit - people[0];
    let arr = people.filter((value) => value <= rest);

    if (arr.length !== 0) {
      for (let i = 1; i < people.length; i++) {
        if (rest >= people[i]) people.splice(i, 1);
      }
    }
    answer++;
    people.shift();
  }

  return answer;
}

//!다른 분 코드
function solution(people, limit) {
  // 내림차순 정렬(작은 => 큰)
  people.sort((a, b) => a - b);

  let i = 0;
  for (j = people.length - 1; i < j; j--) {
    // 제일 작은 수와 제일 큰 수 더한 값이 limit보다 작거나 같으면
    // 그 다음으로 작은 값과 그 다음으로 큰 값 더하고...
    if (people[i] + people[j] <= limit) i++;
  }

  return people.length - i;
}
