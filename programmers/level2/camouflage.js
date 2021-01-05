console.log(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]) === 5);
console.log(solution([["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]) === 3);

function solution(clothes) {
  const sorted = clothes.reduce((acc, cur) => {
    acc[cur[1]] = acc[cur[1]] + 1 || 2;
    return acc;
  }, {});

  return Object.values(sorted).reduce((acc, cur) => acc * cur, 1) - 1;
}