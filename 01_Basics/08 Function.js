// 8 Function
function calculateAge(year) {
    return 2022 - year
}

const myAge = calculateAge(1981)
console.log(myAge) //41
console.log(calculateAge(1990)) //32

function logInfoAbout(name, year) {
    const age = calculateAge(year)

    if (age > 0) {
        console.log('A person named ' + name + ' now has an age ' + age)
    } else {
        console.log('Actually this is the future')
    }
}

logInfoAbout('VitBoch', 1981) //A person named VitBoch now has an age 41
logInfoAbout('Ivan', 1990) //A person named Ivan now has an age 32
logInfoAbout('Spyder man', 2395) //Actually this is the future