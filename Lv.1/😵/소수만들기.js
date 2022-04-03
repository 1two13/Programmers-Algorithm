/* 
!문제 설명
주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 
숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 
소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

!제한사항
nums에 들어있는 숫자의 개수는 3개 이상 50개 이하입니다.
nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 중복된 숫자가 들어있지 않습니다.

!입출력 예
nums	result
[1,2,3,4]	1
[1,2,7,6,4]	4

!입출력 예 설명
입출력 예 #1
[1,2,4]를 이용해서 7을 만들 수 있습니다.

입출력 예 #2
[1,2,4]를 이용해서 7을 만들 수 있습니다.
[1,4,6]을 이용해서 11을 만들 수 있습니다.
[2,4,7]을 이용해서 13을 만들 수 있습니다.
[4,6,7]을 이용해서 17을 만들 수 있습니다.
*/

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
			arr.map(num => {
				 for(let i = 2; i < num / 2; i++) {
						 if(num % i === 0) return; // 소수가 아니라면 바로 return 
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
	const addedList = combinations.map(combination => combination.reduce((acc, cur) => acc + cur));
	primeCount(addedList);
	
	return answer;
}
