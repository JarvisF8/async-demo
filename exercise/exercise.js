
const getCustomer = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ 
        id: 1, 
        name: 'Mosh Hamedani', 
        isGold: true, 
        email: 'email' 
      })
      reject(new Error('Could not retrieve user...'))
    }, 4000)
  })
}

const getTopMovies = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['movie1', 'movie2']);
      reject(new Error('Could not get top movies...'))
    }, 4000)
  })
}

const sendEmail = (email, movies) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Email sent...')
      reject(new Error('Could not send email...'))
    }, 4000)
  })
}

const notifyCustomer = async () => {
  
  try {
    const customer = await getCustomer(1)
    console.log('Customer: ', customer)
    if(customer.isGold) {
      const movies = await getTopMovies()
      console.log('Top Movies: ', movies)
      const email = await sendEmail(customer.email, movies)
      console.log(email)
    }
    else {
      console.log(`${customer.name} is not a gold customer`)
    }
  } catch (error) {
    
  }
}
notifyCustomer()
