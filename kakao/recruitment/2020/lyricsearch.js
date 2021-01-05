const Arrays = require('../../util/Arrays');

class TrieNode {
  
  constructor(parent, value) {
    this.parent = parent;
    this.value = value;
    this.childrenCount = 0;
    this.isEnd = false;
    this.children = Array(26);
  }
}

class Trie {
  
  constructor() {
    this.root = new TrieNode();
    this.size = 0;
    this.charCode = 'a'.charCodeAt(0);
  }

  insert(key, cur = this.root) {
    cur.childrenCount++;
    let index = this.getIndex(key);
    if (!cur.children[index]) {
      cur.children[index] = new TrieNode(cur, key);
      cur.children[index].isEnd = true;
      this.size++;
    }
    else {
      cur = cur.children[index];
      const indexToSplit = this.findIndexToSplit(cur.value, key);
      if (!key.startsWith(cur.value)) {
        const prefix = cur.value.substring(0, indexToSplit);
        cur.value = cur.value.substring(indexToSplit);
        cur = this.sendPrefixNodeUp(cur, prefix);
      }
      key = key.substring(indexToSplit);
      this.insert(key, cur);
    }
  }

  getIndex(word) {
    return word.charCodeAt(0) - this.charCode;
  }

  findIndexToSplit(value, key) {
    if (key.startsWith(value)) {
      return value.length;
    }
    for (let i = 0; i < value.length; i++) {
      if (value[i] !== key[i]) {
        return i;
      }
    }
    return -1;
  }

  sendPrefixNodeUp(cur, key) {
    const prefixNode = new TrieNode(cur.parent, key);
    let index = this.getIndex(key);
    cur.parent.children[index] = prefixNode;
    cur.parent = prefixNode;
    index = this.getIndex(cur.value);
    prefixNode.children[index] = cur;
    prefixNode.childrenCount = cur.isEnd ? 1 : cur.childrenCount;
    return prefixNode;
  }

  countMatch(key, cur = this.root) {
    const index = this.getIndex(key);
    if (!cur.children[index]) {
      return 0;
    }
    cur = cur.children[index];
    if (cur.value === key) {
      return cur.childrenCount;
    }
    else if (cur.value.startsWith(key)) {
      return cur.isEnd ? 1 : cur.childrenCount;
    }
    else if (key.startsWith(cur.value)) {
      key = key.substring(this.findIndexToSplit(cur.value, key));
      return this.countMatch(key, cur);
    }
    return 0;
  }
}

function solution(words, queries) {
  const answer = [];
  const tries = Array(10001);
  const reverseTries = Array(10001);
  for (const word of words) {
    if (!tries[word.length]) {
      tries[word.length] = new Trie();
    }
    tries[word.length].insert(word);
    if (!reverseTries[word.length]) {
      reverseTries[word.length] = new Trie();
    }
    reverseTries[word.length].insert(word.split('').reverse().join(''));
  }
  for (const query of queries) {
    if (query[0] === '?' && query[query.length-1] === '?') {
      const size = !tries[query.length] ? 0 : tries[query.length].size;
      answer.push(size);
    }
    else if (tries[query.length]) {
      const keyword = parseQuery(query);
      if (query[0] !== '?') {
        answer.push(tries[query.length].countMatch(keyword));
      }
      else {
        answer.push(reverseTries[query.length].countMatch(keyword));
      }
    }
    else {
      answer.push(0);
    }
  }
  return answer;
}

function parseQuery(query) {
  const parsed = query[0] === '?' ? query.split('').reverse().join('') : query;
  const keyword = parsed.substring(0, parsed.indexOf('?'));
  return keyword;
}

const words = ["frodo", "front", "frost", "frozen", "frame", "kakao"];
const queries = ["fro??", "????o", "fr???", "fro???", "pro?"];
console.log(Arrays.equals(solution(words, queries), [3, 2, 4, 1, 0]));
console.log(solution(words, queries));
