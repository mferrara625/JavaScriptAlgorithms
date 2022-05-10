function chunkArrayInGroups(arr, size) {
    let array = []
    for (var i = 0; i < arr.length; i += size) {
      array.push(arr.slice(i, i + size))
    }
    return array;
  }
  
  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3))