function frankenSplice(arr1, arr2, n) {
    let myArray = []

    for (var i = 0; i < n; i++) {
        myArray.push(arr2[i])
    }
    for (var j = 0; j < arr1.length; j++) {
        myArray.push(arr1[j])
    }
    for (var k = n; k < arr2.length; k++) {
        myArray.push(arr2[k])
    }
    return myArray
}


console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1))
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2))