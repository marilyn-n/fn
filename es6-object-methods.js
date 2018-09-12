// Write the same functions as ES6 object method functions (append 'Es6Method' to the token name)
//  Write the same functions as concise ES6 object method functions (append 'Es6ConciseMethod' to the token name)

// ES6 full arrow function object method 
const objMethodOneLineBody = {
  pornstarName: (animal) => {
    animal.pornstarName
    return undefined
  },

  petInfo: (animal) => {
    `${animal.name} address is ${animal.address} - ${animal.postCode}`
  },

  hasOwner: (animal) =>  {
    ` Does ${animal.name} has owner? ${animal.owner}`
  },

  isAlive: (item) =>  {
    `${item.pornstarName} is still alive? ${item.alive}`
  },

  eats: (element) => {
    `${element.name} type ${element.type} eats ${element.food}`
  }
}

const objMethodNoReturn = {
  animalInfo: (animal) => {
    const personalInfo = animal.name + animal.type
    const contact = animal.email + animal.address + animal.postCode
    const result = personalInfo + contact
  },
  
  reverseAnimalNames: (animal) => {
    const splitName = animal.name.split()
    const reverseName = splitName.reverse()
    const result = reverseName.join(' ')
  },
  
  capitalize: (item) => {
    const str = item.hobby
    const capitalizeStr = str.toUpperCase()
    const result = `${item.name} likes ${capitalizeStr}`
  },
  
  toUpperCase: (item) => {
    const splitStr = item.hobby.split(' ')
    const upperStr = splitStr.map(word => word.charAt(0).toUpperCase() + word.substring(1))
    console.log(upperStr.join(' '))
  },
  
  dashedPostCode: (item) => {
    const postCode = item.postCode.split('')
    const result = postCode.join('-')
  }
}

const objMethodWithReturn = {
  animalInfo: (animal) => {
    const personalInfo = animal.name + animal.type
    const contact = animal.email + animal.address + animal.postCode
    const result = personalInfo + contact
    return result
  },
  
  reverseAnimalNames: (animal) => {
    const splitName = animal.name.split()
    const reverseName = splitName.reverse()
    const result = reverseName.join(' ')
    return result
  },
  
  capitalize: (item) => {
    const str = item.hobby
    const capitalizeStr = str.toUpperCase()
    const result = `${item.name} likes ${capitalizeStr}`
    return result
  },
  
  toUpperCase: (item) => {
    const splitStr = item.hobby.split(' ')
    const upperStr = splitStr.map(word => word.charAt(0).toUpperCase() + word.substring(1))
    return (upperStr.join(' '))
  },
  
  dashedPostCode: (item) => {
    const postCode = item.postCode.split('')
    const result = postCode.join('-')
    return result
  }
}

