function repeatStringNumTimes(str, num) {
    let arrayB = []
    for (var i = 0; i < num; i++) {
        let myArray = []
        myArray.unshift(i)

        do {
            arrayB.unshift(str)
        } while (i < myArray)
    }
    JSON.stringify(arrayB)
    var res = arrayB.join("")
    return res
}

console.log(repeatStringNumTimes("abc", 3))
console.log(repeatStringNumTimes("*", 8))
console.log(repeatStringNumTimes("abc", -2))
console.log(repeatStringNumTimes("ab", 5))