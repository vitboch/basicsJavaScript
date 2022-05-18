const delay = (callback, wait = 1000) => {
    setTimeout(callback, wait)
}

delay(() => {
    console.log('After 2 seconds')
}, 2000)