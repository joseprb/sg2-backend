const express = require('express')
let app = express()
const bodyParser = require('body-parser')
let mhs = require('./controller/mahasiswa')

app.use(bodyParser.urlencoded({extended : true}))

app.use((req, res, next) => {
    if (req.body.nim) {
        next()
    } else {
        res.send("maaf nim tidak ada")
    }
})

// routes dengan controller ================
app.get('/mahasiswa', mhs.getMhs)
app.get('/mahasiswa/:index', mhs.getMhsByIndex)
app.post('/mahasiswa', mhs.insertMhs)
app.put('/mahasiswa/:index', mhs.updateMhs)
app.delete('/mahasiswa/:index', mhs.delMhs)
// =========================================

// app.get('/mahasiswa/:index', (req, res) => {
//     res.send("param : " + req.params.index)
// })

// app.get('/mahasiswa', (req, res) => { // cara 1
//     res.send("ini halaman get")
// })

app.listen(3000)