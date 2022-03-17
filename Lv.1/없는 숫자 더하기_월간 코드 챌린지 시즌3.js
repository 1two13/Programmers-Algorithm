**문제 설명**
0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다.
numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.


**제한사항**
1 ≤ numbers의 길이 ≤ 9
0 ≤ numbers의 모든 원소 ≤ 9
numbers의 모든 원소는 서로 다릅니다.


**입출력 예**
numbers	result
[1,2,3,4,6,7,8,0]	14
[5,8,4,0,6,7,9]	6


**입출력 예 설명**
입출력 예 #1

5, 9가 numbers에 없으므로, 5 + 9 = 14를 return 해야 합니다.
입출력 예 #2

1, 2, 3이 numbers에 없으므로, 1 + 2 + 3 = 6을 return 해야 합니다.


✅ 나의 코드 ✅
function solution(numbers) { // []
	let sum = 0;
	// numbers 요소 모두 더하기
	for(let i = 0; i < numbers.length; i++) {
			sum = sum + numbers[i];
	}
	// (1 ~ 9 까지 더한 값 = 45) - (numbers 요소 모두 더한 값)
	return 45 - sum;
}


✅ 다른분 코드 ✅
function solution(numbers) {
  return 45 - numbers.reduce((acc, cur) => acc + cur, 0);
}