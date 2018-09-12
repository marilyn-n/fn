// Write the same functions as ES5 object method functions (append 'Es5ObjMethod' to the token name)
// ES5 object method


const objMethodOneLineBody = {
  pornstarName: function(animal) {
    animal.pornstarName
  },

  petInfo: function(animal)  {
    animal.name + 'address is' + animal.address + '-' + animal.postCode
  },

  hasOwner: function(animal)  {
    'Does' + animal.name + 'has owner?' + animal.owner
  },
  
  isAlive: function(item)  {
    item.pornstarName + 'is still alive?' + item.alive
  },
  
  eats: function(element)  {
    element.name + 'type '+ element.type + 'eats' + element.food
  }
}

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

const objMethodNoReturn = {
  animalInfo: function(animal) {
    var personalInfo = animal.name + animal.type
    var contact = animal.email + animal.address + animal.postCode
    var result = personalInfo + contact
  },
  
  reverseAnimalNames: function(animal) {
    var splitName = animal.name.split()
    var reverseName = splitName.reverse()
    var result = reverseName.join(' ')
  },
  
  capitalize: function(item) {
    var str = item.hobby
    var capitalizeStr = str.toUpperCase()
    var result = item.name + 'likes' + capitalizeStr
  },
  
  toUpperCase: function(item) {
    var lowerStr = item.hobby.split(' ')
    var upperStr = lowerStr.map(function(element) {
      element.charAt(0).toUpperCase()
    })
    console.log(upperStr)
  },

  dashedPostCode: function(item) {
    var postCode = item.postCode.split('')
    var result = postCode.join('-')
  }
}

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

const objMethodWithReturn = {
  animalInfoR: function(animal)  {
    var personalInfo = animal.name + animal.type
    var contact = animal.email + animal.address + animal.postCode
    var result = personalInfo + contact
    return result
  },
  
  reverseAnimalNamesR: function(animal) {
    var splitName = animal.name.split()
    var reverseName = splitName.reverse()
    var result = reverseName.join(' ')
    return result
  },
  
  capitalizeR: function(item) {
    var str = item.hobby
    var capitalizeStr = str.toUpperCase()
    var result = item.name + 'likes' + capitalizeStr
    return result
  },
  
  toUpperCaseR: function(item) {
    var lowerStr = item.hobby.split(' ')
    var upperStr = lowerStr.map(function(element) {
      element.charAt(0).toUpperCase()
    })
    return upperStr
  },
  
  dashedPostCodeR: function(item) {
    var postCode = item.postCode.split('')
    var result = postCode.join('-')
    return result
  }
  
}