var fruitNames = ["Apples", "Oranges", "Grapes"]
var fruitTypes = [
    ["Gala", "Fuji", "Honeycrisp"],
    ["Navel", "Cara Cara", "Blood"],
    ["Moon Drops", "Concord", "Cotton Candy"]
]
var price = [
    [2, 4, 5],
    [3, 6, 2],
    [4, 7, 8]
]
var salesQuantity = [
    [5, 8, 14],
    [12, 23, 11],
    [25, 16, 21]
]
var fruitStock = [
    [50, 50, 50],
    [50, 50, 50],
    [50, 50, 50]
]
var countPrice = 0
var countAmt = 0
var overStock = 0
var overstockTotal = 0

function myFunction () {
	for (var i = 0; i < price.length; i++) {
        for (var j = 0; j < price[i].length; j++) {
  	countAmt += salesQuantity[i][j]
		countPrice += price[i][j]*salesQuantity[i][j]
            overStock = fruitStock[i][j]-salesQuantity[i][j]
            overstockTotal += fruitStock[i][j]-salesQuantity[i][j]
        console.log("Felicia sold " + salesQuantity[i][j] + " " + fruitTypes[i][j] + " " + fruitNames[i] + " at the price of $" + price[i][j] + " each, for a total of $" + (price[i][j] * salesQuantity[i][j]) + ". " + overStock + " remained unsold, for a total missed profit of $" + overStock*price[i][j] + ".")
        }
    } console.log("Felicia sold a total of " + countAmt + " fruits the whole day, for a total daily sales amount of $" + countPrice + ".")
}
function myFunctionB () {
	for (var i = 0; i < price.length; i++) {
        for (var j = 0; j < price[i].length; j++) {
            console.log(fruitNames[i] + ": " + fruitTypes[i][j])
        }
    }
}



myFunction()
myFunctionB()


