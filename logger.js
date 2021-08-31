/**
 * Copyright(c) 2021. Synergy Systems & Solutions. @link : http://s3india.com 
 *
 * @module  Logger
 * @file    logger.js
 * @author  Gaganpreet Singh
 * @summary This file contains implementation of logger class.
 *  
 * Created on  :  16-08-2021
 */

/**
 * Module Dependency
 * 
 * @constant fs  : The fs module provides an API for interacting with the file system in a manner
 *                 closely modeled around standard POSIX functions.
 * @constant date : The date time module gives the current date time through which we can trace data .
 */

const fs = require('fs');
const date = require('date-and-time');

/**
 * @class   Logger
 * @extends none
 * @param   arrValues
 * @constructor writeTrace , writeTrap
 * @summary Implementation of Logger class and exporting to main file
 */

function Logger() {

  var self = this;
  self._maxFile = 5;
  self._size = 200; 
  self.initiate();

}

/**
* @method  Logger::getFileName
* @param   file
* @returns new file name 
* @summary this function gives new file name according to current date time. 
*
* @author Gaganpreet Singh
* Created on: 31 - 08 - 2021
*/

Logger.prototype.getFileName = function (file) {
  
  // var self = this;
  const now = new Date();
  var nDateTime = date.format(now, 'HH-mm-ss_DD-MM-YYYY');
  try{

    if (file == 'trace') {
      
      return `./Tracing/trace.${nDateTime}.txt`;
    }
    
    if (file == 'trap') {
      
      return `./Trapping/trap.${nDateTime}.txt`;
    }

  }catch (err) {

    msg = "Error " + err;
    self.writeTrap(msg);

  }
  
  
}

/**
* @method  Logger::readDir
* @param   dir , file
* @returns new file if no file exists 
* @summary reads directory , checks file existence and append data to file having more space
*
* @author Gaganpreet Singh
* Created on: 17 - 08 - 2021
*/

Logger.prototype.readDir = function (dir, file) {
  
  var self = this;
  var name = self.getFileName(file);
  self._name = name;
  
  const arrLiOfFiles = fs.readdirSync(`./${dir}`);
  console.log(arrLiOfFiles);
  
  if (arrLiOfFiles.length >= self._maxFile) {
    
    fs.unlinkSync(`./${dir}/${arrLiOfFiles[0]}`);
  }
  
  if (arrLiOfFiles[0] == null) {
    
    fs.writeFileSync(self._name, " ");
    
  } else {
    
    try {
      
      for (let files in arrLiOfFiles) {
        
        const info = fs.statSync(`./${dir}/${arrLiOfFiles[files]}`);
        const sizeOfFiles = info.size;
        
        if (sizeOfFiles <= self._size) {
          
          self._name = `./${dir}/${arrLiOfFiles[files]}`;
          // self._name = name;
          
        }
      }
    } catch (err) {
        msg = "Error " + err
        self.writeTrap(msg);
    }
    
  }
}

/**
* @method  Logger::stats
* @param   none
* @returns none
* @summary gives the stats of file received
*
* @author Gaganpreet Singh
* Created on: 17 - 08 - 2021
*/


Logger.prototype.stats = function () {
  
  var self = this;
  self._fileSizeInBytes = 0;
  
  try {
    
    const statOfFiles = fs.statSync(self._name);
    self._fileSizeInBytes = statOfFiles.size;
    console.log(self._fileSizeInBytes);  
    
  } catch (err) {
    
    msg = 'Exception occured in stat function \n' + err;
    self.writeTrap(msg);
    
  }

}


/**
* @method  Logger::checkFile
* @param   file
* @returns new file name
* @summary checks if file memory exceeded and create new file
*
* @author Gaganpreet Singh
* Created on: 31 - 08 - 2021
*/


Logger.prototype.checkFile = function(file){

  var self = this;
  try{

    if (self._fileSizeInBytes >= self._size) {
        
      var newFile = self.getFileName(file);
      self._name = newFile;
      return self._name;
  
    }
  }catch(err){

    msg = err;
    self.writeTrap(msg);
  }

}

/**
* @method  Logger::initiate
* @param   file
* @returns none
* @summary checks file directory existence and read stats 
*
* @author Gaganpreet Singh
* Created on: 31 - 08 - 2021
*/

Logger.prototype.initiate = function(){

  var self = this;

  try{
    self.readDir('Tracing' , 'trace');
    self.stats();

  }catch(err){

    msg = err;
    self.writeTrap(msg);
  }
  
};

/**
 * @method  Logger::writeTrace
 * @param   none
 * @returns none
 * @summary traces each and every operation done on array
 *
 * @author Gaganpreet Singh
 * Created on: 16 - 08 - 2021
 */

Logger.prototype.writeTrace = function (strMsg) {

  var self = this;

  const now = new Date();
  var nDateTime = date.format(now, 'HH-mm-ss_DD-MM-YYYY');
  
  try {

    strMsg = ` ${nDateTime}` + ": " + strMsg;

    fs.appendFileSync(self._name, strMsg + "\n");
    console.log(strMsg);

    self.checkFile('trace');

  } catch (err) {
    msg = ("Error occured " + "\n" + err);
    self.writeTrap(msg);
  }
}

/**
* @method  Logger::writeTrap
* @param   strMsg
* @returns none
* @summary writes errors to a file
*
* @author Gaganpreet Singh
* Created on: 16 - 08 - 2021
*/

Logger.prototype.writeTrap = function (strMsg) {

  var self = this;
  var errFile = self.getFileName('trap');

  try {
    
    const now = new Date();
    var nDateTime = date.format(now, 'HH-mm-ss_DD-MM-YYYY');

    strMsg = `${nDateTime}` + ": " + strMsg;
    fs.appendFileSync(errFile , strMsg + "\n");

    console.log("Error occured\n");
    console.log(strMsg);

    self.checkFile('trap');


  } catch (err) {

    msg = err;
    self.writeTrap(msg);

  }
}

module.exports = { Logger };