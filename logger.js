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
const date = require('date-and-time');
const now = new Date();
var nDateTime = date.format(now, 'HH-mm-ss_DD-MM-YYYY');

function Logger() {
  
  var self = this;
  self._maxFile = 5;
  self._size = 80;
  
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

Logger.prototype.readDir = function(){

  var self = this;
  self._currFile = `./Tracing/trace.${nDateTime}.txt`;
  
  const liOfFiles = fs.readdirSync('./Tracing');
  console.log(liOfFiles);

  if(liOfFiles[0] == null){

    fs.writeFileSync(self._currFile , " ");
  
  }else{

    console.log(liOfFiles)

  }
  
}

Logger.prototype.stats = function(){

  var self = this;
  const statOfFiles = fs.statSync(self._currFile);
  const fileSizeInBytes = statOfFiles.size;
  console.log(fileSizeInBytes);

  if (fileSizeInBytes >=  self._size){

    const now = new Date();
    var nDateTime = date.format(now, 'HH-mm-ss_DD-MM-YYYY');
    self._currFile = `./Tracing/trace.${nDateTime}.txt`;
    // fs.writeFileSync(self._currFile, "");

    }
  }
  
Logger.prototype.writeTrace = function (strMsg){

  var self = this;

  
  try {
    self.readDir();
    self.stats();
    fs.appendFileSync(self._currFile , strMsg + "\n");

    console.log(strMsg);

}catch (err) {
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

Logger.prototype.writeTrap = function (strMsg) {

  strMsg = `${nDateTime}` + ":\n" + strMsg;

  fs.appendFileSync("./Trapping/trap.txt", strMsg + "\n");
  console.log("Error occured\n");
  console.log(strMsg);
}

module.exports = { Logger };