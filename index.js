// // The delema
// const getUser = (id, callback) => {
//   setTimeout(() => {
//     console.log('reading a user from a database.....')
//     return { id: id, gitHubUsername: 'JarvisF8' }
//   }, 2000)
// }

// console.log('Before')
// const user = getUser(1)
// console.log(user)
// console.log('After')


// // callbacks 
// // (Callback Hell)
// const getUser = (id, callback) => {
//   setTimeout(() => {
//     console.log('Reading a user from a database...')
//     callback({ id: id, gitHubUsername: 'JarvisF8' })
//   }, 2000);
// }

// const getRepositories = (username, callback) => {
//   setTimeout(() => {
//     console.log('Calling GitHub API...')
//     callback(['repo1', 'repo2', 'repo3'])
//   }, 2000)
// }

// const getCommits = (repo, callback) => {
//   setTimeout(() => {
//     console.log('Calling GitHub API...')
//     callback(['commit'])
//   }, 2000)
// }

// console.log('Before')
// getUser(1, (user) => {
//   getRepositories(user.gitHubUsername, (repos) => {
//     getCommits(repos[0], (commits) => {
//       console.log(commits)
//     })
//   })
// })
// console.log('After')

// // Restructured Callbacks
// const getUser = (id, callback) => {
//   setTimeout(() => {
//     console.log('Reading a user from a database...')
//     callback({ id: id, gitHubUsername: 'JarvisF8' })
//     return { id: id, gitHubUsername: 'JarvisF8' }
//   }, 2000)
// }
// const getRepositories = (username, callback) => {
//   setTimeout(() => {
//     console.log('Calling Github API...')
//     callback(['repo1', 'repo2', 'repo3'])
//     return ['repo1', 'repo2', 'repo3']
//   }, 2000)
// }

// const displayCommits = (commits) => {
//   console.log(commits)
// }

// const getCommits = (repos) => {
//   getCommits(repo, displayCommits)
// }

// const getRepos = (user) => {
//   getRepos(user, getCommits)
// }

// console.log('Before')
// getUser(1, getRepos)
// console.log('After')



//promises
const getUser = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Reading a user from a database...')
      resolve({ id: id, gitHubUsername: 'JarvisF8' })
    }, 2000)
    reject(new Error('They have set us up the bomb'))
  })
}

const getRepositories = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Calling GitHub API...')
      resolve(['repo1', 'repo2', 'repo3'])
    }, 2000)
    reject(new Error('All your base are belong to us'))
  })
}

const getCommits = (repo) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Calling GitHub API...')
      resolve(['commit'])
    }, 2000)
    reject(new Error('The cake is a lie'))
  })
}

console.log('Before')
getUser(1)
  .then(user => getRepositories(user.gitHubUsername))
  .then(repos => getCommits([0]))
  .then(commits => console.log(commits))
  .catch(err => console.log(`Error: ${err.message}`))
console.log('After')

// Async/await
