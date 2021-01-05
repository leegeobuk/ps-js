console.log(solution([1,1,3,3,2,2,4,5,1,1,1,3,3,3]) === 6);
console.log(solution([1,2,3]) === 3);
console.log(solution([2,2,1,1,2,2,1,1,2,2,2,1,2]) === 5);
console.log(solution([2]) === 1);

function solution(arr) {
  if (arr.length === 1) {
    if (arr[0] === 1) {
      return 0;
    }
    else {
      return 1;
    }
  }
  let answer = 1;
  let reps = findRepetition(arr);
  while (reps.length !== 1) {
    reps = findRepetition(reps);
    answer++;
  }
  return reps[0] === 1 ? answer : answer+1;
}

function findRepetition(arr) {
  const reps = [];
  let count = 1;
  for (let i = 0; i < arr.length-1; i++) {
    if (arr[i] === arr[i+1]) {
      count++;
    }
    else {
      reps.push(count);
      count = 1;
    }
  }
  reps.push(count);
  return reps;
}