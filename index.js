const express = require('express')
const mongoose = require('mongoose')
const connectToDatabase = require('./database')

connectToDatabase()

const app = express()




// forma de ler JSON / middlewares
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())


//rotas da API
const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

// rota inicial 
app.get('/', (req, res) => {

    // mostrar req

    res.json({message: 'Oi Express!'})

})


// entregar uma porta  

app.listen(3000)