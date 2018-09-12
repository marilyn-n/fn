// Write 15 functions above as ES5 assigned functions (append 'Es5' to the token name)

var firstPetPornstarName = function(animal) {
  animal.pornstarName
}

var petInfo = function(animal)  {
  animal.name + 'address is' + animal.address + '-' + animal.postCode
}

var hasOwner = function(animal)  {
  'Does' + animal.name + 'has owner?' + animal.owner
}

var isAlive = function(item)  {
  item.pornstarName + 'is still alive?' + item.alive
}

var eats = function(element)  {
  element.name + 'type '+ element.type + 'eats' + element.food
}

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

var animalInfo = function(animal) {
  var personalInfo = animal.name + animal.type
  var contact = animal.email + animal.address + animal.postCode
  var result = personalInfo + contact
}

var reverseAnimalNames = function(animal) {
  var splitName = animal.name.split()
  var reverseName = splitName.reverse()
  var result = reverseName.join(' ')
}

var capitalize = function(item) {
  var str = item.hobby
  var capitalizeStr = str.toUpperCase()
  var result = item.name + 'likes' + capitalizeStr
}

var toUpperCase = function(item) {
  var lowerStr = item.hobby.split(' ')
  var upperStr = lowerStr.map(function(element) {
    element.charAt(0).toUpperCase()
  })
  console.log(upperStr)
}

var dashedPostCode = function(item) {
  var postCode = item.postCode.split('')
  var result = postCode.join('-')
}

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
var animalInfoR = function(animal)  {
  var personalInfo = animal.name + animal.type
  var contact = animal.email + animal.address + animal.postCode
  var result = personalInfo + contact
  return result
}

var reverseAnimalNamesR = function(animal) {
  var splitName = animal.name.split()
  var reverseName = splitName.reverse()
  var result = reverseName.join(' ')
  return result
}

var capitalizeR = function(item) {
  var str = item.hobby
  var capitalizeStr = str.toUpperCase()
  var result = item.name + 'likes' + capitalizeStr
  return result
}

var toUpperCaseR = function(item) {
  var lowerStr = item.hobby.split(' ')
  var upperStr = lowerStr.map(function(element) {
    element.charAt(0).toUpperCase()
  })
  return upperStr
}

var dashedPostCodeR = function(item) {
  var postCode = item.postCode.split('')
  var result = postCode.join('-')
  return result
}
