const Arrays = require('../../util/Arrays');

const heights1 = [6, 9, 5, 7, 4];
const heights2 = [3, 9, 9, 3, 5, 7, 2];
const heights3 = [1, 5, 3, 6, 7, 6, 5];

console.log(Arrays.equals(solution(heights1), [0, 0, 2, 2, 4]));
console.log(Arrays.equals(solution(heights2), [0, 0, 0, 3, 3, 3, 6]));
console.log(Arrays.equals(solution(heights3), [0, 0, 2, 0, 0, 5, 6]));

function solution(heights) {
  return heights.map((value, index) => {
    for (let i = index-1; i >= 0; i--) {
      if (heights[i] > value) {
        return i + 1;
      }
    }
    return 0;
  });
}
