/**
 * Module Dependency
 * 
 * @constant fs  : The fs module provides an API for interacting with the file system in a manner
 * 
 */

const instFile = require('./stack_queue/implement');
/**
 * variables details
 */
var arrValues = [];
var arr1 = new instFile.Queue(arrValues);

arr1.enqueue(90);
console.log(arr1);

arr1.dequeue();
console.log(arr1);




