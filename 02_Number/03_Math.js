//3 Math
console.log(Math.E) //2.718281828459045
console.log(Math.PI) //3.141592653589793

console.log(Math.sqrt(25)) //5
console.log(Math.pow(5, 3)) //125
console.log(Math.abs(-42)) //42
console.log(Math.max(42, 12, 33 ,100, 2)) //100
console.log(Math.min(42, 12, 33 ,100, 2)) //2
console.log(Math.floor(4.6)) //4
console.log(Math.ceil(4.6)) //5
console.log(Math.round(4.6)) //5
console.log(Math.trunc(4.6)) //4
console.log(Math.random()) //0.6830835407006233 //0.7452838888620528

function getRamdomBetween(min, max) {
    return Math.random() * (max-min) + min
}

console.log(getRamdomBetween(10, 42)) //16.71866875661378

function getRamdomBetweenNumber(min, max) {
    return Math.floor(Math.random() * (max-min + 1) + min)
}

console.log(getRamdomBetweenNumber(10, 42)) //16