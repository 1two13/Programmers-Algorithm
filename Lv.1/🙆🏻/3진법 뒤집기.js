//!나의 코드
function solution(n) {
	// 1. n을 3진법으로 바꾸기 => n.toString(3) // 1200
	let str = n.toString(3);
	// 2. 앞뒤 반전 => 문자열.split("").reverse().join(""); // "0021"
	let newStr = str.split("").reverse().join("");
	// 3. return parseInt("문자열", 3)
	return parseInt(newStr, 3);
}

//!다른 분 코드
function solution(n) {
	return parseInt(n.toString(3).split('').reverse().join(''), 3);
}