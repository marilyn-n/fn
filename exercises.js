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

const petInfo = (animal) => `${animal.name} address is ${animal.address} - ${animal.postCode}`

const hasOwner = (animal) => ` Does ${animal.name} has owner? ${animal.owner}`

const isAlive = (item) => `${item.pornstarName} is still alive? ${item.alive}`

const eats = (element) => `${element.name} type ${element.type} eats ${element.food}`

const nameLength = (animal) => `${animal.name} length name is ${animal.name.length}`

const whereIsIt = (item) => `${item.name} is alive and lives in ${item.address}. With its owner? ${item.owner}`

const typeOfAnimal = (item) => `${item.name} is a ${item.type}`

const contactEmail = (element) => `${element.name} contact email is ${element.email}`

const animalHobby = (animal) => `${animal.name}'s hobby is ${animal.hobby} `

const boringPet = (animal) => `${animal.name} has a hobby? ${animal.hobby}. Does it make any sound? ${animal.sound} `

const capitalizeName = (animal) => `${animal.name.toUpperCase()}`

const splitPornstarName = (item) => `${item.name.split('')}`

const animalAndSound = item => (`${item.name + item.sound }`)

const splitEmail = item => (`${item.email.split('')}`)

// Write 10 ES6 FARTs (three (or more) lines body assigned, which have no return statement)

const animalInfo = (animal) => {
  const personalInfo = animal.name + animal.type
  const contact = animal.email + animal.address + animal.postCode
  const result = personalInfo + contact
}

const reverseAnimalNames = (animal) => {
  const splitName = animal.name.split()
  const reverseName = splitName.reverse()
  const result = reverseName.join(' ')
}

const capitalize = (item) => {
  const str = item.hobby
  const capitalizeStr = str.toUpperCase()
  const result = `${item.name} likes ${capitalizeStr}`
}

const toUpperCase = (item) => {
  const lowerStr = item.hobby.split(' ')
  const upperStr = lowerStr.map(element => element.charAt(0).toUpperCase())
  console.log(upperStr)
}

const dashedPostCode = (item) => {
  const postCode = item.postCode.split('')
  const result = postCode.join('-')
}

const objKeys = (animal) => {
  const keys = Object.keys(animal)
  const result = keys.join(', ')
}

const withOwner = (animal) => {
  if (animal.owner === true) {
    console.log(`${animal.name} has owner!`)
  } else {
    console.log(`${animal.name} doesnt have owner :-( )`)
  }
}

const lostOrDead = (animal) => {
  if (animal.lost === true) {
    console.log(`${animal.name} - ${animal.type} is lost - WANTED -`)
  } else if (animal.alive != true){
    console.log(`${animal.name} is dead - RIP -`)
  }
}

const sortName = (element) => {
  const name = element.name.split('')
  const sort = name.sort()
}


const toNumber = (item) => {
  const result = parseInt(item.postCode)
  console.log(result)
}

// Write 15 ES6 FARTs (three (or more) lines body assigned , which have return statement)

// Write the same 45 functions above as ES5 assigned functions (append 'Es5' to the token name)

// Write the same functions as concise ES5 object method functions (append 'Es5Concise' to the token name)

// Write the same functions as ES6 object method functions (append 'Es6Method' to the token name)

//  Write the same functions as concise ES6 object method functions (append 'Es6ConciseMethod' to the token name)

// Execute (call) all of the functions with the example objects as parameters.
// In comments below each, show how the compiler substitutes token names with their stored values.
// Write the functions anonymously (WITH NO ASSIGNED TOKEN) in all these styles. EXECUTE all of the anonymous functions immediately.
