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
   
/**
 * @method  Stack::push
 * @param   value
 * @returns none
 * @summary .push() pushes the value into the array
 */

Stack.prototype.push = function(nValue){
    
    // log.writeTrace(msg);

    var self = this;
    
    try{
        
        self._arrValues.push(nValue);
        msg = "Entering push function !"
        log.writeTrace(msg , self._arrValues);
        
        msg = nValue + " pushed into array!\n";
        log.writeTrace(msg , "Value pushed");

    }catch(err){
        msg = "Error occured!"
        log.writeTrace(err);
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

    try{
        self._arrValues.pop();
        msg = "Entering pop function !"
        log.writeTrace(msg , self._arrValues);

        msg = self._arrValues[self._arrValues.length - 1] + " popped from array!\n";
        log.writeTrace(msg  , "Value popped")

    }catch(err){

        msg = "Error occured!"
        log.writeTrace(err);
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
    try{
        self._arrValues.push(nValue);
        msg = "Entering enqueue function !"
        log.writeTrace(msg , self._arrValues);

        msg = nValue + " enqueued into array !\n"
        log.writeTrace(msg , "Value enqueued");

    }catch(err){
        msg = "Error occured!"
        log.writeTrace(err);

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
    try{
        self._arrValues.splice(0, 1);
        msg = "Entering dequeue function !"
        log.writeTrace(msg , self._arrValues);

        msg = self._arrValues[0] + " dequeued from array!\n";
        log.writeTrace(msg , "Value dequeued");

    }catch(err){

        msg = "Error occured!"
        log.writeTrace(err);
    }
}



//Exporting file to another file
module.exports = { Stack, Queue };






