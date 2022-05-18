// Event loop

// setTimeout
setTimeout(() => {
    console.log('After timeout') //will appear in 2.5 seconds
}, 2500)

const timeout = setTimeout(() => {
    console.log('After timeout') //will not appear
}, 2500)

clearTimeout(timeout) //removes timeout


// setInterval
setInterval(() => {
    console.log('After interval') //appears every second
}, 1000)

const interval = setInterval(() => {
    console.log('After interval') //will not appear
}, 1000)

clearTimeout(interval) //removes interval