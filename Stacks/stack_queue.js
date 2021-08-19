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
 const logFile = require('../logger');


function Stack(arrValues ){
     /**
      * variables details
      */
     var self = this;
     self._arrValues = arrValues;
    };
    
Stack.prototype.call = function(){
    var self = this;
    self._logger = new logFile.Logger();
    self._logger.writeTrace(msg);
    
}
Stack.prototype.error = function(){
    var self = this;
    self._logger.writeTrap(msg);
}

var fnCall = new Stack();

/**
 * @method  Stack::push
 * @param   value
 * @returns none
 * @summary .push() pushes the value into the array
 */

Stack.prototype.push = function(nValue){
    var self = this;
    msg = "Entering push function!";
    fnCall.call();
    
    try{
        msg = nValue + " pushed into array!\n"+ "Length of array is :"+ self._arrValues.push(nValue) + "\nIt contains : " + self._arrValues.toString() + "\n";
        fnCall.call();
       
    }catch(err){
        msg = err + "\n";
        fnCall.error();
    }

}
/**
 * @method  Stack::pop
 * @param   none
 * @returns Value popped from array
 * @summary .pop() returns value popped out from array
 */
const fs = require('fs');
Stack.prototype.pop = function () {
    var self = this;
    msg = "Entering pop function!";
    fnCall.call();
    
    if(self._arrValues.length == 0){
        msg = "Array is empty\n It contains " +  self._arrValues.length + " value!";
        fs.appendFileSync("./trap.txt" , msg );
        throw new Error(msg);
    }

try{
    msg = self._arrValues.pop() + " popped from array!\n" + "Length of array is :"+ self._arrValues.length + "\nIt contains : " + self._arrValues.toString() + "\n";
    fnCall.call();
    }catch(err){
        
        msg = err + "\n";
        fnCall.error(msg);
    }
}


// _________________________________________________________________________________________________________________
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

Queue.prototype.call = function(){
    var self = this;
    self._logger = new logFile.Logger();
    self._logger.writeTrace(msg);
}
Queue.prototype.error = function(){
    var self = this;
    self._logger.writeTrap(msg);
}

var log = new Queue();

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
    msg = "Entering enqueue function!"; 
    log.call();

    try{
        msg =  nValue + " enqueued to array!\n"  +"Length of array is :"+ self._arrValues.push(nValue) + "\nIt contains : " + self._arrValues.toString() + "\n"
        log.call();

    }catch(err){
        msg = err + "\n";
        log.error(msg);

    }
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
    msg = "Entering dequeue function!";
    log.call();

    try{
        msg = self._arrValues.splice(0, 1) + " dequeued from array!\n" +"Length of array is :"+ self._arrValues.length + "\nIt contains : " + self._arrValues.toString() + "\n";
        log.call();


    }catch(err){
        msg = err + "\n";
        log.error(msg);
    }
}



//Exporting file to another file
module.exports = { Stack, Queue };






