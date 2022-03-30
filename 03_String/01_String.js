//1 String
const name = 'Vit'
console.log(name) //Vit
console.log(typeof name) //string

const age = 40
const output = 'Hi my name is ' + name + ' and my age is ' + age + ' years old.'
console.log(output) //Hi my name is Vit and my age is 40 years old.

const outputBest = `Hi my name is ${name} and my age is ${age} years old.`
console.log(outputBest) //Hi my name is Vit and my age is 40 years old.

function getAge() {
    return age
}
const outputBestWithFunction = `Hi my name is ${name} and my age is ${getAge()} years old.`
console.log(outputBestWithFunction) //Hi my name is Vit and my age is 40 years old.

const outputWithTernaryExpression = `Hi my name is ${name} and my age is ${age < 39 ? 'under 39' : 'over 39'} years old.`
console.log(outputWithTernaryExpression) //Hi my name is Vit and my age is over 39 years old.

const outputDifferentLines = `
<div>This is div</div>
<p>This is p</p>
`
console.log(outputDifferentLines)
/*
<div>This is div</div>
<p>This is p</p>
*/





