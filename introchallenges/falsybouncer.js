function bouncer(arr) {
    let myArray = []
    let arrB = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == undefined || arr[i] == false || arr[i] == null || arr[i] == 0 || Number.isNaN(arr[i]))
            myArray.push(arr[i])
        else arrB.push(arr[i])
    }
    return arrB;
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer([null, NaN, 1, 2, undefined]))