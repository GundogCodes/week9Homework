const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

app.get('/',(req,res) =>{
    res.send('<h1>Hello World</h1>')
})

app.get('/greeting/:name',(req,res) => {
    let name = req.params.name
    const randoGreeting = ['Hello, ','Whats up, ',`Its so great to see you, `]
    let randomNum = getRandoInt(3)
    let message = randoGreeting[randomNum]

    res.send(`<h1>${message}${name}!</h1>`)
})

app.get('/tip/:total/:tipPercentage', (req,res) => {
    let total = parseInt(req.params.total)
    let tipPercentage = parseInt(req.params.tipPercentage)
    let tipAmount  = total*(parseFloat(`0.${tipPercentage}`))
    res.send(`<h1>
    Your total is: ${total} <br>
    Your tip Percentage is: ${tipPercentage}% <br>
    Your tip Amount is: ${tipAmount}
    </h1>`)

})

function getRandoInt(range){
    return Math.floor(Math.random()*range)
}

app.listen(port,() => {
    console.log("I'm listening on port 3000")
})