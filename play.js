const name = "Max";
let age = 29;
const hasHobbies = true;

age = 30


const summarizeUser = (userName, userAge, userHasHobby) => `Name is ${userName}, age is ${userAge} and the user has hobbies: ${userHasHobby}`;

// function summarizeUser(userName, userAge, userHasHobby) {
//     return (`Name is ${userName}, age is ${userAge} and the user has hobbies: ${userHasHobby}`);
// }
const add = (a, b) => a + b;

console.log(add(5, 5));

console.log(summarizeUser(name, age, hasHobbies));