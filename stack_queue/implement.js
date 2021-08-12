function Stack(arr){                               //create class and pass array as parameter
    this.arr = arr;                                //assign global this to array
};

Stack.prototype.push = function(value){            //Declare push functon in prototype of stack

    this.arr.push(value);                                  //push value in array
}

Stack.prototype.pop = function(){
    this.arr.pop();
}

Stack.prototype.peek = function(){
    this.arr[this.arr.length-1];
}

Stack.prototype.getDetails = function(){
    console.log("Array contains " + (this.arr.length) + " value and topmost value is " + this.arr[this.arr.length - 1]);
}

// _________________________________________________________________________________

function Queue(arr){
    this.arr = arr;
}

Queue.prototype.enqueue = function(value){
    this.arr.push(value);

}

Queue.prototype.dequeue = function(){
    this.arr.splice(0 , 1);
}


module.exports = {Stack , Queue};






