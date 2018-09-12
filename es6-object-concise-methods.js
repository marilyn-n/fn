//  Write the same functions as concise ES6 object method functions (append 'Es6ConciseMethod' to the token name)

// ES6 concise object method 
const objMethodOneLineBody = {
  pornstarName (animal) {
    animal.pornstarN
  },

  petInfo (animal) {
    `${animal.name} address is ${animal.address} - ${animal.postCode}`
  },

  hasOwner (animal)  {
    ` Does ${animal.name} has owner? ${animal.owner}`
  },

  isAlive (item)  {
    `${item.pornstarName} is still alive? ${item.alive}`
  },

  eats (element) {
    `${element.name} type ${element.type} eats ${element.food}`
  }
}

const objMethodNoReturn = {
  animalInfo(animal) {
    const personalInfo = animal.name + animal.type
    const contact = animal.email + animal.address + animal.postCode
    const result = personalInfo + contact
  },
  
  reverseAnimalNames(animal) {
    const splitName = animal.name.split()
    const reverseName = splitName.reverse()
    const result = reverseName.join(' ')
  },
  
  capitalize(item) {
    const str = item.hobby
    const capitalizeStr = str.toUpperCase()
    const result = `${item.name} likes ${capitalizeStr}`
  },
  
  toUpperCase(item) {
    const splitStr = item.hobby.split(' ')
    const upperStr = splitStr.map(word => word.charAt(0).toUpperCase() + word.substring(1))
    console.log(upperStr.join(' '))
  },
  
  dashedPostCode(item) {
    const postCode = item.postCode.split('')
    const result = postCode.join('-')
  }
}

const objMethodWithReturn = {
  objKeysR(animal) {
    const keys = Object.keys(animal)
    const result = keys.join(', ')
    return result
  },
  
  withOwnerR(animal) {
    if (animal.owner === true) {
      return `${animal.name} has owner!`
    } else {
      return `${animal.name} doesnt have owner :-( )`
    }
  },
  
  lostOrDeadR(animal) {
    if (animal.lost === true) {
      return `${animal.name} - ${animal.type} is lost - WANTED -`
    } else if (animal.alive != true){
      return `${animal.name} is dead - RIP -`
    }
  },
  
  sortNameR(element) {
    const name = element.name.split('')
    const sortedName = name.sort()
    return sortedName
  },
  
  
  toNumberR(item) {
    const result = parseInt(item.postCode)
    console.log(result)
    return result
  }
  
}
