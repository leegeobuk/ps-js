console.log(solution("(()())()") === "(()())()");
console.log(solution(")(") === "()");
console.log(solution("()))((()") === "()(())()");

function solution(p) {
  if (p === '') {
    return p;
  }
  else {
    const u = p.substring(0, getIndexToSplit(p));
    const v = p.substring(u.length);
    if (isWellPaired(u)) {
      return u + solution(v);
    }
    else {
      return construct(u, v);
    }
  }
}

function isWellPaired(p) {
  const stack = [];
  for (let i = 0; i < p.length; i++) {
    if (p[i] === '(') {
      stack.push(p[i]);
    }
    else {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
}

function getIndexToSplit(p) {
  let [left, right] = [0, 0];
  for (let i = 0; i < p.length; i++) {
    p[i] === '(' ? left++ : right++;
    if (left === right) {
      return i+1;
    }
  }
  return -1;
}

function construct(u, v) {
  return `(${solution(v)})${convertU(u)}`;
}

function convertU(u) {
  let str = u.substring(1, u.length-1);
  return reverse(str);
}

function reverse(u) {
  let reversed = '';
  for (let i = 0; i < u.length; i++) {
    u[i] === '(' ? reversed += ')' : reversed += '(';
  }
  return reversed;
}