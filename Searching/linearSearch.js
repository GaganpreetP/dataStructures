function searching(arraynum , num){

    //starting of for loop
    let index = 0;
    for(let i = 0; i <= arraynum.length; i++) {
        if(arraynum[i] == num ){
            index = i ;
        }
    } //ending of for loop
    if(arraynum[index] == num ){
        console.log("Element is present at index :" + index);
    }  else{
        console.log("Element is not present ")
    }

}

let arraynum = [2, 3 , 4 , 6 , 100 , 104 , 403]
let num = 10
searching(arraynum, num);
