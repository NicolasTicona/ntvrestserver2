// REST SERVER - Escuela
// Config
require('./config/config')

// Express
const express = require('express')
const app = express()

// BodyParser
const bodyParser = require('body-parser')

// Mongoose
const mongoose = require('mongoose')

// ==================================
// Parse application/x-www-form-urlencoded application/json
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// CRUD Alumno

app.get('/alumnos', (req, res) => {

    res.json({
        mensaje: 'GET ALUMNOS'
    })
})

app.post('/alumno', (req,res) => {

    let body = req.body

    res.json(body)
})

app.put('/alumno/:id', (req,res) => {

    let id = req.params.id

    res.json({
        mensaje: 'PUT ALUMNOS',
        id
    })
})

app.delete('/alumno/:id', (req,res) => {

    let id = req.params.id

    res.json({
        mensaje: 'DELETE ALUMNOS',
        id
    })
})

app.listen(process.env.PORT , () => {
    console.log(`Server listenning on port ${process.env.PORT}`);
})