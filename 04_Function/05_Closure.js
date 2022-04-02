//5 Сlosure
function createMember(name) {
    return function (lastName) {
        console.log(name + lastName)
    }
}

const logWithLastName = createMember('Vit')
console.log(logWithLastName) //[Function (anonymous)]
console.log(logWithLastName('Boch')) //VitBoch
