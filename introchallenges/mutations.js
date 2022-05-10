function mutation(arr) {
    var a = arr[0].toLowerCase()
    var b = arr[1].toLowerCase()
    let aB = a.split("")
    let bB = b.split("")
    let result = 0
    for (var i = 0; i < b.length; i++) {
      if (aB.includes(bB[i]) == 0) {
        result++
      }
      result = result
    }
    if (result == 0) {
      return true
    }
    return false
  }
  
  console.log(mutation(["hello", "oleh"]))
  console.log(mutation(["hello", "helj"]))