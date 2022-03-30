//2 Methods
const name = 'Vit'
// const name = new String() //bad practices

console.log(name.length) //3
console.log(name.toUpperCase()) //VIT
console.log(name.toLowerCase()) //vit
console.log(name.charAt(2)) //t
console.log(name.indexOf('t')) //2
console.log(name.indexOf('Vi')) //0
console.log(name.indexOf('z')) //-1
console.log(name.startsWith('V')) //true
console.log(name.startsWith('v')) //false
console.log(name.endsWith('it')) //true
console.log(name.repeat(3)) //VitVitVit

const string = '       password       '
console.log(string) //       password
console.log(string.trim()) //password
console.log(string.trimLeft()) //password
console.log(string.trimRight()) //       password
