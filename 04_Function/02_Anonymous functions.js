//2 Anonymous functions
let counter = 0
const interval = setInterval(function () {
    if (counter === 5) {
        clearInterval(interval)
    } else {
        console.log(++counter)
    }
}, 1000)
