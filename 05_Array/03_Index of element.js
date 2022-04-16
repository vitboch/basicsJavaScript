//3 index of element
console.log(cars.indexOf('BMV')) //1

const index = cars.indexOf('BMV')
console.log(cars[index]) //BMV

cars[index] = 'Volkswagen'
console.log(cars) //[ 'Mercedes', 'Volkswagen', 'Ford', 'Mazda' ]

console.log(cars.indexOf('LADA')) //-1 //error