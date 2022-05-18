//promise

//resolve
const delayResolve = (wait = 1000) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, wait)
    })
    return promise
}

delayResolve(2500)
    .then(() => {
        console.log('After 2 seconds')
    })
    .catch(err => console.error('Error', err))
    .finally(() => {
        console.log('Finaly')
    })

//reject
const delayReject = (wait = 1000) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Something went wrong. Try again')
        }, wait)
    })
    return promise
}

delayReject(2500)
    .then(() => {
        console.log('After 2 seconds')
    })
    .catch(err => console.error('Error:', err))
    .finally(() => {
        console.log('Finaly')
    })

const getData = () => new Promise(resolve => resolve([
    1, 1, 2, 3, 5, 8, 13
]))

getData().then(data => console.log(data)) //[1, 1, 2, 3, 5, 8, 13]

async function asyncExampleResolve() {
    try {
        await delayResolve(3000)
        const data = await getData()
        console.log('Data:', data) //Data: [1, 1, 2, 3, 5, 8, 13]
    } catch (e) {
        console.log(e)
    }

}

asyncExampleResolve()

async function asyncExampleReject() {
    try {
        await delayReject(3000)
        const data = await getData()
        console.log('Data:', data)
    } catch (e) {
        console.log(e) //Something went wrong. Try again
    } finally {
        console.log('Finally') //Finaly
    }

}

asyncExampleReject()