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

  console.log(factorialize(7))