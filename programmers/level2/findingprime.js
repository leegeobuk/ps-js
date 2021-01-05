console.log(solution('17') === 3);
console.log(solution('011') === 2);
console.log('01' === '1');

function solution(numbers) {
  var answer = 0;
  return answer;
}

function isPrime(num) {
  const sqrt = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= sqrt; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}