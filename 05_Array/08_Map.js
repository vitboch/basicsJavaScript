//8 Map
//method map always gives a new array
const cars = ['Mazda', 'Ford', 'BMV', 'Mercedes']

const upperCaseCars = cars.map(cars => cars.toUpperCase())
console.log(upperCaseCars) //[ 'MAZDA', 'FORD', 'BMV', 'MERCEDES' ]
console.log(cars) //[ 'Mazda', 'Ford', 'BMV', 'Mercedes' ]

const fib = [1, 1, 2, 3, 5, 8, 13]

//the square of each element
const pow2fib = fib.map(num => num ** 2)
console.log(pow2fib) //[1, 1, 4, 9, 25, 64, 169]

//cube of each element
const pow3 = num => num ** 3
const pow3fib = fib.map(pow3)
console.log(pow3fib) //[1, 1, 8, 27, 125, 512, 2197]

//square root for each element
const sqrt = num => Math.sqrt(num)