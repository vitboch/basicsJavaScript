//5 Lambda function
const people = [
    {name: 'Vit', budget: 4200},
    {name: 'Ivan', budget: 1700},
    {name: 'Maria', budget: 8800},
]

const person = people.find(person => person.budget === 8800)
console.log(person) //{ name: 'Maria', budget: 8800 }

const personNew = people.find(person => person.budget === 8700)
console.log(personNew) //undefined