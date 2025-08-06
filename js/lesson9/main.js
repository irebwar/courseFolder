// const user1 = {
//   name: "Akam",
//   birthYear: 1995,
//   calculateAge() {
//     return 2024 - this.birthYear;
//   },
//   full_name: "Akam Ali Anor"
// };

// const user2 = {
//   name: "Sara",
//   birthYear: 1998,
//   calculateAge() {
//     return 2024 - this.birthYear;
//   },
//   full_name: "Sara Ahmad Ali"
// };

// console.log(user1);
// console.log(user2);

// class User {
//   constructor(name, birthYear) {
//     console.log(`New User object created for ${name}`);
//     this.name = name;
//     this.birthYear = birthYear;
//   }

//   calculateAge() {
//     const currentYear = new Date().getFullYear();
//     return currentYear - this.birthYear;
//   }

//   greet() {
//     console.log(`Hi, my name is ${this.name} and my age is ${this.calculateAge()}.`);
//   }
// }

// const user1 = new User("Akam Muhammed", 1995);
// const user2 = new User("Sara Qadr", 1998);

// user1.greet();
// user2.greet();

// console.log("User one name is: ",user1.name);
// console.log("User two name is: ",user2.name);

// class Admin extends User {
//   constructor(name, birthYear, role) {
//     super(name, birthYear);
//     this.role = role;
//   }

//   deletePost() {
//     console.log(`${this.name} (${this.role}) is deleting a post ....`);
//   }
// }

// const admin1 = new Admin("Ibrahim Rebwar", 2002, "Super Admin");

// admin1.greet();

// admin1.deletePost();