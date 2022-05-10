function largestOfFour(arr) {
    var myArray = []
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++)
            myArray.push(Math.max(...arr[j]))
        return myArray;
    }
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))