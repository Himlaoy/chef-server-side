const express = require('express')
const app = express()
const port = 5000


app.get('/', (req, res)=>{
    res.send('chef is getting ready to cook')
})

app.listen(port,()=>{
    console.log(`Don't worry everything is ok on port : ${port}`)
})