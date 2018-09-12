// Execute (call) all of the functions with the example objects as agruments.
// In comments below each, show how the compiler substitutes token names with their stored values.
const { firstPet, secondPet, thirdPet, fourthPet, fifthPet } = require('./animals.js')

// One line implicit return FARTs
const pornstarName = (animal) => animal.pornstarName
const secondPetPornStar = pornstarName(secondPet)
// const secondPetPornStar = pornstarName(secondPet)
// -------------------------- substitute object for secondPet
// pornstarName( {
//   name: 'Camila',
//   type: 'Rottweiler/Labrador',
//   sound: 'grrr',
//   owner: false,
//   food: 'dog food',
//   hobby: 'barking late at night',
//   email: 'camila@gmail.com.mx',
//   pornstarName: 'Cami',
//   address: 'Ahuatla #60 Las cruces',
//   postCode: '10330',
//   alive: true,
//   lost: false
// })
// -------------------------- substitute function for pornstarName
// ((animal) =>  return animal.pornstarName)({
//   name: 'Camila',
//   type: 'Rottweiler/Labrador',
//   sound: 'grrr',
//   owner: false,
//   food: 'dog food',
//   hobby: 'barking late at night',
//   email: 'camila@gmail.com.mx',
//   pornstarName: 'Cami Ahuatla',
//   address: 'Ahuatla #60 Las cruces',
//   postCode: '10330',
//   alive: true,
//   lost: false
// })
// -------------------------- substitute argument for parameter
// (({
//   name: 'Camila',
//   type: 'Rottweiler/Labrador',
//   sound: 'grrr',
//   owner: false,
//   food: 'dog food',
//   hobby: 'barking late at night',
//   email: 'camila@gmail.com.mx',
//   pornstarName: 'Cami Ahuatla',
//   address: 'Ahuatla #60 Las cruces',
//   postCode: '10330',
//   alive: true,
//   lost: false
// }) => return {
//   name: 'Camila',
//   type: 'Rottweiler/Labrador',
//   sound: 'grrr',
//   owner: false,
//   food: 'dog food',
//   hobby: 'barking late at night',
//   email: 'camila@gmail.com.mx',
//   pornstarName: 'Cami Ahuatla',
//   address: 'Ahuatla #60 Las cruces',
//   postCode: '10330',
//   alive: true,
//   lost: false
// }.pornstarName)
// -------------------------- get property pornstarName
// const secondPetPornStar =  'Cami Ahuatla'

const petInfo = (animal) => `${animal.name} address is ${animal.address} - ${animal.postCode}`
const myPetInfo = petInfo(thirdPet)
//  petInfo(thirdPet)
// -------------------------- substitute object for token thirdPet
//  petInfo({
//   name: 'Rusito',
//   type: 'Russian blue',
//   sound: 'meow meow',
//   owner: true,
//   food: 'wyskas',
//   hobby: 'sleep over clothes',
//   email: 'rusito@hotmail.com.mx',
//   pornstarName: 'Rusito Azul',
//   address: 'Las cruces',
//   postCode: '10330',
//   alive: false,
//   lost: true
// })
// ------------------------- substitute function for token petInfo
// ((animal) => return `${animal.name} address is ${animal.address} - ${animal.postCode}`)({
//   name: 'Rusito',
//   type: 'Russian blue',
//   sound: 'meow meow',
//   owner: true,
//   food: 'wyskas',
//   hobby: 'sleep over clothes',
//   email: 'rusito@hotmail.com.mx',
//   pornstarName: 'Rusito Azul',
//   address: 'Las cruces',
//   postCode: '10330',
//   alive: false,
//   lost: true
// })
// ------------------------- start evaluation, get and substitute properties
// return ((${'Rusito'} address is ${'Las cruces'} - ${'10330'}`)
// -------------------------- evaluate template string
// const myPetInfo = 'Russito address is Las cruces - 10330'

