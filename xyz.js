const fs = require('fs');
const statOfFiles = fs.statSync('./Tracing/trace.15-50-40_31-08-2021.txt');  
const fileSizeInBytes = statOfFiles.size;
console.log(fileSizeInBytes);  
        
if(fileSizeInBytes > 200){
    console.log("hii");
}