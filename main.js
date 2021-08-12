const file = require('./stack_queue/implement');

var arr = [];
// var arr1 = new file.Stack(arr);

// arr1.push(100);
// console.log(arr1);

// arr1.push(200);
// console.log(arr1);

var arr1 = new file.Queue(arr);

arr1.enqueue(100);
console.log(arr1);

arr1.enqueue(2020);
console.log(arr1);

arr1.dequeue();
console.log(arr1);