const Arrays = require('../../../util/Arrays');

class Account {

  constructor (id, capacity) {
    this.id = id;
    this.capacity = capacity;
    this.balance = 0;
  }

}

const reqs1 = ['DEPOSIT 3a 10000', 'CREATE 3a 300000', 'WITHDRAW 3a 150000', 'WITHDRAW 3a 150001'];
const reqs2 = ['CREATE 3a 10000', 'CREATE 3a 20000', 'CREATE 2bw 30000'];
console.log(Arrays.equals(solution(reqs1), [404,200,200,403]));
console.log(Arrays.equals(solution(reqs2), [200,403,200]));

function solution(reqs) {
  const accounts = [];
  const responses = [];
  for (let i = 0; i < reqs.length; i++) {
    const req = reqs[i].split(' ');
    const account = accounts.find(account => account.id === req[1]);
    const amount = +req[2];
    if (req[0] === 'CREATE') {
      if (!account) {
        const acc = new Account(req[1], -amount);
        accounts.push(acc);
        responses.push(200);
      }
      else {
        responses.push(403);
      }
    }
    else if (req[0] === 'DEPOSIT') {
      if (account) {
        account.balance += amount;
        responses.push(200);
      }
      else {
        responses.push(404);
      }
    }
    else {
      if (account) {
        if (account.balance - amount < account.capacity) {
          responses.push(403);
        }
        else {
          account.balance -= amount;
          responses.push(200);
        }
      }
      else {
        responses.push(404);
      }
    }
  }
  return responses;
}
