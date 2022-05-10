function getIndexToIns(arr, num) {
    let myArray = arr.sort(function (a, b) { return a - b })

    for (var i = 0; i < myArray.length; i++) {
        if (num <= myArray[i])
            return i
    }
    return i
}

console.log(getIndexToIns([40, 60,], 50));
console.log(getIndexToIns([5, 3, 20, 3], 5))