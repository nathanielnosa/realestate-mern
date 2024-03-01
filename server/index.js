require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser');
const connectDB = require('./config/dbCon.js')



// making api
const app = express()
// to allow us pass json
app.use(express.json())
// to allow us use cookie
app.use(cookieParser())

connectDB()

// routers
app.use('/server/user', require("./routes/user.routes.js"))
app.use('/server/auth', require("./routes/auth.routes.js"))


// middleware for handling messages
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || "Internal Server Error"
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})


// port number
const PORT = process.env.PORT || 4000
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB successfully');
    app.listen(PORT, () => console.log(`server running on port: ${PORT}`))
})
