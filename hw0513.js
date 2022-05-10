var firstName = ["Arnell", "Mike", "John", "Jeff", "Taylor", "Richies", "Joel", "Freddy", "Elvis", "Brett", "Lujein", "Gabriel", "Simon", "Manny", "Pierre"]
var lastName = ["Milhouse", "Ferrara", "Gillard", "Mitsou", "Blais", "Luong", "Fernandez", "Canido", "Aibangbee", "Marcotte", "Suliman", "Sherman", "Morris", "Lee", "Edouard Fils"]
var count = 0

function myFunction () {
	for (var i = 0; i < firstName.length; i++) {
		count++
			console.log(`${count}. ${firstName[i]} ${lastName[i]}, contains ${firstName[i].length + lastName[i].length} letters`)
	}
		console.log(`Total number of students is ${count}`)
}

myFunction()