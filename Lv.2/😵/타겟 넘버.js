/* 
!문제 설명
n개의 음이 아닌 정수들이 있습니다. 이 정수들을 순서를 바꾸지 않고 적절히 더하거나 빼서 타겟 넘버를 만들려고 합니다. 
예를 들어 [1, 1, 1, 1, 1]로 숫자 3을 만들려면 다음 다섯 방법을 쓸 수 있습니다.

-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3
사용할 수 있는 숫자가 담긴 배열 numbers, 
타겟 넘버 target이 매개변수로 주어질 때 숫자를 적절히 더하고 빼서 타겟 넘버를 만드는 방법의 수를 return 하도록 solution 함수를 작성해주세요.

!제한사항
주어지는 숫자의 개수는 2개 이상 20개 이하입니다.
각 숫자는 1 이상 50 이하인 자연수입니다.
타겟 넘버는 1 이상 1000 이하인 자연수입니다.

!입출력 예
numbers	target	return
[1, 1, 1, 1, 1]	3	5
[4, 1, 2, 1]	4	2

!입출력 예 설명
입출력 예 #1
문제 예시와 같습니다.

입출력 예 #2
+4+1-2+1 = 4
+4-1+2-1 = 4
총 2가지 방법이 있으므로, 2를 return 합니다.
*/

//!나의 코드
// DFS 로 푸는것은 맞는거 같은데! 재귀로 못 돌리겠다..
// 하기 코드는 정답코드가 아님. 
function solution(numbers, target) { // ([], 숫자)
	let count = 0;
	let result = 0;
	
	for(let i = 0; i < numbers.length; i++) {
		// 종료조건
		// 위 과정을 반복해서 돌았을 때 결과가 target 과 같다면 count++ 
		if(result === target) count++
		// numbers의 요소가 target 보다 크거나 같다면 numbers 요소에 + 붙이기
		if(numbers[i] >= target) {
				result = result + numbers[i]
		// numbers의 요소가 target 보다 작다면 numbers 요소에 - 붙이기
		} else if (numbers[i] < target) {
				result = result -(numbers[i]);
		};
	};
	// return numbers를 이용해서 target을 만드는 경우의 수 
	return count;
}

//!다른 분 코드
function solution(numbers, target) { // ([], 숫자)
	let answer = 0;
	
	dfs(0, 0);
	
	function dfs(index, sum) {
		if(index === numbers.length) {
			if(sum === target) {
					answer++
			}
			return;
		}
		
		dfs(index + 1, sum + numbers[index]);
		dfs(index + 1, sum - numbers[index]);
	}

	return answer;
}