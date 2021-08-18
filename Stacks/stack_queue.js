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


 function Stack(arrValues){
     /**
      * variables details
      */
     var self = this;
     self._arrValues = arrValues;
 };

 
 var log = new logFile.Logger();
 Stack.prototype.call = function(){

    log.writeTrace(msg);
     
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

        fnCall.call();
    }

}
/**
 * @method  Stack::pop
 * @param   none
 * @returns Value popped from array
 * @summary .pop() returns value popped out from array
 */

Stack.prototype.pop = function () {
    var self = this;
    msg = "Entering pop function!";
    fnCall.call();

    try{
        msg = self._arrValues[self._arrValues.length - 1] + " popped from array!\n" + "Length of array is :"+ self._arrValues.pop() + "\nIt contains : " + self._arrValues.toString() + "\n";
        fnCall.call();

    }catch(err){
        fnCall.writeTrap(err);
    }
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
    msg = "Entering enqueue function!"; 
    fnCall.call();

    try{
        msg =  nValue + " enqueued to array!\n"  +"Length of array is :"+ self._arrValues.push(nValue) + "\nIt contains : " + self._arrValues.toString() + "\n"
        fnCall.call();

    }catch(err){

        fnCall.writeTrap(err);

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
    fnCall.call();

    try{
        msg = self._arrValues[0] + " dequeued from array!\n" +"Length of array is :"+ self._arrValues.splice(0, 1) + "\nIt contains : " + self._arrValues.toString() + "\n";
        fnCall.call();


    }catch(err){

        fnCall.writeTrap(err);
    }
}



//Exporting file to another file
module.exports = { Stack, Queue };






