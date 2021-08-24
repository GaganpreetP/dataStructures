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
  self._size = 85;
  self._currFile = `./Tracing/trace.${nDateTime}.txt`;
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
  
    const liOfFiles = fs.readdirSync('./Tracing');
    console.log(liOfFiles);
    // try{
    //   if(liOfFiles[0] == null){
    //   fs.writeFileSync(self._currFile , "");
    //   }

    // }catch(err){
    // console.log(err);
    // }
  }

  
  Logger.prototype.stats = function(){

    var self = this;
   
    const stats = fs.statSync(self._currFile);
    const fileSizeInBytes = stats.size;
    console.log(fileSizeInBytes);

    if (fileSizeInBytes >= self._size){
    
        var nUpdatedDateTime = date.format(now , 'HH-mm-ss_DD-MM-YYYY');
        self._currFile = `./Tracing/trace.${nUpdatedDateTime}.txt`;
        
      }
    }
  
  Logger.prototype.writeTrace = function (strMsg) {

    var self = this;
    self.readDir();

    try {
      fs.appendFileSync(self._currFile , strMsg + "\n");
      self.stats(); 
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