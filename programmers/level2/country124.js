console.log(solution(1) === '1');
console.log(solution(2) === '2');
console.log(solution(3) === '4');
console.log(solution(4) === '11');

function solution(n) {
  const nums = [4, 1, 2];
  let answer = '';
  while (n > 0) {
    answer = nums[n % 3] + answer;
    n = Math.floor((n-1) / 3);
  }
  return answer;
}