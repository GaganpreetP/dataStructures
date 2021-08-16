/**
 * Copyright(c) 2021. Synergy Systems & Solutions. @link : http://s3india.com 
 *
 * @module  binarySearch
 * @file    binarySearch.js
 * @author  Gaganpreet Singh
 * @summary This file contains implementation of binary search algorithm.
 *  
 * Created on  :  09-08-2021
 */

/**
 * @function binarySearch
 * @param    arr , nNum 
 * @returns  -1 if no value found
 */

var binarySearch = function(arrVal , nNum){

    /**
     * variable details 
     */
    let nLength = arrVal.length;
    let nHigherVal = nLength - 1;
    let nLowerVal = 0;
    let nMidVal;

    while(nLowerVal <= nHigherVal){
        // console.log("hello !" + low + high);

        nMidVal = Math.floor((nLowerVal + nHigherVal)/2);
    
        if(nNum == arrVal[nMidVal]){ 
            return nMidVal;
        
        }else if(nNum > arrVal[nMidVal]){
            nLowerVal = nMidVal + 1;
    
        }else{
            nHigherVal = nMidVal - 1;
    }

    }
return -1;
}
var arrNum = [0 , 12 , 24 , 36 , 48 , 60 , 72 , 84 , 96 , 108 , 120 ];
var nResult = binarySearch(arrNum , 60);
console.log("Value is present at index : " + nResult);

