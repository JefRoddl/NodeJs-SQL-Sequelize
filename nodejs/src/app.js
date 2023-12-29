const path = require('path')
const express = require('express')
const app = express()
const port = 3000
const fornecedores = require('./routes/fornecedores')
const home = require('./routes/home')
const client = require('./routes/client')
const bodyParser = require('body-parser')

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.use('/assets', express.static('./assets'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))



app.use('/', home)
app.use('/client', client)
app.use('/fornecedores', fornecedores)






app.listen(port, () => console.log(`App listening http://localhost:${port}`))






/*const http = require('http');
const handle = require('./handle.js')
const hello = require('console-log-hello-world')



let server = http.createServer(handle);

server.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
});*/