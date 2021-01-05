console.log(solution(2, 10, [7, 4, 5, 6]) === 8);
console.log(solution(100, 100, [10]) === 101);
console.log(solution(100, 100, [10,10,10,10,10,10,10,10,10,10]) === 110);
console.log(solution(1000, 50, [20,40,30,20,10,10]) === 4002);
console.log(solution(1, 100, [10, 5, 4]) === 4);

function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let queue = [];
  let arrivedTrucks = [];
  const trucks = truck_weights.map(value => {
    return {
      weight : value,
      dist: 1
    }
  });

  while(arrivedTrucks.length < truck_weights.length) {
    answer++;
    cross(queue, bridge_length, arrivedTrucks);
    if (trucks.length > 0) {
      deploy(queue, weight, trucks);
    }
  }
  return answer;
}

function deploy(queue, weight, trucks) {
  const truck = trucks.shift();
  isSafe(queue, weight, truck.weight) ? queue.push(truck) : trucks.unshift(truck);
}

function isSafe(queue, weight, truckWeight) {
  return queue.reduce((prev, cur) => prev + cur.weight, 0) + truckWeight <= weight;
}

function cross(queue, bridge_length, arrivedTrucks) {
  queue.forEach(tr => tr.dist++);
  if (queue.length > 0 && queue[0].dist > bridge_length) {
    arrivedTrucks.push(queue.shift());
  }
}