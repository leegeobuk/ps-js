const arrangement = '()(((()())(())()))(())';
console.log(solution(arrangement) === 17);
console.log(solution(arrangement));

function solution(arrangement) {
  let answer = 0;
  let count = 0;
  const array = arrangement.replace(/\(\)/g, 'O').split('');
  array.forEach(value => {
    if (value === '(') {
      count++;
    }
    else if (value === 'O') {
      answer += count;
    }
    else {
      answer++;
      count--;
    }
  });
  return answer;
}