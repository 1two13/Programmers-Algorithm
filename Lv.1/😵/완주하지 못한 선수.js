//!나의 코드
// 테스트는 통과하지만 정확성 10점, 효율성 0점
function solution(participant, completion) { // ([참여선수이름...], [완주선수이름...])
	for(let i = 0; i < participant.length; i++) {
		// 만약 completion이 participant 요소를 포함하지 않는다면 => 포함하지 않는 요소 return  
		if(!completion.includes(participant[i])) return participant[i];
		// 만약 completion 요소가 participant 에 모두 포함된다면 
		// participant 요소 중에 중복되는 요소가 있는지 확인하고 해당 중복요소 return 하기
		let newArr = participant.slice(i+1);
		if(newArr.indexOf(participant[i]) !== -1) return participant[i];
	}
}

//!다른 분 코드
// 이렇게 쉬운 방법이 있었는데..! 헉 한다. 
// sort 로 정렬하는게 핵심!
function solution(participant, completion) { 
	// 참가자 배열 정렬
	participant.sort();
	// 완주자 배열 정렬
	completion.sort();
	
	for(let i = 0; i < participant.length; i++) {
		if(participant[i] !== completion[i]) return participant[i];
	}
}