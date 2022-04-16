//6 Loop for/of
const people = [
    {name: 'Vit', budget: 4200},
    {name: 'Ivan', budget: 1700},
    {name: 'Maria', budget: 8800},
]

let findedPerson
for (const person of people) {
    console.log(person)/*
                            { name: 'Vit', budget: 4200 }
                            { name: 'Ivan', budget: 1700 }
                            { name: 'Maria', budget: 8800 }
                            */
    if(person.budget === 4200) {
        findedPerson = person
    }
}
console.log(findedPerson) //{ name: 'Vit', budget: 4200 }