//3 for in
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

for (let key in person) {
    //the cycle is dangerous for the object,
    // it can go to the prototype of the object and certain problems may arise because of this
    if (person.hasOwnProperty(key)) {
        console.log('key:', key) /*
                                key: name
                                key: age
                                key: isProgrammer
                                key: launguages
                                key: data now
                                key: complex key
                                key: key_4
                                key: greet
                            */
        console.log('value:', person[key]) /*
                                        value: Vit
                                        value: 40
                                        value: true
                                        value: [ 'ru', 'en', 'de' ]
                                        value: 1650954826394
                                        value: Complex Value
                                        value: Computed key
                                        value: [Function: greet]
                                       */
    }
}
