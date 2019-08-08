const express = require('express')
const app = express()
const array_lib = require("./lib/array")
const object_lib = require("./lib/object")
const tugas_lib = require("./lib/tugas")

/**
 * List of imported routes
 */
const array_routes = require('./routes/array')

// for passin application/x-www-form-urlencoded
app.use(express.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    // //Fungsi 
    // function printText(z){
    //     var a = 'belajar <br>';
    //     var b = 'sinau';

    //     return a+b+z;
    // }    

    // function ngitung(){
    //     //pernjumlahan 
    //     a = 5;
    //     b = 10;
    //     return a+b;
    // }

    // //array 
    //     var kotak = ['palo','ammar', 11 ]
    var x, y, z
    var x = 5
    var y = 4
    z = x + y
    return res.send('the value is' + z + '<br>')
})

app.post('/email', (req, res) => {
    let email = req.body.email

    return res.send('the email is value is' + ' ' + email)
})

app.post('/ngitung', (req, res) => {
    let a = req.body.a
    let b = req.body.b

    hasil = parseInt(a) + parseInt(b);

    return res.send('the Value is' + ' ' + hasil)
})

app.get('/example-1', (req, res) => {
    let data = ["Red", "Blue", "Yellow", "Green"]
    let manipulation = array_lib(data)
    return res.send(manipulation)
})

app.get('/example-2', (req, res) => {
    let data = {
        firstname: "John",
        lastname: "Doe",
        email: "john.doe@mail.com",
        gender: "men"
    }
    let result = object_lib.manipulate(data)

    return res.send(result)
})

app.get("/example-3", (req, res) => {
    let input = ["Black"]
    let data = ["Red", "Blue", "Yellow", "Green"]
    console.log("before ", data)

    let result = object_lib.merge(data = data, input = input)
    console.log("after ", result)

    return res.send(result)
})

app.get("/example-4", (req, res) => {
    let empty_data = []
    console.log("before ", empty_data)

    let color = "Red"
    object_lib.add(empty_data, color)
    console.log("after ", empty_data)

    return res.send(empty_data)
})

///TAKS 

app.get('/taks-1', (req, res) => {
    let data = ["Beta", "Delta", "Alpha", "Cinta"]
    let result = tugas_lib.urutan(data)

    return res.send(result)
})

app.get('/taks-2', (req, res) => {
    let data = ["Alpha", "Beta", "Cinta", "Delta"]
    let result = tugas_lib.dibalik(data)

    return res.send(result)
})


/**
 * Set all routes
 */
app.use("/array", array_routes)
app.listen(3300, () => {
    console.log('magic happen at http://localhost:3300')
})