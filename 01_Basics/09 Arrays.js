//9 Arrays
 const cars = ['Mazda', 'Mercedes', 'Ford'] //['Mazda', 'Mercedes', 'Ford']
// const cars = new Array('Mazda', 'Mercedes', 'Ford') //bed practice
console.log(cars[0]) //Mazda
console.log(cars[1]) //Mercedes
console.log(cars[2]) //Ford
console.log(cars.length) //3

cars[0] = 'Porsche' //change array element
console.log(cars) //[ 'Porsche', 'Mercedes', 'Ford' ]

cars[3] = 'Mazda' //expand array with static index
console.log(cars) //[ 'Porsche', 'Mercedes', 'Ford', 'Mazda' ]

cars[cars.length] = 'Lexus' //expand array with dynamic index
console.log(cars) //[ 'Porsche', 'Mercedes', 'Ford', 'Mazda', 'Lexus' ]