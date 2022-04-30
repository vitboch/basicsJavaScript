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

console.log(person.name) //Vit
console.log(person['age']) //40
console.log(person.isProgrammer) //true
console.log(person.launguages) //[ 'ru', 'en', 'de' ]
console.log(person['complex key']) //Complex Value
console.log(person) /*
                    {
                      name: 'Vit',
                      age: 40,
                      isProgrammer: true,
                      languages: [ 'ru', 'en', 'de' ],
                      'data now': 1650868672189,
                      'complex key': 'Complex Value',
                      key_4: 'Computed key',
                      greet: [Function: greet]
                    }
                    */
console.log(person.greet()) //Greet from person

//add age
person.age++
console.log(person.age) //41

//add languages
person.launguages.push('us')
console.log(person.launguages) //[ 'ru', 'en', 'de', 'us' ]

//delete value by key
person['key_4'] = undefined
console.log(person['key_4']) //undefined

//remove key and value
delete person['key_4']
console.log(person)
                    /*
                    {
                      name: 'Vit',
                      age: 41,
                      isProgrammer: true,
                      languages: [ 'ru', 'en', 'de', 'us' ],
                      'data now': 1650869447270,
                      'complex key': 'Complex Value',
                      greet: [Function: greet]
                    }
                    */
console.log(person['key_4']) //undefined
