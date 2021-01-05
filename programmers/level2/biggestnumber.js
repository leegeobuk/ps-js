console.log(solution([6, 10, 2]) === '6210');
console.log(solution([3, 30, 34, 5, 9]) === '9534330');

function solution(numbers) {
  const answer = numbers.sort((a, b) => `${b}${a}` - `${a}${b}`).join('');
  return answer[0] === '0' ? '0' : answer;
}