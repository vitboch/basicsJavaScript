//11 Objects
// const person = new Object({firstName: 'Vit', lastName: 'Boch', year: 1981,}) //bed practice
const person = {
    firstName: 'Vit',
    lastName: 'Boch',
    year: 1981,
    languages: ['Ru', 'En', 'De'],
    hasWife: false,
    greet: function () {
        console.log('greet from person')
    }
}

console.log(person) /*
{
  firstName: 'Vit',
  lastName: 'Boch',
  year: 1981,
  languages: [ 'Ru', 'En', 'De' ],
  hasWife: false,
  greet: [Function: greet]
}
*/

console.log(person.firstName) //Vit
person.greet() //greet from person
console.log(person['lastName']) //Boch
const key = 'languages'
console.log(person[key]) //[ 'Ru', 'En', 'De' ]
const keyData = 'year'
console.log(person[keyData]) //1981
person.hasWife = true //key value change
person.isProgrammer = true //adding key and value
console.log(person) /*
{
  firstName: 'Vit',
  lastName: 'Boch',
  year: 1981,
  languages: [ 'Ru', 'En', 'De' ],
  hasWife: true,
  greet: [Function: greet],
  isProgrammer: true
} */
