/**
 * Copyright(c) 2019. Synergy Systems & Solutions. @link : http://s3india.com 
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
 *
 * @author Gaganpreet Singh
 * Created on: 10 - 08 - 2021
 */

function Stack(_arrValues){                              
    /**
     * variables details
     */
    var self = this;
    self._arrValues = _arrValues;                               
};

/**
 * @method  Stack::push
 * @param   value
 * @returns Value pushed into array
 * @summary .push() pushes the value into the array
 *
 * @author Gaganpreet Singh
 * Created on: 10 - 08 - 2021
 */
Stack.prototype.push = function(nValue){           
    var self = this;
    self._arrValues.push(nValue);                                 
}

/**
 * @method  Stack::pop
 * @param   none
 * @returns Value popped from array
 * @summary .pop() returns value popped out from array
 *
 * @author Gaganpreet Singh
 * Created on: 10 - 08 - 2021
 */

Stack.prototype.pop = function(){
    var self = this;
    self._arrValues.pop();
}

/**
 * @method  Stack::peek
 * @param   none
 * @returns value last entered into array
 * @summary .peek gives the top value in stack
 *
 * @author Gaganpreet Singh
 * Created on: 10 - 08 - 2021
 */

Stack.prototype.peek = function(){
    var self = this;
    self._arrValues[self._arrValues.length-1];
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

Stack.prototype.getDetails = function(){
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

function Queue(_arrValues){
    var self = this;
    self._arrValues = _arrValues;
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

Queue.prototype.enqueue = function(nValue){
    var self = this;
    self._arrValues.push(nValue);

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

Queue.prototype.dequeue = function(){
    var self = this;
    self._arrValues.splice(0 , 1);
}

//Exporting file to another file
module.exports = {Stack , Queue};






