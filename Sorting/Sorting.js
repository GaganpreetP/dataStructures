let arrSorting = function (array) {
    if (!array.length) {
        throw new Error("Empty array");
    } else if (array.length === 1) {
        return console.log(array[0]);
    } else {
            for (var i = 0; i <= array.length; i++) {
                let outerElement = array[i];
                for (var j = i + 1; j <= array.length; j++) {// [3, 2, 8, 6 , 9 , 1];
                    let innerElement = array[j];
                    if (outerElement > innerElement) {
                        array[i] = innerElement;
                        array[j] = outerElement; 
                        innerElement = array[j];
                        outerElement = array[i];
                    }
                }
            }
            console.log(array);
    }
}

let arrNumbers = [3, 2, 8, 6 , 9 , 1];
let arrString = ["d", "e", "a", "l"]
arrSorting(arrNumbers);
arrSorting(arrString);
