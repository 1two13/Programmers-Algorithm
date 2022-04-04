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