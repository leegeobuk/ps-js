console.log(solution([112,1814,121,1481,1184]) === 2);
console.log(solution([123,456,789,321,654,987]) === 3);
console.log(solution([1,2,3,1,2,3,4]) === 4);
console.log(solution([123,234,213,432,234,1234,2341,12345,324]) === 4);

function solution(arr) {
  if (arr.length === 1) {
    return 1;
  }
  let words = arr.map(value => '' + value);
  let answer = 0;
  while (words.length !== 0) {
    if (words.length === 1) {
      answer++;
      break;
    }
    let element = words.shift();
    let nonAnagrams = filterAnagrams(words, element);
    if (words.length !== nonAnagrams.length) {
      words = nonAnagrams;
    }
    answer++;
  }
  return answer;
}

function filterAnagrams(arr, str) {
  return arr.filter(word => !isAnagram(str, word));
}

function isAnagram(str1, str2) {
  const arr1 = Array(10).fill(0);
  const arr2 = Array(10).fill(0);
  for (let i = 0; i < Math.max(str1.length, str2.length); i++) {
    arr1[str1[i]]++;
    arr2[str2[i]]++;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}