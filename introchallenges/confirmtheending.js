function confirmEnding(str, target) {

    let myArray = str.split("")
    let tarArray = target.split("")
    let arrayB = []

    for (var i = 0; i < tarArray.length; i++) {
        do (
            arrayB.unshift(myArray.pop("")))
        while (i < target)
    }
    if (JSON.stringify(tarArray) == JSON.stringify(arrayB)) {
        return true
    }
        return false
}

console.log(confirmEnding("Bastian", "an"));
console.log(confirmEnding("Congratulation", "on"))
console.log(confirmEnding("Connor", "n"))