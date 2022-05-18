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
        }.bind(this))
    },

    withParams(top = false, between = false, bottom = false) {
        if (top) {
            console.log('------ Start ------')
        }
        Object.keys(this).forEach((key, index, array) => {
            console.log(`"${key}": ${this[key]}`)
            if (between && index !== array.length - 1) {
                console.log('-----------------')
            }
        })
        if (bottom) {
            console.log('------ End ------')
        }
    }
}

logger.withParams.call(person, true) /*
                                    ------ Start ------
                                    "name": Vit
                                    "age": 40
                                    "isProgrammer": true
                                    "languages": ru,en,de
                                    "data now": 1652856805839
                                    "complex key": Complex Value
                                    "key_4": Computed key
                                    "greet": greet() {
                                            console.log('Greet from person')
                                        }
                                    "info": info() {
                                            console.log('this:', this) //
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
                                                                        //
                                    console.info('Information about a person by name:', this.name)
}
*/

logger.withParams.call(person, true, true) /*------ Start ------
                                            "name": Vit
                                            -----------------
                                            "age": 40
                                            -----------------
                                            "isProgrammer": true
                                            -----------------
                                            "languages": ru,en,de
                                            -----------------
                                            "data now": 1652856968635
                                            -----------------
                                            "complex key": Complex Value
                                            -----------------
                                            "key_4": Computed key
                                            -----------------
                                            "greet": greet() {
                                                    console.log('Greet from person')
                                                }
                                            -----------------
                                            "info": info() {
                                                    console.log('this:', this) //
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
                                                                                //
                                            console.info('Information about a person by name:', this.name)
                                            }
*/

logger.withParams.call(person, true, true, true) /*------ Start ------
                                                    "name": Vit
                                                    -----------------
                                                    "age": 40
                                                    -----------------
                                                    "isProgrammer": true
                                                    -----------------
                                                    "languages": ru,en,de
                                                    -----------------
                                                    "data now": 1652857207293
                                                    -----------------
                                                    "complex key": Complex Value
                                                    -----------------
                                                    "key_4": Computed key
                                                    -----------------
                                                    "greet": greet() {
                                                            console.log('Greet from person')
                                                        }
                                                    -----------------
                                                    "info": info() {
                                                            console.log('this:', this) //
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
                                                                                        //
                                                    console.info('Information about a person by name:', this.name)
                                                    }
                                                    ------ End ------
*/

logger.withParams.apply(person, [true, true, true]) /*------ Start ------
                                                        "name": Vit
                                                        -----------------
                                                        "age": 40
                                                        -----------------
                                                        "isProgrammer": true
                                                        -----------------
                                                        "languages": ru,en,de
                                                        -----------------
                                                        "data now": 1652857599809
                                                        -----------------
                                                        "complex key": Complex Value
                                                        -----------------
                                                        "key_4": Computed key
                                                        -----------------
                                                        "greet": greet() {
                                                                console.log('Greet from person')
                                                            }
                                                        -----------------
                                                        "info": info() {
                                                                console.log('this:', this) //
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
                                                                                            //
                                                        console.info('Information about a person by name:', this.name)
                                                        }
                                                        ----- End ------
*/