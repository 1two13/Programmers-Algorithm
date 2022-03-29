/* 
!문제 설명
어떤 정수들이 있습니다. 
이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 
실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

!제한사항
absolutes의 길이는 1 이상 1,000 이하입니다.
absolutes의 모든 수는 각각 1 이상 1,000 이하입니다.
signs의 길이는 absolutes의 길이와 같습니다.
signs[i] 가 참이면 absolutes[i] 의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미합니다.

!입출력 예
absolutes	signs	result
[4,7,12]	[true,false,true]	9
[1,2,3]	[false,false,true]	0

!입출력 예 설명
입출력 예 #1
signs가 [true,false,true] 이므로, 실제 수들의 값은 각각 4, -7, 12입니다.
따라서 세 수의 합인 9를 return 해야 합니다.

입출력 예 #2
signs가 [false,false,true] 이므로, 실제 수들의 값은 각각 -1, -2, 3입니다.
따라서 세 수의 합인 0을 return 해야 합니다.
*/

//!나의 코드
function solution(absolutes, signs) { // ([절대값 정수, ...], [true 또는 false...])
	let result = 0;
	// 반복문
	for(let i = 0; i < signs.length; i++) {
		// signs 의 n 번째가 true 면 absolutes 의 n 번째는 그대로 리턴
		if(signs[i] === true) result = result + absolutes[i];
		// signs 의 n 번째가 false 면 absolutes 의 n 번째는 - 붙이고 리턴
		else result = result -(absolutes[i]);
	}
	return result;
};

//!다른 분 코드
function solution(absolutes, signs) {
	// 최초값은 0
	// 누적값(acc) 에 현재값을 더해주는 식 구현
	// 현재값을 더해주는 식은 현재값에 sign[i]가 true 면 1을 false 이면 -1 을 곱해주는 삼항 연산자 사용
  return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}

//!다른 분 코드
function solution(absolutes, signs) {
	let answer = 0;
	// 배열요소 각각에 대해 실행하는 forEach 사용
	// forEach 의 1번째 요소(v)는 absolutes[0], absolutes[1]... 이고, 2번째 요소(i) 는 처리할 현재 요소의 인덱스  
	absolutes.forEach((v, i) => {
		if (signs[i]) answer += v;
		else answer -= v;
	});
	return answer;
};