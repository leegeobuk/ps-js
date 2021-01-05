const Arrays = require('../../util/Arrays');

console.log(Arrays.equals(solution([93,30,55], [1,30,5]), [2,1]));
console.log(solution([93,30,55], [1,30,5]));

function solution(progresses, speeds) {
  const answer = [1];
  let days = progresses.map((progress, i) => calculate(progress, speeds[i]));

  let max = days.shift();
  days.forEach(day => {
    if (day > max) {
      answer.push(1);
      max = day;
    }
    else {
      answer[answer.length - 1] += 1;
    }
  });
  return answer;
}

function calculate(progress, speed) {
  return Math.ceil((100 - progress) / speed);
}