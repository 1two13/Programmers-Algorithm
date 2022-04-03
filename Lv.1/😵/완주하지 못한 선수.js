/* 
!문제 설명
수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 
완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

!제한사항
마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
completion의 길이는 participant의 길이보다 1 작습니다.
참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
참가자 중에는 동명이인이 있을 수 있습니다.

!입출력 예
participant	completion	return
["leo", "kiki", "eden"]	["eden", "kiki"]	"leo"
["marina", "josipa", "nikola", "vinko", "filipa"]	["josipa", "filipa", "marina", "nikola"]	"vinko"
["mislav", "stanko", "mislav", "ana"]	["stanko", "ana", "mislav"]	"mislav"

!입출력 예 설명
예제 #1
"leo"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

예제 #2
"vinko"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

예제 #3
"mislav"는 참여자 명단에는 두 명이 있지만, 완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.
*/

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