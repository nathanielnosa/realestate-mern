import express from 'express';
import mongoose from 'mongoose';

import dotenv from 'dotenv';
dotenv.config()

import userRouter from "./routes/user.routes.js"

// connect to mongodb
mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log('Connected to MongoDB successfully');
}).catch((err) => {
    console.log(err);
})
// making api
const app = express()


// port number
const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`server running on port: ${PORT}`))

// get
app.use('/server/user', userRouter)