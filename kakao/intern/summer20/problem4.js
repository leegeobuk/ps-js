console.log(solution([2,2,2,2,2,2,3,5,8]) === 5);

function solution(weights) {
  if (weights.length === 1) {
    return 1;
  }
  if (!canBuildBST(weights)) {
    return 1;
  }
  let answer = 0;
  return answer;
}

function canBuildBST(weights) {
  if (hasDuplicate(weights)) {
    return false;
  }
  return true;
}

function hasDuplicate(weights) {
  weights.sort((a, b) => a - b);
  for (let i = 0; i < weights.length-1; i++) {
    if (weights[i] === weights[i+1]) {
      return true;
    }
  }
  return false;
}