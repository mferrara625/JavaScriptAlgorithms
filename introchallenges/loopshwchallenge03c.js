
    let numArray = [9, 5, 7, 13, 19, 23, 4, 12, 15, 0]
    function factorialize(num) {
        let myArray = []
        for (var i = num; i > 0; i--) {
          myArray.push(i)
        }
        var res = 1
        for (var j = 0; j < myArray.length; j++) {
          res = res * myArray[j]
        }
        resArray.push(res)
      }
      let resArray = []
      

     for (var m = 0; m < numArray.length; m++){
        factorialize(numArray[m])
        if (resArray[m]%10 !== 0 && resArray[m]%10 > 1) {
            console.log( `Initial number: ${numArray[m]}
Factorial of initial number: ${resArray[m]}
Remainder of factorial: ${resArray[m]%10}`)
        }
     }