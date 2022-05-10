function reverseString(str) {
    for (var i = 0; i < str.length; i++) {
        var myVar = str.split('')
        var myArray = []
        do {
            myArray.push(myVar.pop());
            i++;
        } while (i < str.length)
        var res = myArray.join("")
    }
    return res;
}


console.log(reverseString("hello"));
console.log(reverseString("Howdy"))
console.log(reverseString("Greetings from Earth"))