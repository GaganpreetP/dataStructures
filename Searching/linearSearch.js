/**
 * Copyright(c) 2019. Synergy Systems & Solutions. @link : http://s3india.com 
 *
 * @module  linearSearch
 * @file    linearSearch.js
 * @author  Gaganpreet Singh
 * @summary This file contains implementation of linear search algorithm.
 *  
 * Created on  :  07-08-2021
 */

/**
 * @function linearSearch
 * @param  arrNum, nValue
 * @returns void
 */ 

function linearSearch(arrNum , nValue){
    /**
     * variable details
     */
    let nIndex = 0;

    //Starting for loop
    for(let i = 0; i <= arrNum.length; i++) {
        if(arrNum[i] == nValue ){
            nIndex = i ;
        }
    } //ending of for loop
    if(arrayNum[nIndex] == nValue ){
        console.log("Element is present at index :" + nIndex);
    }  else{
        console.log("Element is not present ")
    }

}

let arrayNum = [2, 3 , 4 , 6 , 100 , 104 , 403]
let nValue = 403
linearSearch(arrayNum, nValue);
