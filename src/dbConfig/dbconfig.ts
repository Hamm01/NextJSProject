import mongoose from 'mongoose'

export default async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!)
    const connection = mongoose.connection
    connection.on('connected', () => {
      console.log('MongoDb connected Succusfully')
    })
    connection.on('error', err => {
      console.log(
        'MongoDb connection error. please make sure that mongodb is runnig properly ' +
          err
      )
      process.exit()
    })
  } catch (error) {
    console.log('Somthing went wrong')
  }
}
