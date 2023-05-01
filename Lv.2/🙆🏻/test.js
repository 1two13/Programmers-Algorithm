// {
//   let answer = [];
//   let a = [1, 5, 4, 9];
//   let b = [2, 7, 10, 5, 4];

//   for (let i = 0; i < a.length; i++) {
//     // for (let j = 0; j < b.length; j++) {
//     //   if (a[i] === b[j]) answer.push(b[j]);
//     // }

//     if (b.includes(a[i])) answer.push(a[i]);
//   }

//   console.log(answer);
// }

// {
//   let answer = [];
//   let a = new Set([1, 5, 4, 9]);
//   let b = [2, 7, 10, 5, 4];

//   for (let i = 0; i < b.length; i++) {
//     if (a.has(b[i])) answer.push(b[i]);
//   }

//   console.log(answer);
// }

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

const nodeA = new Node('A', null);
const nodeB = new Node('B', nodeA);
const nodeC = new Node('C', nodeB);

console.log(nodeA);
console.log(nodeB);
console.log(nodeC);

let currentNode = nodeC;
while (true) {
  console.log(`value: ${currentNode.value}`);

  if (currentNode.next === null) break;

  currentNode = currentNode.next;
}
