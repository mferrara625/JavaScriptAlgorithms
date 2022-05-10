function titleCase(str) {
    let myArray = str.split(" ")
    let arrayB = []
    let arrayC = []
    let space = " "
    let uppercased = []
    let lowercased = []
    for (var i = 0; i < myArray.length; i++)
        arrayB.push(myArray[i][0])
    for (var j = 0; j < myArray.length; j++) {
        uppercased = arrayB.map(arrayB => arrayB.toUpperCase())
        arrayC.push(space)
        arrayC.push(uppercased[j])
        for (var k = 1; k < myArray[j].length; k++) {
            lowercased = myArray.map(myArray => myArray.toLowerCase())
            arrayC.push(lowercased[j][k])
        }
    }
    arrayC.shift()
    return arrayC.join('')
}

console.log(titleCase("I'm a little tea pot"))
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"))
console.log(titleCase("sHoRt AnD sToUt"))