const hasOwner = (animal) => ` Does ${animal.name} has owner? ${animal.owner}`
const fourthPetOwner = hasOwner(fourthPet)
// hasOwner(fourthPet)
// -------------------------- substitute object for token fourthPet
// hasOwner({
//   name: 'Benji',
//   type: 'Hamster',
//   sound: 'tik tik',
//   owner: false,
//   food: 'carrots and crutons',
//   hobby: 'cannibalism',
//   email: 'benji@hotmail.com.mx',
//   pornstarName: 'Blanquito',
//   address: 'Las cruces',
//   postCode: '10330',
//   alive: false,
//   lost: false
// })
// -------------------------- substitute function for token hasOwner
// (animal) => return ` Does ${animal.name} has owner? ${animal.owner}`({
//   name: 'Benji',
//   type: 'Hamster',
//   sound: 'tik tik',
//   owner: false,
//   food: 'carrots and crutons',
//   hobby: 'cannibalism',
//   email: 'benji@hotmail.com.mx',
//   pornstarName: 'Blanquito',
//   address: 'Las cruces',
//   postCode: '10330',
//   alive: false,
//   lost: false
// })
// ------------------------- start evaluation, get and substitute properties
// return ` Does ${animal.name} has owner? ${animal.owner}`
// -------------------------- evaluate template string
// const theOwner = 'Does Benji has owner? false'

const isAlive = (item) => `${item.pornstarName} is still alive? ${item.alive}`
const secondPetLives = isAlive(secondPet)
// isAlive(secondPet)
// -------------------------------- substitute object for token secondPet
// isAlive({
//   name: 'Camila',
//   type: 'Rottweiler/Labrador',
//   sound: 'grrr',
//   owner: false,
//   food: 'dog food',
//   hobby: 'barking late at night',
//   email: 'camila@gmail.com.mx',
//   pornstarName: 'Cami',
//   address: 'Ahuatla #60 Las cruces',
//   postCode: '10330',
//   alive: true,
//   lost: false
// })
// ------------------------------------ substitute function for token isAlive
// (item) => return `${item.pornstarName} is still alive? ${item.alive}` ({
//   name: 'Camila',
//   type: 'Rottweiler/Labrador',
//   sound: 'grrr',
//   owner: false,
//   food: 'dog food',
//   hobby: 'barking late at night',
//   email: 'camila@gmail.com.mx',
//   pornstarName: 'Cami Ahuatla',
//   address: 'Ahuatla #60 Las cruces',
//   postCode: '10330',
//   alive: true,
//   lost: false
// })
// ------------------------- start evaluation, get and substitute properties
// return `${'Cami Ahuatla'} is still alive? ${true}`
// -------------------------- evaluate template string
// const secondPetLives = 'Cami Ahuatla is still alive? true'

const eats = (element) => `${element.name} type ${element.type} eats ${element.food}`
const firstPetEats = eats(firstPet)
// eats(firstPet)
// ----------------------------------- substitute object for token firstPet
// eats({
//   name: 'Misha',
//   type: 'Pesian cat',
//   sound: 'meow',
//   owner: true,
//   food: 'wyskas',
//   hobby: 'drinking water from the toilet',
//   email: 'misha@hotmail.com.mx',
//   pornstarName: 'Michos',
//   address: 'Ahuatla #60 Las cruces',
//   postCode: '10330',
//   alive: false,
//   lost: false
// })
// -------------------------- substitute function for token eats
// (element) => return `${element.name} type ${element.type} eats ${element.food}`({
//   name: 'Misha',
//   type: 'Pesian cat',
//   sound: 'meow',
//   owner: true,
//   food: 'wyskas',
//   hobby: 'drinking water from the toilet',
//   email: 'misha@hotmail.com.mx',
//   pornstarName: 'Michos',
//   address: 'Ahuatla #60 Las cruces',
//   postCode: '10330',
//   alive: false,
//   lost: false
// })
// -------------------------------- start evaluation, get and substitute properties
// return `${'Misha'} type ${'Pesian cat'} eats ${'wyskas'}`
// -------------------------- evaluate template string
// const firstPetEats = 'Misha type Persian cat eats wyskas'

