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
    },
    info() {
        console.log('this:', this) /*
                                        this: {
                                          name: 'Vit',
                                          age: 40,
                                          isProgrammer: true,
                                          languages: [ 'ru', 'en', 'de' ],
                                          'data now': 1650956379623,
                                          'complex key': 'Complex Value',
                                          key_4: 'Computed key',
                                          greet: [Function: greet],
                                          info: [Function: info]
                                        }
                                    */
        console.info('Information about a person by name:', this.name)
    }
}

const logger = {
    keys() {
        console.log('Object Keys:', Object.keys(logger)) //Object Keys: [ 'keys' ]
    },

    keyAndValue() {
        //'key': value
        // Object.keys(this).forEach(key => {
        //     console.log(`${key}: ${this[key]}`)
        Object.keys(this).forEach(function(key) {
            console.log(`"${key}": ${this[key]}`)
        })
    }
}

logger.keyAndValue.call(person) /*
                                    "name": undefined
                                    "age": undefined
                                    "isProgrammer": undefined
                                    "languages": undefined
                                    "data now": undefined
                                    "complex key": undefined
                                    "key_4": undefined
                                    "greet": undefined
                                    "info": undefined
*/