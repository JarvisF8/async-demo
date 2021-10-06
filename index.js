// The delema - Retrieving data from a remote/Asycncronous source
const getUser = (id) => { // Promise & Async/Await Version
// const getUser = (id, callback) => { // Callback Version
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Reading a user from a database...')
      // callback({ id: id, gitHubUsername: 'JarvisF8' }) // Callback Response
      resolve({ id: id, gitHubUsername: 'JarvisF8' }) // Promise & Async/Await Response
      reject(new Error('They set us up the bomb')) // Promise & Async/Await Response
    }, 2000);
  })
}

const getRepositories = (username) => { // Promise & Async/Await Version
// const getRepositories = (username, callback) => { // Callback Version
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Calling GitHub API...')
      // callback(['repo1', 'repo2', 'repo3']) // Callback Response
      resolve(['repo1', 'repo2', 'repo3']) // Promise & Async/Await Response
      reject(new Error('All your base are belong to us')) // Promise & Async/Await Response
    }, 2000)
  })
}

const getCommits = (repo) => { // Promise & Async/Await Version
// const getCommits = (repo, callback) => { // Callback Version
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Calling GitHub API...')
      // callback(['commit']) // Callback Response
      resolve(['commit']) // Promise & Async/Await Response
      reject(new Error('The cake is a lie')) // Promise & Async/Await Response
    }, 2000)
  })
}

console.log('Before')
// const user = getUser(1) 
// console.log(user)


// // callbacks 
// // (Callback Hell)
// console.log('Before')
// getUser(1, (user) => {
//   getRepositories(user.gitHubUsername, (repos) => {
//     getCommits(repos[0], (commits) => {
//       console.log(commits)
//     })
//   })
// })

// // Restructured Callbacks
// const displayCommits = (commits) => {
//   console.log(commits)
// }

// const getCommits = (repos) => {
//   getCommits(repo, displayCommits)
// }

// const getRepos = (user) => {
//   getRepos(user, getCommits)
// }

// getUser(1, getRepos)


// // promises
// getUser(1)
//   .then(user => getRepositories(user.gitHubUsername))
//   .then(repos => getCommits([0]))
//   .then(commits => console.log(commits))
//   .catch(err => console.log(`Error: ${err.message}`))



// // Async & Await
const displayCommits = async () => {
  try {
    const user = await getUser(1)
    const repos = await getRepositories(user)
    const commits = await getCommits(repos)
    console.log(commits)
  }
  catch (err) {
    console.log(`Error: ${err}`)
  }
}

displayCommits()

console.log('After')