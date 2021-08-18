/**
 * Copyright(c) 2021. Synergy Systems & Solutions. @link : http://s3india.com 
 *
 * @module  Main
 * @file    main.js
 * @author  Gaganpreet Singh
 * @summary This file contains implementation of stack and queue data structure.
 *  
 * Created on  :  13-08-2021
 */
/**
 * Module Dependency
 * 
 * @constant file         : The FILE imports stack_queue file from Stacks folder
 */

const file = require('./Stacks/stack_queue');

/**
 * variables details
 * @const arrValues       : It will store all the operations being done in the array.
 * @constant instArr1     : Creates a new instance of Object 
 */

var arrValues = [];
var instArr1 = new file.Stack(arrValues);

instArr1.push(90);
instArr1.push(100);
instArr1.pop();

var instArr1 = new file.Queue(arrValues);

instArr1.enqueue(90);
instArr1.enqueue(1);
instArr1.dequeue();





