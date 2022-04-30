//2 new syntax
const person = {
    name: 'Vit',
    age: 40,
    isProgrammer: true,
    languages: ['ru', 'en', 'de'],
    ['data now']: Date.now(),
    'complex key': 'Complex Value',
    ['key_' + (1 + 3)]: 'Computed key',
    greet() {
        console.log('Greet from person')
    }
}

//old syntax
// const name = person.name
// const age = person.age
// const languages = person.languages

// new syntax
const {name, age, languages} = person
console.log(name, age, languages) //Vit 40 [ 'ru', 'en', 'de' ]

//change variable name
const {name: myName, age: myAge, languages: myLanguages} = person
console.log(myName, myAge, myLanguages) //Vit 40 [ 'ru', 'en', 'de' ]

//delete variable values
person.name = undefined
person.age = undefined
person.launguages = undefined
// change variable name
const {name: brotherName = 'Ivan', age: brotherAge = 31, languages: brotherLanguages = ['ru']} = person
console.log(brotherName, brotherAge, brotherLanguages) //Ivan 31 [ 'ru' ]




