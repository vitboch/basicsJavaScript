//1 Array
const cars = ['Mazda', 'Ford', 'BMV', 'Mercedes']
const fib = [1, 1, 2, 3, 5, 8, 13]
const mix = ['Mazda', 'Ford',  2, 3, 5, true, {}]

console.log(cars) //[ 'Mazda', 'Ford', 'BMV', 'Mercedes' ]
console.log(cars.length) //4

//Function
function addItemToEnd(newCar) {

}

//Method
cars.push('Porshe') //add a new element to the end
console.log(cars) //[ 'Mazda', 'Ford', 'BMV', 'Mercedes', 'Porshe' ]

cars.unshift('Renault') //add a new element to the beginning
console.log(cars) //[ 'Renault', 'Mazda', 'Ford', 'BMV', 'Mercedes', 'Porshe' ]

const firstItem = cars.shift() //get first element
console.log(firstItem) //Renault
console.log(cars) //[ 'Mazda', 'Ford', 'BMV', 'Mercedes', 'Porshe' ]

const lastItem = cars.pop() //get last element
console.log(lastItem) //Porshe
console.log(cars) //[ 'Mazda', 'Ford', 'BMV', 'Mercedes' ]

console.log(cars.reverse()) //[ 'Mercedes', 'BMV', 'Ford', 'Mazda' ]
