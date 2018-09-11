// ES6 arrow function
const greeting = name => `Hello ${name}`
greeting('Maria')
// (name => `Hello ${name}`)('Maria')
// ('Maria' => `Hello ${'Maria'}`)
// ('Maria' => `Hello ${'Maria'}`)
// ('Maria' => `Hello Maria`)
// ('Maria' => 'Hello Maria')
// ('Hello Maria')

// bad ES5 function declaration
// never use it  
function greetingES5fd (name) { 
  return ('Hello' + name)
}

// assigned ES5 function expression
var greetingES5 = function(name) {
  return ('Hello' + name)
}

// ES3 functon construction
// never use
var greetingES3 = new Function(name, 'return ("Hello" + name)');

// ES5 object method
const obj = {
  a: 1,
  printy: function() {
    console.log('hello')
  }
}

obj.printy()

const myVue = {

  data: {
    a: 1
  },

  created: function () {
    console.log('a is: ' + this.a)
  }

}

// ES5 Contructor method
var Car = function () {
  this.make = 'vw',
  this.move = function () {}
}

Car.prototype.printMake = function () {}


// ES6 concise object method 
const obj2 = {
  a: 1,
  printy () {
    console.log('hello')
  }
}

obj2.printy()

class Car {
  constructor() {
    this.make = 'vw'
  }

  move() {

  }
}

(function (str) {
  return str.toUpperCase()
}) ('luis miguel')

const capitalize = (function (str) {
  return str.toUpperCase()
})

capitalize('luis miguel')

const capitalizar = (function (str) {
  return str.toUpperCase()
})

capitalizar('luis miguel')

(function (str) {
  return str.toUpperCase()
})('luis miguel')