// 보트에 최대 2명 탑승 가능 + 무게 제한
//!다른 분 코드
function solution(people, limit) {
  // 내림차순 정렬(작은 => 큰)
  people.sort((a, b) => a - b);
  // console.log(people)

  let i = 0;
  for (j = people.length - 1; i < j; j--) {
    // 제일 작은 수와 제일 큰 수 더한 값이 limit보다 작거나 같으면
    // 그 다음으로 작은 값과 그 다음으로 큰 값 더하고...
    if (people[i] + people[j] <= limit) i++;
  }

  return people.length - i;
}
