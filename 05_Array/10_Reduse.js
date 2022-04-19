// 10 Reduce

const people = [
    {name: 'Vit', budget: 4200},
    {name: 'Ivan', budget: 1700},
    {name: 'Maria', budget: 8800},
]

const allBudget = people.reduce((acc, person) => {
    acc += person.budget
    return acc
}, 0)

console.log(allBudget) //14700

const sumBudgetMore2000 = people.reduce((acc, person) => {
    if (person.budget > 2000) {
        acc += person.budget
    }
    return acc
}, 0)

console.log(sumBudgetMore2000) //13000

const sumBudgetLess5000 = people
    .filter(person => person.budget < 5000)
    .reduce((acc, person) => {
        acc += person.budget
    return acc
}, 0)

console.log(sumBudgetLess5000) //5900