//1 Variables
//camelCase
// const firstName = 'Vit' //string
// const  age = 40 //number
// const isProgrammer = true //boolean

// const _ = 'private'
// const $ = 'some value'

//const if = 'no' //err
// const withNum = '5'
// const 5withNum = '5' //err

//2 Mutation
// console.log('Person\'s name: ' + firstName + ' and the person\'s age: ' + age)
// alert('Person\'s name: ' + firstName + ' and the person\'s age: ' + age)

// const lastName = prompt('Enter last name')
// alert(firstName + ' ' + lastName)

//3 Operators
// let currentYear = 2022
// const birthYear = 1981

// const age = currentYear - birthYear
// console.log(age)

// const a = 10
// const b = 5

// let c = 32
// c = c + a
// c += a
// c -= a
// c *= a
// c /= a

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(currentYear++)
// console.log(--currentYear)

//4 Data types
// const firstName = 'Vit'
// const  age = 40
// const isProgrammer = true
// let x
// console.log(typeof firstName) //string
// console.log(typeof age) //number
// console.log(typeof isProgrammer) //boolean
// console.log(typeof x) //undefined
// console.log(typeof null) //object

//5 Operators precedence
// const fullAge = 40
// const birthYear = 1981
// const currentYear = 2022

// > < >= <=
// const isFullAge = currentYear - birthYear >= fullAge //41 >= 40 => true
// console.log(isFullAge) //true

//6 Conditional statements
// const  courseStatus = 'pending' //ready, fail, pending
//
// if (courseStatus === 'ready') {
//     console.log('The course is ready, and you can take it')
// } else if (courseStatus === 'pending') {
//     console.log('The course is currently under development')
// } else {
//     console.log('Course failed')
// }
//
// const isReady = true

// if (isReady) {
//     console.log('Everything is ready')
// } else {
//     console.log('Everything is not ready')
// }

// // Ternary expression
// isReady ? console.log('Everything is ready') : console.log('Everything is not ready')

// const num1 = 42 //number
// const num2 = '42' //string
//
// console.log(num1 == num2) //true
// console.log(num1 === num2) //false

//7 Boolean logic
// console.log(true && true) //true
// console.log(false && true) //false
// console.log(true && false) //false
// console.log(false && false) //false
//
// console.log(true || true) //true
// console.log(false || true) //true
// console.log(true || false) //true
// console.log(false || false) //false

// console.log(!true) //false
// console.log(!!true) //true

//8 Function
// function calculateAge(year) {
//     return 2022 - year
// }
//
// const myAge = calculateAge(1981)
// console.log(myAge) //41
//
// function logInfoAbout(name, year) {
//     const age = calculateAge(year)
//
//     if (age > 0) {
//         console.log('A person named ' + name + ' now has an age ' + age)
//     } else {
//         console.log('Actually this is the future')
//     }
// }
//
// logInfoAbout('VitBoch', 1981) //A person named VitBoch now has an age 41
// logInfoAbout('Ivan', 1990) //A person named Ivan now has an age 32
// logInfoAbout('Spyder man', 2395) //Actually this is the future

//9 Arrays
//  const cars = ['Mazda', 'Mercedes', 'Ford'] //['Mazda', 'Mercedes', 'Ford']
// // const cars = new Array('Mazda', 'Mercedes', 'Ford') //bed practice
// console.log(cars[2]) //Ford
// console.log(cars.length) //3
//
// cars[0] = 'Porsche'
// console.log(cars) //[ 'Porsche', 'Mercedes', 'Ford' ]
//
// cars[3] = 'Mazda'
// console.log(cars) //[ 'Porsche', 'Mercedes', 'Ford', 'Mazda' ]
// cars[cars.length] = 'Lexus'
// console.log(cars) //[ 'Porsche', 'Mercedes', 'Ford', 'Mazda', 'Lexus' ]

//10 Loops
// const cars = ['Mazda', 'Mercedes', 'Ford'] //['Mazda', 'Mercedes', 'Ford']

// for (let i = 0; i < cars.length; i++) {
//     // console.log(i) //0, 1, 2
//     const car = cars[i]
//     console.log(car) //Mazda, Mercedes, Ford
// }

// for (let car of cars) {
//     console.log(car) //Mazda, Mercedes, Ford
// }

//11 Objects
// const person = new Object() //bed practice
const person = {
    firstName: 'Vit',
    lastName: 'Boch',
    year: 1981,
    languages: ['Ru', 'En', 'De'],
    hasWife: true,
    greet: function () {
        console.log('greet from person')
    }
}

// console.log(person.firstName) //Vit
console.log(person['lastName']) //Boch
const key = 'languages'
console.log(person[key]) //[ 'Ru', 'En', 'De' ]
const keyData = 'year'
console.log(person[keyData]) //1981
person.greet() //greet from person

