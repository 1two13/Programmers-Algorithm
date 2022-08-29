//!나의 코드
function solution(nums) {
  // [N마리 폰켓몬 종류 번호...]
  // nums 배열에서 중복되는 수는 제외하고 새로운 배열 만들기
  let newArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (!newArr.includes(nums[i])) {
      newArr.push(nums[i]);
    }
  }
  // 근데 만약 newArr.length > nums.length / 2 라면 => nums.length / 2 값 리턴하기
  // 아니라면 새로운 배열의 length가 최대값
  return newArr.length > nums.length / 2 ? nums.length / 2 : newArr.length;
}

//!다른 분 코드
function solution(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];

  return arr.length > max ? max : arr.length;
}
