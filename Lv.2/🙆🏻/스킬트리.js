//! 나의 코드(78.6점)
// 선행 스킬 순서, 유저가 스킬을 배울 순서
function solution(skill, skill_trees) {
  // 가능한 스킬 트리 개수
  let answer = 0;

  for (let i = 0; i < skill_trees.length; i++) {
    let el = skill_trees[i];
    let skillIdx = 0;

    for (let j = 0; j < el.length; j++) {
      // skill이 el[j]를 포함하고 있다면
      if (skill.includes(el[j])) {
        // skill[skillIdx]랑 el[j]랑 같은지 비교
        if (el[j] === skill[skillIdx]) {
          // 같으면 skillIdx 증가
          skillIdx++;
        } else break;
      }
      if (j === el.length - 1) answer++;
      else continue;
    }
  }

  return answer;
}

//! 다른 분 코드
function solution(skill, skill_trees) {
  function isCorrect(n) {
    console.log(n); // skill_trees 각각의 요소
    let test = skill.split('');

    for (let i = 0; i < n.length; i++) {
      if (!skill.includes(n[i])) continue;
      if (n[i] === test.shift()) continue;
      return false;
    }

    return true;
  }

  return skill_trees.filter(isCorrect).length;
}
