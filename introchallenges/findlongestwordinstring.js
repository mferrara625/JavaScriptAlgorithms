function findLongestWordLength(str) {
  let myArray = []
  myArray.push(str.split(" "))
  for (var i = 0; i < myArray.length; i++) {
    let arrayB = []
    for (var j = 0; j < myArray[i].length; j++)
      arrayB.push(myArray[i][j].length)
    return Math.max(...arrayB);
  }
}


console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))
console.log(findLongestWordLength("May the force be with you"))
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"))