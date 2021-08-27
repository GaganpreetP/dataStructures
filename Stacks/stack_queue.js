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

function Stack(arrValues) {
    /**
    * variables details
    */
    var self = this;
    self._arrValues = arrValues;
    self._logger = new logFile.Logger();

};

/**
 * @method  Stack::push
 * @param   value
 * @returns none
 * @summary .push() pushes the value into the array
 */


Stack.prototype.push = function (nValue) {
    var self = this;
    var msg = null;

    try {

        msg = " Entering push function !";
        self._logger.writeTrace(msg);
        //     self._logger.writeTrap(msg);
        //     self._logger.writeTrap(msg);
        // }


        var res = self._arrValues.push(nValue);
        var str = self._arrValues.toString();

        msg = nValue + " pushed into array! Length of array is :" + res + ". It contains : " + str + "\n";
        self._logger.writeTrace(msg);

    } catch (err) {

        msg = err + "\n";
        self._logger.writeTrap(msg);
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
    var msg = null;

    if (self._arrValues.length == 0) {
        msg = "Array is empty\n It contains " + self._arrValues.length + " value!";
        self._logger.writeTrap(msg);
        throw new Error(msg);
    }

    try {

        msg = "Entering pop function!\n";
        self._logger.writeTrace(msg);

        var valPop = self._arrValues.pop()
        var str = self._arrValues.toString()
        var lenStr = self._arrValues.length

        msg = valPop + " popped from array!\nLength of array is :" + lenStr + "\nIt contains : " + str + "\n";
        self._logger.writeTrace(msg);

    } catch (err) {

        msg = err + "\n";
        self._logger.writeTrap(msg);
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
    self._logger = new logFile.Logger();
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
    var msg = null;

    try {

        msg = "Entering enqueue function !\n"
        self._logger.writeTrace(msg);

        var pushVal = self._arrValues.push(nValue)
        var convToStr = self._arrValues.toString()

        msg = nValue + " enqueued to array!\nLength of array is :" + pushVal + "\nIt contains : " + convToStr + "\n";
        self._logger.writeTrace(msg);

    } catch (err) {

        msg = err + "\n";
        self._logger.writeTrap(msg);

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

    try {

        msg = "Entering dequeue function !\n"
        self._logger.writeTrace(msg);

        var splVal = self._arrValues.splice(0, 1)
        var lenStr = self._arrValues.length
        var convStr = self._arrValues.toString()

        msg = splVal + " dequeued from array!\nLength of array is :" + lenStr + "\nIt contains : " + convStr + "\n";
        self._logger.writeTrace(msg);


    } catch (err) {

        msg = err + "\n";
        self._logger.writeTrap(msg);

    }
}


//Exporting file to another file
module.exports = { Stack, Queue };






