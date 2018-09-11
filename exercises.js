const { firstPet, secondPet, thirdPet, fourthPet, fifthPet } = require('./animals.js')

const animalSound = (animal) => `${animal.name} makes ${animal.sound} sound`

const catSays = animalSound(firstPet)

// (animal) => {
//   return (`${animal.name} makes ${animal.sound} sound`)
// }(cat)

// (animal) => {
//   return (`${animal.name} makes ${animal.sound} sound`)
// }({
//   name: 'Misha',
//   sound: 'miau'
// })

// ({
//   name: 'Misha',
//   sound: 'miau'
// }) => {
//   return (`${'Misha'} makes ${'miau'} sound`)
// }

// 'Misha makes miau sound'

// ## Exercises <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// Animals

// (All these functions need to take only one argument.)

// Use the data above (with your own pets) to:

// Write 15 ES6 FARTs (one line body assigned)  


const firstPetPornstarName = (animal) => animal.pornstarName 
console.log(firstPetPornstarName(firstPet))

const petInfo = (animal) => `${animal.name} address is ${animal.address} - ${animal.postCode}`
console.log(petInfo(fifthPet))

const hasOwner = (animal) => ` Does ${animal.name} has owner? ${animal.owner}`
console.log(hasOwner(secondPet))

const isAlive = (item) => `${item.pornstarName} is still alive? ${item.alive}`
console.log(isAlive(thirdPet))

const eats = (element) => `${element.name} type ${element.type} eats ${element.food}`
console.log(eats(fourthPet))

const nameLength = (animal) => `${animal.name} length name is ${animal.name.length}`
console.log(nameLength(firstPet))

const whereIsIt = (item) => `${item.name} is alive and lives in ${item.address}. With its owner? ${item.owner}`
console.log(whereIsIt(secondPet))

const typeOfAnimal = (item) => `${item.name} is a ${item.type}`
console.log(typeOfAnimal(fourthPet))

const contactEmail = (element) => `${element.name} contact email is ${element.email}`
console.log(contactEmail(firstPet))

const animalHobby = (animal) => `${animal.name}'s hobby is ${animal.hobby} `
console.log(animalHobby(secondPet))

const boringPet = (animal) => `${animal.name} has a hobby? ${animal.hobby}. Does it make any sound? ${animal.sound} `
console.log(boringPet(fifthPet))

const capitalizeName = (animal) => `${animal.name.toUpperCase()}`
console.log(capitalizeName(thirdPet))

const splitPornstarName = (item) => `${item.name.split('')}`
console.log(splitPornstarName(secondPet))

const animalAndSound = item => (`${item.name + item.sound }`)
console.log(animalAndSound(firstPet))

const splitEmail = item => (`${item.email.split('')}`)
console.log(splitEmail(fourthPet))

// Write 15 three (or more) lines body assigned ES6 FARTs, which have no return statement

// Write 15 three (or more) lines body assigned ES6 FARTs, which have return statement

// Write the same 45 functions above as ES5 assigned functions (append 'Es5' to the token name)

// Write the same functions as concise ES5 object method functions (append 'Es5Concise' to the token name)

// Write the same functions as ES6 object method functions (append 'Es6Method' to the token name)

//  Write the same functions as concise ES6 object method functions (append 'Es6ConciseMethod' to the token name)

// Execute (call) all of the functions with the example objects as parameters.
// In comments below each, show how the compiler substitutes token names with their stored values.


// Write the functions anonymously (WITH NO ASSIGNED TOKEN) in all these styles. EXECUTE all of the anonymous functions immediately.
