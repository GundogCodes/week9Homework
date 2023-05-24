const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

app.get('/',(req,res) =>{
    res.send('<h1>Hello World</h1>')
})

app.listen(port,() => {
    console.log("I'm listening on port 3000")
})