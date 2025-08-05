// const player = {
// 	name: "Zana", 
// 	health: 100,
// 	level: 5,
// 	attack: function() {
// 		console.log(`${this.name} id attacking!`);
// 	},
// 	takeDamage: function(damageAmout) {
// 		this.health = this.health - damageAmout;
// 		console.log(`${this.name} took ${damageAmout} damage. Health is now ${this.health}`);
// 	} 
// }

// // console.log(player.name);

// player.attack();

// let damage = 20;

// player.takeDamage(damage);


// const modernPlayer = {
// 	name: "Lana",
// 	health: 120,
// 	attack() {
// 		console.log(`${this.name} Attacks with magic!`);
// 	},

// 	takeDamage(damageAmount) {
// 		this.health -= damageAmount;
// 		console.log(`${this.name}'s health is now ${this.health}.`);
// 	}
// }

// modernPlayer.attack();
// modernPlayer.takeDamage(40);


// const movie = {
// 	title: "Inception",
// 	director: "Nolan",
// 	releseYear: 2019
// };

// const title = movie.title;
// const director = movie.director;
// console.log(`Movie: ${title}, by ${director}.`)

// const {title, director, releseYear} = movie;

// console.log(`The movie is ${title}, which was relesed in ${releseYear}.`);



// const jsonString = '{ "name": "Laptop","price": 1200}';

// const product = JSON.parse(jsonString);

// console.log(product);

// const userObject = {
// 	id: 1,
// 	username: "Zana_dev",
// 	age: 23,
// }

// const StringToSend = JSON.stringify(userObject);

// console.log(StringToSend);