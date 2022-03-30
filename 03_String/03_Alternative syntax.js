//3 Alternative syntax

function logPerson(s,name, age) {
    console.log(s, name, age) //[ 'Name: ', ', Age: ', '!' ] Vit 40 //Name: Ivan, Age: not yet born !

    if(age < 0) {
        age = 'not yet born'
    }

    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

const personName = 'Vit'
const personAge = 40

const output = logPerson`Name: ${personName}, Age: ${personAge} !`

console.log(output) //Name: Vit, Age: 40 !


const personName2 = 'Ivan'
const personAge2 = -10

const output2 = logPerson`Name: ${personName2}, Age: ${personAge2} !`

console.log(output2) //Name: Ivan, Age: not yet born !