//10 Loops
const cars = ['Mazda', 'Mercedes', 'Ford'] //['Mazda', 'Mercedes', 'Ford']

for (let i = 0; i < cars.length; i++) {
    // console.log(i) //0, 1, 2
    const car = cars[i]
    console.log(car) //Mazda, Mercedes, Ford
}

for (let car of cars) {
    console.log(car) //Mazda, Mercedes, Ford
}