//1 Function
//Function Declaration
function greet(name) {
    console.log('Hi -', name) //Hi - Lena
}

greet('Lena')

console.log(typeof greet) //function

console.dir(greet) //[Function: greet]

//Function Expression
const greet2 = function greet2(name) {
    console.log('Hello -', name) //Hello - Alex
}

greet2('Alex')
