const promise = new Promise((resolve, reject) => {
  // Kick off some async work
  setTimeout(() => {
    // resolve(1)
    reject(new Error('All your base are belong to us'))
  }, 2000)
})

promise
  .then(result => console.log(`Result: ${result}`))
  .catch(err => console.log(`Error: ${err.message}`))