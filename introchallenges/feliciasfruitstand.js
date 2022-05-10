var fruitTypes = ["apples", "apples", "apples", "oranges", "oranges", "oranges", "grapes", "grapes", "grapes"]
var fruitName = ["macintosh", "fiji", "granny smith", "blood", "mandarin", "tangerine", "cotton candy", "red", "green"]
var price = [2, 3, 6, 1, 3, 2, 2, 4, 6]
var salesQuantity = [15, 32, 26, 12, 14, 15, 13, 31, 12]
var countPrice = 0
var countAmt = 0

function myFunction() {
    for (var i = 0; i < price.length; i++) {
        countAmt += salesQuantity[i]
        countPrice += price[i] * salesQuantity[i]
        console.log("Felicia sold " + salesQuantity[i] + " " + fruitName[i] + " " + fruitTypes[i] + " at the price of $" + price[i] + " each, for a total of $" + (price[i] * salesQuantity[i]) + ".")
    }
    console.log("Felicia sold a total of " + countAmt + " fruits the whole day, for a total daily sales amount of $" + countPrice + ".")
}

myFunction();