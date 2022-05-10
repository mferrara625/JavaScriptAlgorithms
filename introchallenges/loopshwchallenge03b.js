
    let numArray = [9, 5, 7, 13, 19, 23, 4, 12, 15]
function factorialize(num) {
    let myArray = []
    for (var i = num; i > 0; i--) {
      myArray.push(i)
    }
    var res = 1
    for (var j = 0; j < myArray.length; j++) {
      res = res * myArray[j]
    }
    return res
  }
 for (var m = 0; m < numArray.length; m++){
    console.log(`The factorial of ${numArray[m]} is ${factorialize(numArray[m])}`) 
 }
  