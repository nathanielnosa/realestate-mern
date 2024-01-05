import express from 'express'

// making api
const app = express()


// port number
const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`server running on port: ${PORT}`))