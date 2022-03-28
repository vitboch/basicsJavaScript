//2 BigInt
console.log(Number.MAX_SAFE_INTEGER) //9007199254740991
console.log(90071992547409919999999) //9.007199254740992e+22
console.log(typeof 90071992547409919999999) //number
console.log(typeof 90071992547409919999999n) //bigint
console.log(90071992547409919999999n - 900719925474099199999n) //89171272621935820800000n
console.log(-90071992547409919999999n) //-90071992547409919999999n
// console.log(90071992547409919999999.123n) //error

// console.log(10n - 4) //error
console.log(parseInt(10n) - 4) //6
console.log(10n - BigInt(4)) //6n
console.log(5n / 2n) //2n
