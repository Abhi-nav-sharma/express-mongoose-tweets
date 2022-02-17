const express= require('express')
const connect  = require('./config/db')
const tweetsRouter= require('./routes/tweet.route')
const usersRouter= require('./routes/user.route')

const app = express()
app.use(express.json())
app.use('/tweets',tweetsRouter)
app.use('/users',usersRouter)
const start= async ()=>{
    await connect()
    console.log('Connected to mongodb')
    app.listen(1234,(req,res)=>{
        console.log('Listening on port 1234')
    })
}

module.exports=start