// Three line FARTs, with no explicit return

const animalInfo = (animal) => {
  const personalInfo = animal.name + animal.type
  const contact = animal.email + ' ' + animal.address + ' ' + animal.postCode
  const result = personalInfo + contact
}

const myPetInfo = animalInfo(secondPet)
// animalInfo(secondPet)
// ----------------------------------- substitute object for token secondPet
// animalInfo({
//   name: 'Camila',
//   type: 'Rottweiler/Labrador',
//   sound: 'grrr',
//   owner: false,
//   food: 'dog food',
//   hobby: 'barking late at night',
//   email: 'camila@gmail.com.mx',
//   pornstarName: 'Cami',
//   address: 'Ahuatla #60 Las cruces',
//   postCode: '10330',
//   alive: true,
//   lost: false
// })
// -------------------------- substitute function for token animalInfo
// (animal) => {
//   const personalInfo = animal.name + animal.type
//   const contact = animal.email + animal.address + animal.postCode
//   const result = personalInfo + contact
// }({
//   name: 'Camila',
//   type: 'Rottweiler/Labrador',
//   sound: 'grrr',
//   owner: false,
//   food: 'dog food',
//   hobby: 'barking late at night',
//   email: 'camila@gmail.com.mx',
//   pornstarName: 'Cami',
//   address: 'Ahuatla #60 Las cruces',
//   postCode: '10330',
//   alive: true,
//   lost: false
// })
// -------------------------------- start evaluation and substitute properties
// {
//   const personalInfo = 'Camila' + 'Rottweiler/Labrador'
//   const contact = 'camila@gmail.com.mx' + 'Ahuatla #60 Las cruces' + '10330'
//   const result = 'Camila Rottweiler/Labrador' + 'camila@gmail.com.mx Ahuatla #60 Las cruces 10330'
// }
// ---------------------------------- evaluate template string result
// const result = 'Camila Rottweiler/Labrador camila@gmail.com.mx Ahuatla #60 Las cruces 10330'

const reverseAnimalNames = (animal) => {
  const splitName = animal.name.split()                                                                                                    
  const reverseName = splitName.reverse()
  const result = reverseName.join(' ')
}

const reversedNames = reverseAnimalNames(thirdPet)
// reverseAnimalNames(thirdPet)
// -------------------------------- substitute object token thirdPet
// reverseAnimalNames({
//   name: 'Rusito',
//   type: 'Russian blue',
//   sound: 'meow meow',
//   owner: true,
//   food: 'wyskas',
//   hobby: 'sleep over clothes',
//   email: 'rusito@hotmail.com.mx',
//   pornstarName: 'Rusito Azul',
//   address: 'Las cruces',
//   postCode: '10330',
//   alive: false,
//   lost: true
// })
// ---------------------------------- substitute function for token for reverseAnimalNames
// ((animal) => return {
//   const splitName = animal.name.split()                                                                                                    
//   const reverseName = splitName.reverse()
//   const result = reverseName.join(' ')
// })({
//   name: 'Rusito',
//   type: 'Russian blue',
//   sound: 'meow meow',
//   owner: true,
//   food: 'wyskas',
//   hobby: 'sleep over clothes',
//   email: 'rusito@hotmail.com.mx',
//   pornstarName: 'Rusito Azul',
//   address: 'Las cruces',
//   postCode: '10330',
//   alive: false,
//   lost: true
// })
// ----------------------------------------- start evaluation and substitute properties
// (animal) => {
//   const splitName = ['R', 'u', 's', 'i', 't', 'o']                                                                                                    
//   const reverseName = ['o', 't', 'i', 's', 'u', 'R']
//   const result = 'otisuR'
// }
// ----------------------------------------- evaluate template string result
//  const reversedNames = 'otisuR'

