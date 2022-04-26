//5 context

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
    },
    info() {
        console.log('this:', this) /*
                                        this: {
                                          name: 'Vit',
                                          age: 40,
                                          isProgrammer: true,
                                          launguages: [ 'ru', 'en', 'de' ],
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

person.info() //Information about a person by name: Vit

const logger = {
    keys() {
        console.log('Object Keys:', Object.keys(logger)) //Object Keys: [ 'keys' ]
    }
}

const loggerObj = {
    keys(obj) {
        console.log('Object Keys:', Object.keys(obj))
    }
}
loggerObj.keys(person) /*
                           Object Keys: [
                          'name',
                          'age',
                          'isProgrammer',
                          'launguages',
                          'data now',
                          'complex key',
                          'key_4',
                          'greet',
                          'info'
                        ]
                     */

const loggerThis = {
    keys() {
        console.log('Object Keys:', Object.keys(this))
    }
}

loggerThis.keys(person) /*
                           Object Keys: [
                          'name',
                          'age',
                          'isProgrammer',
                          'launguages',
                          'data now',
                          'complex key',
                          'key_4',
                          'greet',
                          'info'
                        ]
                     */

const bound = loggerThis.keys.bind(loggerThis)
bound() //Object Keys: [ 'keys' ]

const boundPerson = loggerThis.keys.bind(person)
boundPerson() /*
                Object Keys: [
                  'name',
                  'age',
                  'isProgrammer',
                  'launguages',
                  'data now',
                  'complex key',
                  'key_4',
                  'greet',
                  'info'
                ]
               */
