// 6 Conditional statements
const  courseStatus = 'pending' //ready, pending, fail

if (courseStatus === 'ready') {
    console.log('The course is ready, and you can take it')
} else if (courseStatus === 'pending') {
    console.log('The course is currently under development') //The course is currently under development
} else {
    console.log('Course failed')
}

const isReady = true

if (isReady) {
    console.log('Everything is ready') //Everything is ready
} else {
    console.log('Everything is not ready')
}

// Ternary expression
isReady ? console.log('Everything is ready') : console.log('Everything is not ready') //Everything is ready

const num1 = 42 //number
const num2 = '42' //string

console.log(num1 == num2) //true
console.log(num1 === num2) //false