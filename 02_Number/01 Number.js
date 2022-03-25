//1 Number
const num = 42 //interger
const float = 42.42 //float
const pow = 10e3 //pow
console.log(pow) //10000

console.log(1 + 2) //3
console.log(Number.MAX_SAFE_INTEGER) //9007199254740991
console.log(Math.pow(2,53) - 1) //=Number.MAX_SAFE_INTEGER //9007199254740991
console.log(Number.MAX_SAFE_INTEGER + 1) //9007199254740992
console.log(Number.MAX_SAFE_INTEGER + 2) //9007199254740992 error
console.log(Number.MIN_SAFE_INTEGER) //-9007199254740991

const negative = -42
console.log(negative < 10) //true

console.log(Number.MAX_VALUE) //1.7976931348623157e+308
console.log(Number.MIN_VALUE) //5e-324

console.log(Number.POSITIVE_INFINITY) //Infinity
console.log(Number.NEGATIVE_INFINITY) //-Infinity
console.log(2 / 0) //Infinity
console.log(Number.isFinite(Infinity)) //false
console.log(Number.isFinite(42)) //true

console.log(Number.NaN) //NaN - Not a Number
console.log(typeof NaN) //number
console.log(2 / undefined) //NaN
const weird = 2 / undefined
console.log(Number.isNaN(weird)) //true
console.log(Number.isNaN(42)) //false

const stringInt = '40'
const stringFloat = '40.42'
console.log(stringInt + 2) //402
console.log(Number.parseInt(stringInt) + 2) //42
console.log(parseInt(stringInt) + 2) //42
console.log(Number(stringInt) + 2) //42
console.log(+stringInt + 2) //42

console.log(Number.parseInt(stringFloat) + 2) //42

console.log(stringFloat + 2) //40.422
console.log(Number.parseFloat(stringFloat) + 2) //42.42
console.log(parseFloat(stringFloat) + 2) //42.42
console.log(Number(stringFloat) + 2) //42.42
console.log(+stringFloat + 2) //42.42

console.log(0.4 + 0.2) //0.6000000000000001
console.log((4 / 10) + (2 /10)) //0.6000000000000001
console.log((0.4 + 0.2).toFixed(4)) //0.6000
console.log((0.4 + 0.2).toFixed(1)) //0.6
console.log(Number.parseFloat((0.4 + 0.2).toFixed(1))) //0.6
console.log(+(0.4 + 0.2).toFixed(1)) //0.6
