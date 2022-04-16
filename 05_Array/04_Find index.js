//4 find index
const people = [
    {name: 'Vit', budget: 4200},
    {name: 'Ivan', budget: 1700},
    {name: 'Maria', budget: 8800},
]

const index = people.findIndex(function (person) {
    console.log(person) /*  { name: 'Vit', budget: 4200 }
                            { name: 'Ivan', budget: 1700 }
                            { name: 'Maria', budget: 8800 } */
    return person.budget > 5000
})
console.log(index) //2
console.log(people[index]) //{ name: 'Maria', budget: 8800 }



