console.log(solution([[0, 0, 0], [1, 0, 0], [0, 1, 1]], [[1, 1, 1], [1, 1, 0], [1, 0, 1]]));

function solution(key, lock) {
  const holes = getHoleCount(lock);
  const biggerLock = createBiggerLock(lock, key.length);
  for (let i = 0; i < 4; i++) {
    if (compare(key, biggerLock, holes)) {
      return true;
    }
    key = rotate(key);
  }
  return false;
}

function getHoleCount(lock) {
  let count = 0;
  for (const arr of lock) {
    for (const e of arr) {
      if (e === 0) {
        count++;
      }
    }
  }
  return count;
}

function createBiggerLock(lock, keySize) {
  const biggerLock = [];
  const padding = keySize - 1;
  const arrayToPad = Array(padding).fill(-1);
  for (let i = -padding; i < lock.length+padding; i++) {
    if (i < 0 || i >= lock.length) {
      biggerLock.push(Array(lock.length + 2 * padding).fill(-1));
    }
    else {
      biggerLock.push([...arrayToPad, ...lock[i], ...arrayToPad]);
    }
  }
  return biggerLock;
}

function compare(key, lock, holes) {
  const [m, n] = [key.length, lock.length];
  for (let i = 0; i <= n-m; i++) {
    for (let j = 0; j <= n-m; j++) {
      const lockPortion = getLockPortion(lock, m, [i, j]);
      if (isMatch(key, lockPortion, holes)) {
        return true;
      }
    }
  }
  return false;
}

function getLockPortion(lock, size, indicies) {
  const [i, j] = indicies;
  const portion = [];
  for (let k = i; k < i+size; k++) {
    portion.push(lock[k].slice(j, j+size));
  }
  return portion;
}

function isMatch(key, lock, holes) {
  if (getHoleCount(lock) !== holes) {
    return false;
  }
  for (let i = 0; i < key.length; i++) {
    for (let j = 0; j < key.length; j++) {
      if (lock[i][j] === key[i][j]) {
        return false;
      }
    }
  }
  return true;
}

function rotate(key) {
  const rotatedKey = [];
  for (let i = 0; i < key.length; i++) {
    rotatedKey.push([]);
    for (let j = 0; j < key[i].length; j++) {
      rotatedKey[i].unshift(key[j][i]);
    }
  }
  return rotatedKey;
}