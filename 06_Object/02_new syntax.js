//2 new syntax
const person = {
    name: 'Vit',
    age: 40,
    isProgrammer: true,
    launguages: ['ru', 'en', 'de'],
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
// const launguages = person.launguages

// new syntax
const {name, age, launguages} = person
console.log(name, age, launguages) //Vit 40 [ 'ru', 'en', 'de' ]

//change variable name
const {name: myName, age: myAge, launguages: myLaunguages} = person
console.log(myName, myAge, myLaunguages) //Vit 40 [ 'ru', 'en', 'de' ]

//delete variable values
person.name = undefined
person.age = undefined
person.launguages = undefined
// change variable name
const {name: brotherName = 'Ivan', age: brotherAge = 31, launguages: brotherLaunguages = ['ru']} = person
console.log(brotherName, brotherAge, brotherLaunguages) //Ivan 31 [ 'ru' ]




