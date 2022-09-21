const express = require('express')
const app = express()
app.listen(3000)
console.log('SERVER: Server started')

const fs = require('fs')
app.use(express.json())

//Pre renderovanie HTML je potrebne toto:
const path = require('path')
const viewPath = path.join(__dirname, 'view')
app.set('view engine', 'ejs')
app.set('views', viewPath)

//Toto sa vyvola ak niekto nacita stranku teda localhost
app.get('/', (req, res) => {
    console.log(req.ip + ' connected to the server')
    //res.json({'JSON': 'JSON'})
    res.render('index') //Renderujeme index.ejs
})

//Post routuje HTTP POST request 
app.post('/', (req, res) => {
    fs.appendFileSync('data.db', JSON.stringify(req.body) + "\n")
    console.log('Data saved to DB')
})

// app.get('/getRequest', (req, res) => {
//     res.send('Hello there')
//     console.log('data.db')
// })



const {resolve} = require('path');
 
const absolutePath = resolve('./data.db');

console.log(absolutePath);