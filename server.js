//Practical
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

app.get('/magic/:question', (req,res) => {
    let questionAsked  = req.params.question
    console.log('question asked',questionAsked)
    const response = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    let randoNum = getRandoInt(20)
    let randoResponse = response[randoNum]
    res.send(`
    <h1> You asked "${questionAsked}"
    <br>
    <br>
    ${randoResponse}
    </h1>
    `)
    //use %20 as spaces in URL
})

app.get('/fibonnaci/:num', (req,res) => {
    let num = parseInt(req.params.num)
    let previousNum = num -1
    let theOneBeforePreviousNum = previousNum -1
    let sumOfPreviouses = previousNum + theOneBeforePreviousNum
    if(sumOfPreviouses === num || num === 0 || num === 1 || num === 2 || num === 5){
        res.send(`<h1>Very good. It is Fibonacci</h1>`)
    } else {
        res.send(`<h1>I can tell this is not a fibonacci number</h1>`)
    }


})

function getRandoInt(range){
    return Math.floor(Math.random()*range)
}

app.listen(port,() => {
    console.log("I'm listening on port 3000")
})