const capitalize = (item) => {
  const str = item.hobby
  const capitalizeStr = str.toUpperCase()
  const result = `${item.name} likes ${capitalizeStr}`
}

const strCapitalized = capitalize(secondPet)
// capitalize(secondPet)
// ---------------------------------- substitute object token secondPet
// capitalize({
//   name: 'Camila',
//   type: 'Rottweiler/Labrador',
//   sound: 'grrr',
//   owner: false,
//   food: 'dog food',
//   hobby: 'barking late at night',
//   email: 'camila@gmail.com.mx',
//   pornstarName: 'Cami',
//   address: 'Ahuatla #60 Las cruces',
//   postCode: '10330',
//   alive: true,
//   lost: false
// })
// --------------------------------- substitute function token capitalize
// ((item) => {
//   const str = item.hobby
//   const capitalizeStr = str.toUpperCase()
//   const result = `${item.name} likes ${capitalizeStr}`
// })({
//   name: 'Camila',
//   type: 'Rottweiler/Labrador',
//   sound: 'grrr',
//   owner: false,
//   food: 'dog food',
//   hobby: 'barking late at night',
//   email: 'camila@gmail.com.mx',
//   pornstarName: 'Cami',
//   address: 'Ahuatla #60 Las cruces',
//   postCode: '10330',
//   alive: true,
//   lost: false
// })
// ------------------------------------ start evaluation and substitute properties
// (item) => return {
//   const str = 'barking late at night'
//   const capitalizeStr = 'BARKING LATE AT NIGHT'
//   const result = `${'Camila'} likes ${'BARKING LATE AT NIGHT'}`
// }
// ----------------------------------------- evaluate template string result
// const strCapitalized = 'Camila likes BARKING LATE AT NIGHT'

const toUpperCase = (item) => {
  const splitStr = item.hobby.split(' ')
  const upperStr = splitStr.map(word => word.charAt(0).toUpperCase() + word.substring(1))
  console.log(upperStr.join(' '))
}
const fisrtPetToUpperCase = toUpperCase(firstPet)
// toUpperCase(firstPet)
// ------------------------------- substitute object token firstPet
// toUpperCase({
//   name: 'Misha',
//   type: 'Pesian cat',
//   sound: 'meow',
//   owner: true,
//   food: 'wyskas',
//   hobby: 'drinking water from the toilet',
//   email: 'misha@hotmail.com.mx',
//   pornstarName: 'Michos',
//   address: 'Ahuatla #60 Las cruces',
//   postCode: '10330',
//   alive: false,
//   lost: false
// })
// ---------------------------- substitute function token toUpperCase
// ((item) => {
//   const splitStr = item.hobby.split(' ')
//   const upperStr = splitStr.map(word => word.charAt(0).toUpperCase() + word.substring(1))
//   console.log(upperStr.join(' '))
// })({
//   name: 'Misha',
//   type: 'Pesian cat',
//   sound: 'meow',
//   owner: true,
//   food: 'wyskas',
//   hobby: 'drinking water from the toilet',
//   email: 'misha@hotmail.com.mx',
//   pornstarName: 'Michos',
//   address: 'Ahuatla #60 Las cruces',
//   postCode: '10330',
//   alive: false,
//   lost: false
// })
// ------------------------------- start evaluation and substitute properties
// (item) => {
//   const splitStr = ['drinking', 'water', 'from', 'the', 'toilet']
//   const upperStr = splitStr.map(word => word.charAt(0).toUpperCase() + word.substring(1))
//   const upperStr = splitStr.map( [(fn 'D'), (fn 'W'), (fn 'F'), (fn 'T'), (fn 'T')] +  [(fn + 'rinking'), (fn + 'ater') (fn + 'rom'), (fn + 'he), (fn + 'oilet')])
//   console.log(upperStr.join('Drinking Water From The Toilet'))
// }
// ---------------------------------- evaluate template string result
// const firstPetToUpperCase = 'Drinking Water From The Toilet'

