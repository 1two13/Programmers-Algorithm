//!나의 코드
// 뽑은 3개의 수를 더했을 때 소수라면 => answer++
// 소수가 아니라면 따로 + 하지 않기
// return answer;

// nums 중에서 서로 다른 3개를 뽑는 경우 구하기 => 조합
// 하나의 수를 선택한다.
// 남은 배열에서 2개를 선택한다.
// 위 과정 반복

//!다른 분 코드
function solution(nums) {
  let answer = 0;
  // 소수인지 확인하는 함수
  const primeCount = (arr) => {
    arr.map((num) => {
      for (let i = 2; i < num / 2; i++) {
        if (num % i === 0) return; // 소수가 아니라면 바로 return
      }
      answer++; // 소수라면 answer 값 증가
    });
  };

  // 조합 구하는 공식
  const getCombinations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]);

    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);
      const combinations = getCombinations(rest, selectNumber - 1);
      const attached = combinations.map((el) => [fixed, ...el]);
      results.push(...attached);
    });

    return results;
  };

  const combinations = getCombinations(nums, 3);
  const addedList = combinations.map((combination) =>
    combination.reduce((acc, cur) => acc + cur)
  );
  primeCount(addedList);

  return answer;
}
