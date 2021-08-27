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

function Logger() {

  var self = this;
  self._maxFile = 2;
  self._size = 500; // byte
  // self.initiate();

}

// Logger.prototype.initiate = function(){
//   self.readDir(dir , file);
//   self.stats();
// };

Logger.prototype.getFileName = function (file) {

  var self = this;
  const now = new Date();
  var nDateTime = date.format(now, 'HH-mm-ss_DD-MM-YYYY');

  if (file == 'trace') {

    return `./Tracing/trace.${nDateTime}.txt`;
  }

  if (file == 'trap') {

    return `./Trapping/trap.${nDateTime}.txt`;
  }

}

Logger.prototype.readDir = function (dir, file) {

  var self = this;

  const liOfFiles = fs.readdirSync(`./${dir}`);
  console.log(liOfFiles);

  if (liOfFiles.length >= self._maxFile) {

    fs.unlinkSync(`./${dir}/${liOfFiles[0]}`);
  }

  if (liOfFiles[0] == null) {

    var name = self.getFileName(file);
    self.name = name;
    fs.writeFileSync(self.name, " ");

  } else {

    try {

      for (let files in liOfFiles) {

        const info = fs.statSync(`./${dir}/${liOfFiles[files]}`);
        const sizeOfFiles = info.size;

        if (sizeOfFiles <= self._size) {

          self.name = `./${dir}/${liOfFiles[files]}`;
          
        }
      }
    } catch (err) {
      console.log(err);
    }

  }
}

Logger.prototype.stats = function (file) {

  var self = this;

  try {

    const statOfFiles = fs.statSync(self.name);
    const fileSizeInBytes = statOfFiles.size;
    console.log(fileSizeInBytes);

    if (fileSizeInBytes >= self._size) {

      var newFile = self.getFileName(file);
      console.log('new file assigned' + newFile);
      self.name = newFile;
    }
  } catch (err) {
    console.log('Exception occured in stat function');
    console.log(err);
  }
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

Logger.prototype.writeTrace = function (strMsg) {

  var self = this;

  const now = new Date();
  var nDateTime = date.format(now, 'HH-mm-ss_DD-MM-YYYY');

  var path = 'Tracing';
  self.readDir(path, 'trace');


  try {
    self.stats('trace');

    strMsg = ` ${nDateTime}` + ":" + strMsg;
    fs.appendFileSync(self.name, strMsg + "\n");

    self._fileMap[self.name]
    console.log(strMsg);

  } catch (err) {
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

  var self = this;
  var path = 'Trapping';
  self.readDir(path, 'trap');

  try {

    self.stats('trap');
    const now = new Date();
    var nDateTime = date.format(now, 'HH-mm-ss_DD-MM-YYYY');
    strMsg = `${nDateTime}` + ": " + strMsg;
    fs.appendFileSync(self.name, strMsg + "\n");
    console.log("Error occured\n");
    console.log(strMsg);

  } catch (err) {

    console.log(err);
  }
}

module.exports = { Logger };