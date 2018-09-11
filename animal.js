const cat = {
  name: 'Misha',
  sound: 'meow'
}

const animalSound = (animal) => `${animal.name} makes ${animal.sound} sound`

const catSays = animalSound(cat)
console.log(catSays)
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



