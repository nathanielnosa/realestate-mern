const mongoose = require('mongoose')

const connectDB = async () => {
  // connect to mongodb
  try {
    await mongoose.connect(process.env.MONGODB_URL)
  } catch (error) {
    console.log(error);
  }

}


module.exports = connectDB