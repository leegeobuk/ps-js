console.log(solution("JEROEN") === 56);
console.log(solution("JAN") === 23);
console.log(solution("AZAAAZ") === 5);
console.log(solution("ABABAAAAAAABA") === 11);

function solution(name) {
  let totalMove = 0;
  let cur = 0;
  let nonAs = findNonA(name);
  const length = nonAs.length;

  for (let i = 0; i < length; i++) {
    let dests = nonAs.map(value => {
      return {
        index: value,
        dist: calculateDistance(cur, value, name.length)
      };
    }).sort((a, b) => a.dist-b.dist);
    let dest = dests.shift();
    totalMove += dest.dist + getShortestCharDist(name[dest.index]);
    cur = dest.index;
    name = name.substring(0, dest.index) + 'A' + name.substring(dest.index+1);
    nonAs = findNonA(name);
  }
  return totalMove;
}

function findNonA(name) {
  const dests = [];
  for (let i = 0; i < name.length; i++) {
    if (name[i] !== 'A') {
      dests.push(i);
    }
  }
  return dests;
}

function calculateDistance(cur, dest, length) {
  const rightDistance = Math.abs(dest - cur);
  const half = Math.floor(length/ 2);
  cur = cur <= half ? cur : length - cur;
  dest = dest <= half ? dest : length - dest;
  return Math.min(rightDistance, cur + dest);
}

function getShortestCharDist(char) {
  let value = char.charCodeAt(0) - 65;
  return value <= 13 ? value : 26 - value;
}