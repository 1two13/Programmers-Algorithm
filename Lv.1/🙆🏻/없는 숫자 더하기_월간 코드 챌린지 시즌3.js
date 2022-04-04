//!나의 코드
function solution(numbers) { // []
	let sum = 0;
	// numbers 요소 모두 더하기
	for(let i = 0; i < numbers.length; i++) {
			sum = sum + numbers[i];
	}
	// (1 ~ 9 까지 더한 값 = 45) - (numbers 요소 모두 더한 값)
	return 45 - sum;
}

//!다른분 코드
function solution(numbers) {
  return 45 - numbers.reduce((acc, cur) => acc + cur, 0);
}