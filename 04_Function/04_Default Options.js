//4 Default Options
const sum = (a, b) => a + b
console.log(sum(41, 1)) //42

const sum2 = (a, b) => a + b
console.log(sum2(41)) //NaN

const sum3 = (a, b = 1) => a + b
console.log(sum3(41, 1)) //42

const sum4 = (a, b = 1) => a + b
console.log(sum4(41, 4)) //45

const sum5 = (a = 40, b = a * 2) => a + b
console.log(sum5()) //120

function sumAll (...all) {
    console.log(all) //[1, 2, 3, 4, 5, 6, 7]
    let result = 0
    for (let num of all) {
        result += num
    }
    return result
}

const res = sumAll(1, 2, 3, 4, 5, 6, 7)

console.log(res) //28