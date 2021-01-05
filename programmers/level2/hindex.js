console.log(solution([3, 0, 6, 1, 5]) === 3);
console.log(solution([100,8,1,7,5,4,3,2,0]) === 4);

function solution(citations) {
  let answer = 0;
  for (let i = citations.length; i >= 0; i--) {
    if (findGreaterOrEqual(citations, i) >= i) {
      answer = i;
      break;
    }
  }
  return answer;
}

function findGreaterOrEqual(citations, num) {
  let count = 0;
  citations.forEach(val => {
    if (val >= num) {
      count++;
    }
  });
  return count;
}