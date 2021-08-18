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
 * @constant fs  : The fs module provides an API for interacting with the file system in a manner
 *                 closely modeled around standard POSIX functions.
 */

const fs = require('fs');

function Logger() {
}
/**
* @method  Logger::writeTrace
* @param   none
* @returns none
* @summary traces each and every operation done on array
*
* @author Gaganpreet Singh
* Created on: 16 - 08 - 2021
*/
Logger.prototype.writeTrace = function (strMsg , logToConsole ){
  try{
    fs.appendFileSync("./trace.txt", strMsg + "\n");
    console.log(logToConsole);
  }catch(err){
    console.log("Error occured " + "\n" + err);
  }
  
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

Logger.prototype.writeTrap = function (strMsg ) {

    fs.appendFileSync("./trap.txt", strMsg + "\n");
    console.log("Error occured\n" );


}

module.exports = { Logger };