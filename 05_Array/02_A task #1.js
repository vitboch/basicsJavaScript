//2 a task #1
const text = 'Hey! We are learning JavaScript'
const splitHey = text.split('!')
console.log(splitHey) //[ 'Hey', ' We are learning JavaScript' ]

const splitText = text.split('')
console.log(splitText) /*[
    'H', 'e', 'y', '!', ' ', 'W',
    'e', ' ', 'a', 'r', 'e', ' ',
    'l', 'e', 'a', 'r', 'n', 'i',
    'n', 'g', ' ', 'J', 'a', 'v',
    'a', 'S', 'c', 'r', 'i', 'p',
    't'
]*/

const splitWord = text.split(' ')
console.log(splitWord) //[ 'Hey!', 'We', 'are', 'learning', 'JavaScript' ]

const reverseText = text.split('').reverse().join('')
console.log(reverseText) //tpircSavaJ gninrael era eW !yeH