priorities1 = [2,1,3,2];
priorities2 = [1,1,9,1,1,1];

console.log(solution(priorities1, 2) === 1);
console.log(solution(priorities2, 0) === 5);

function solution(priorities, location) {
  let answer = 0;
  let queue = priorities.map((value, index) => {
    return {
      value: value,
      index: index
    };
  });

  while (queue.length > 0) {
    let first = queue.shift();
    if (queue.some(item => item.value > first.value)) {
      queue.push(first);
    }
    else {
      answer++;
      if (first.index === location) { 
        break;
      }
    }
  }
  return answer;
}