const dashedPostCode = (item) => {
  const postCode = item.postCode.split('')
  const result = postCode.join('-')
}

const dashed = dashedPostCode(thirdPet)
// dashedPostCode(thirdPet)
// ------------------------------- substitute object token firstPet
// // dashedPostCode({
//   name: 'Rusito',
//   type: 'Russian blue',
//   sound: 'meow meow',
//   owner: true,
//   food: 'wyskas',
//   hobby: 'sleep over clothes',
//   email: 'rusito@hotmail.com.mx',
//   pornstarName: 'Rusito Azul',
//   address: 'Las cruces',
//   postCode: '10330',
//   alive: false,
//   lost: true
// })
// ------------------------------------ substitute function token dashedPostCode
// ((item) => {
//   const postCode = item.postCode.split('')
//   const result = postCode.join('-')
// })({
//   name: 'Rusito',
//   type: 'Russian blue',
//   sound: 'meow meow',
//   owner: true,
//   food: 'wyskas',
//   hobby: 'sleep over clothes',
//   email: 'rusito@hotmail.com.mx',
//   pornstarName: 'Rusito Azul',
//   address: 'Las cruces',
//   postCode: '10330',
//   alive: false,
//   lost: true
// })
// ----------------------------------- start evaluation and substitute properties
// (item) => return {
//   const postCode = ['1', '0', '3', '3', '0']
//   const result = '1-0-3-3-0'
// }
// ---------------------------------- evaluate template string result
// const dashed = '1-0-3-3-0'

// Three line FART, with explicit return
const objKeysR = (animal) => {
  const keys = Object.keys(animal)
  const result = keys.join(', ')
  return result
}

const firstPetKeys = objKeysR(firstPet)
console.log(firstPetKeys)

// const firstPetKeys = objKeysR(firstPet)
// ---------------- substitute for firstPet
// objKeysR({name: 'Misha',
// type: 'Pesian cat',
// sound: 'meow',
// owner: true,})
// ---------------- substitute for objKeysR
// ((animal) => {
//   const keys = Object.keys(animal)
//   const result = keys.join(', ')
//   return result
// })({name: 'Misha',
// type: 'Pesian cat',
// sound: 'meow',
// owner: true,})
// ---------------- substitute parameters for arguments
// ({
//   const keys = ['name', 'type', 'sound', 'owner']
//   const result = keys.join(', ')
//   return result
// })
// )
// ---------------- substitute key into key.join
// ({
//   const keys = ['name', 'type', 'sound', 'owner']
//   const result = ['name', 'type', 'sound', 'owner'].join(', ')
//   return result
// })
// )
// ---------------- substitute into result
// ({
//   const keys = ['name', 'type', 'sound', 'owner']
//   const result = 'name, type, sound, owner'
//   return result
// })
// )
// ---------------- return result
// ({
//   const keys = ['name', 'type', 'sound', 'owner']
//   const result = 'name, type, sound, owner'
//   return 'name, type, sound, owner'
// })
// )
//  const firstPetKeys = 'name, type, sound, owner'
const withOwnerR = (animal) => {
  if (animal.owner === true) {
    return `${animal.name} has owner!`
  } else {
    return `${animal.name} doesnt have owner :-( )`
  }
}

const lostOrDeadR = (animal) => {
  if (animal.lost === true) {
    return `${animal.name} - ${animal.type} is lost - WANTED -`
  } else if (animal.alive != true){
    return `${animal.name} is dead - RIP -`
  }
}

const sortNameR = (element) => {
  const name = element.name.split('')
  const sortedName = name.sort()
  return sortedName
}


const toNumberR = (item) => {
  const result = parseInt(item.postCode)
  return result
}
