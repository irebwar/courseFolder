// let passwordGuess;

// do {
// 	// if (passwordGuess !== "1234"){
// 	// 	passwordGuess = prompt("Wrong Inter your password: ");
// 	// }else {
// 	// 	passwordGuess = prompt("Inter your password: ");
// 	// }
// 	let password = (passwordGuess !== "1234" || passwordGuess === undifed) ? passwordGuess = prompt("Inter your password: ") : passwordGuess = prompt("Wrong Inter your password: ");
// } while (passwordGuess !== "1234");

// console.log("Wen");

// const fruits = ["سێو", "مۆز", "پرتەقاڵ"];

// for (const fruit of fruits) {
// 	console.log(fruit);
// }

// for (let i = 0; i < fruits.length; i++) {
// 	console.log(fruit);
// }


// const car = {
//   brand: "Toyota",
//   model: "Camry",
//   year: 2022
// };

// for (const property in car) {
// 	console.log(`${property}: ${car[property]}`)
// }

// for (var i = Things.length - 1; i >= 0; i--) {
// 	for (var i = Things.length - 1; i >= 0; i--) {
// 		Things[i]
// 	}
// }

// ****
// ****
// ****
// ****


// for (let i = 0; i < 4; i++) {
// 	let row = "";
// 	for (let j = 0; j < 4; j++){
// 		row +="* ";
// 	}
// 	console.log(row);
// 	console.log('\n\n');
// }


// *
// **
// ***
// ****

// for (let i = 1; i <= 6; i++){
// 	let row = "";
// 	for (let j = 1; j <= i; j++){
// 		row += "* ";
// 	}
// 	console.log(row);
// 	console.log('\n');

// }







let array1 = [1, 2, 3];
let array2 = ["A", "B", "C"];
let combined = [];

for (let i = 0; i < array1.length; i++) {
	for (let j = 0; j < array2.length; j++){
		combined.push([array1[i], array2[j]])
	}
}

console.log(combined);