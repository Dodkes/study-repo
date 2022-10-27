const express = require('express')
const app = express() //premennej app sme dali properties a methods, ktore od teraz mozme pouzivat
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
app.post('/api', (req, res) => {
    //fs.appendFileSync('data.db', JSON.stringify(req.body) + "\n")

    fs.writeFile('data.db', JSON.stringify(req.body), (err) => {
        if (err) throw err
    })
    // fs.writeFile('test.txt', JSON.stringify(req.body), (err) => {
    //     if (err) throw err
    //     console.log('saved')
    // })


    // fs.readFile('data.db', 'utf8', (err, data) => {
    //     if (err) return console.log(err)
    //     dataFromServer = data
    //     console.log(dataFromServer)
    // })
})

app.get('/api', (req, res) => { //na localhost:3000/api mam ulozene toto API
        fs.readFile('data.db', 'utf8', (err, data) => {
        if (err) return console.log(err)
        res.send(data)
    })
})


// const {resolve} = require('path');
 
// const absolutePath = resolve('./data.db');

// console.log(absolutePath);