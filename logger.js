/**
 * @class   Logger
 * @extends none
 * @param   arrValues
 * @constructor writeTrace , writeTrap
 * @summary Implementation of Logger class and exporting to main file
 */
/**
 * Module Dependency
 * 
 * @constant fs         : The fs module provides an API for interacting with the file system in a manner
 *                        closely modeled around standard POSIX functions.
 * @constant date       : The date time module provides current data and time when a user logs into file system.
 */

 const date = require('date-and-time');
 const fs = require('fs');
 const now = new Date();
  
 function Logger(_arrValues){
    var self = this;
    self._arrValues = _arrValues;
 }
 
 /**
 * @method  Logger::writeTrace
 * @param   none
 * @returns none
 * @summary pending
 *
 * @author Gaganpreet Singh
 * Created on: 16 - 08 - 2021
 */
 Logger.prototype.writeTrace = function(strMsg){
   //  var self = this;
    strMsg = ("Array is Empty !"+ " User Logged at : " + date.format(now, 'DD/MM/YYYY HH:mm:ss'));
    console.trace(strMsg);

    fs.writeFileSync("./sample.txt" , strMsg);
 }

  /**
 * @method  Logger::writeTrap
 * @param   none
 * @returns none
 * @summary pending
 *
 * @author Gaganpreet Singh
 * Created on: 16 - 08 - 2021
 */

 Logger.prototype.writeTrap = function(){

    
 
 }

 module.exports = {Logger};