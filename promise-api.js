// const promise = Promise.resolve({ id: 1 })
// const failedPromise = Promise.reject(new Error('some reason...'))

// promise.then(result => console.log(result))

// failedPromise.catch(err => console.log(err))


const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    console.log(`Async operation 1...`)
    resolve(1)
  }, 2000)
})

const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log(`Async operation 2...`)
    resolve(2)
  }, 1000)
})

const promise3 = new Promise((resolve) => {
  setTimeout(() => {
    console.log(`Async operation 3...`)
    resolve(3)
  }, 1500)
})

const promise4 = new Promise((resolve) => {
  setTimeout(() => {
    console.log(`Async operation 4...`)
    resolve(4)
  }, 500)
})

Promise.race([promise1, promise2, promise3, promise4])
  .then(res => console.log(res))
  .catch(err => console.log(err.message))