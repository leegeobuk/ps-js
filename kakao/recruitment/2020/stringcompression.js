console.log(solution("aabbaccc") === 7);
console.log(solution("ababcdcdababcdcd") === 9);
console.log(solution("abcabcdede") === 8);
console.log(solution("abcabcabcabcdededededede") === 14);
console.log(solution("xababcdcdababcdcd") === 17);

function solution(s) {
  const arr = [];
  for (let i = 1; i <= s.length; i++) {
    arr.push(getZippedLength(s, i));
  }
  return Math.min(...arr);
}

function getZippedLength(s, zipUnit) {
  let zipped = '';
  for (let i = 0; i < s.length; i+=zipUnit) {
    const pattern = s.substring(i, i+zipUnit);
    let count = getPatternCount(s, pattern, i+zipUnit);
    i += ((count-1) * zipUnit);
    zipped += count > 1 ? count + pattern : pattern;
  }
  return zipped.length;
}

function getPatternCount(s, pattern, offset) {
  let count = 1;
  for (let i = offset; i < s.length; i+=pattern.length) {
    if (s.substring(i).startsWith(pattern)) {
      count++;
      continue;
    }
    break;
  }
  return count;
}