const express = require('express')
const app = express()
const array_lib = require('./lib/array')
const loop_for = require('./lib/loop/loop_for')
const loop_foreach = require('./lib/loop/loop_foreach')
const loop_map = require('./lib/loop/loop_map.js')
const loop_map_object = require('./lib/loop/loop_map_object')
//const array_condition = require('./lib/array-condition')

// For passin x-www-form-urlencoded
app.use(express.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {

    return res.send('Your path way Just Beguunnn!!')
})


app.get('/ngulang', (req, res) => {
    let x, y, z
    x = 5
    y = 6
    z = x * y

    return res.send('the value is' + z)
})

app.post('/ngulang1', (req, res) => {

    let {
        siji,
        loro
    } = req.body
    // Tipe bawaan POST adalah STRING maka harus di parse()
    let hasil = parseInt(siji) + parseInt(loro)
    console.log(hasil)
    return res.send('So this your calculate of value= ' + hasil)

})

app.get('/ngulang2', (req, res) => {
    let data = ['mario', 'ferry', 'siti', 'yogi']
    let hasil = array_lib(data)

    return res.send("So this result " + hasil)
})
///Belajar Looping

app.get('/looping-for', (req, res) => {
    let data = ['naufal', 'palo', 'ammar']
    let hasil = loop_for(data)

    return res.send(hasil)
})

app.get('/looping-foreach', (req, res) => {
    let data = ['naufal', 'palo', 'ammar', 'adelia']
    let hasil = loop_foreach(data)

    return res.send(hasil)
})

app.get('/looping-map', (req, res) => {
    let data = ['naufal', 'palo', 'ammar', 'adelia']
    let hasil = loop_map(data)

    return res.send(hasil)
})

app.get('/looping-map-object', (req, res) => {
let data = [{
        name: "Red",
        note: "Danger"
    },
    {
        name: "Yellow",
        note: "Warning"
    },
    {
        name: "Green",
        note: "Success"
    }
]

let result = loop_map_object(data)

return res.send(result)
})

app.listen(4000, () => {
    console.log('Magic happen at your http://localhost:4000')
})