/**
 * Copyright(c) 2021. Synergy Systems & Solutions. @link : http://s3india.com 
 *
 * @module  arrSorting
 * @file    Sorting.js
 * @author  Gaganpreet Singh
 * @summary This file contains implementation of selection sort algorithm.
 *  
 * Created on  :  07-08-2021
 */

/**
 * @function arrSorting
 * @param  arrVal 
 * @returns Array in sorted manner
 */

let arrSorting = function (arrVal) {

    if (!arrVal.length) {
        throw new Error("Empty array");
    } else if (arrVal.length === 1) {
        return console.log(arrVal[0]);
    }
    for (var i = 0; i <= arrVal.length; i++) {
        let outerElement = arrVal[i];
        for (var j = i + 1; j <= arrVal.length; j++) {// [3, 2, 8, 6 , 9 , 1];
            let innerElement = arrVal[j];
            if (outerElement > innerElement) {
                arrVal[i] = innerElement;
                arrVal[j] = outerElement; 
                innerElement = arrVal[j];
                outerElement = arrVal[i];
            }
        }
    }
    console.log(arrVal);  
}

let arrNumbers = [6 , 9 , 1 ,2 ,5];
let arrString = ["d", "e", "a", "l"]
arrSorting(arrNumbers);
arrSorting(arrString);
