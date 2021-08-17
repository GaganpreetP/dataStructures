/**
 * Copyright(c) 2021. Synergy Systems & Solutions. @link : http://s3india.com 
 *
 * @module  Stack and Queue
 * @file    implement.js
 * @author  Gaganpreet Singh
 * @summary This file contains implementation of stack and queue data structure.
 *  
 * Created on  :  10-08-2021
 */

/**
 * @class   Stack
 * @extends none
 * @param   arr
 * @constructor
 * @summary 
 */
const log = require("../logger.js");

var instLog = new log.Logger();


function Stack(arrValues) {
    /**
     * variables details
     */
    var self = this;
    self._arrValues = arrValues;
};

/**
 * @method  Stack::push
 * @param   value
 * @returns none
 * @summary .push() pushes the value into the array
 */
Stack.prototype.push = function (nValue) {
    var self = this;
    self._arrValues.push(nValue);
    console.log(self._arrValues);
}

/**
 * @method  Stack::pop
 * @param   none
 * @returns Value popped from array
 * @summary .pop() returns value popped out from array
 */

Stack.prototype.pop = function () {
    var self = this;
    self._arrValues.pop();
    console.log(self._arrValues);
    if (self._arrValues.length === 0) {
        instLog.writeTrace();
    }
}

/**
 * @method  Stack::peek
 * @param   none
 * @returns value last entered into array
 * @summary .peek gives the top value in stack
 */

Stack.prototype.peek = function () {
    var self = this;
    self._arrValues[self._arrValues.length - 1];
    console.log(self._arrValues);
}

/**
 * @method  Stack::push
 * @param   value
 * @returns Value pushed into array
 * @summary 
 *
 * @author Gaganpreet Singh
 * Created on: 10 - 08 - 2021
 */

Stack.prototype.getDetails = function () {
    var self = this;
    console.log("Array contains " + (self._arrValues.length) + " value and topmost value is " + self._arrValues[self._arrValues.length - 1]);
}

// _________________________________________________________________________________
/**
 * @class   Queue
 * @extends none
 * @param   arrValues
 * @constructor
 * @summary 
 *
 * @author Gaganpreet Singh
 * Created on: 11 - 08 - 2021
 */

function Queue(arrValues) {
    var self = this;
    self._arrValues = arrValues;
}

/**
 * @method  Queue::enqueue
 * @param   nValue
 * @returns value pushed into array
 * @summary .enqueue pushes the value in array
 *
 * @author Gaganpreet Singh
 * Created on: 11 - 08 - 2021
 */

Queue.prototype.enqueue = function (nValue) {
    var self = this;
    self._arrValues.push(nValue);
    console.log(self._arrValues);
}

/**
 * @method  Queue::dequeue
 * @param   none
 * @returns value popped out from array
 * @summary .splice() pops values from array provided the index and no.of.times value to be popped
 *
 * @author Gaganpreet Singh
 * Created on: 11 - 08 - 2021
 */

Queue.prototype.dequeue = function () {
    var self = this;
    self._arrValues.splice(0, 1);
    console.log(self._arrValues);
    if (self._arrValues.length === 0) {
        instLog.writeTrace();
    }
}



//Exporting file to another file
module.exports = { Stack, Queue };






