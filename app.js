const express = require('express')
const app = express()

// for passin application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}))

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
    var x,y,z
    var x = 5
    var y = 4
    z= x+y
    return res.send('the value is'  + z +'<br>')
})

app.post('/email', (req, res) => {
    let email = req.body.email
    
    return res.send('the email is value is' +' '+ email)
})

app.post('/ngitung', (req, res) => {
    let a = req.body.a
    let b = req.body.b

    hasil= parseInt(a) + parseInt(b);
    
    return res.send('the Value is' +' '+ hasil )
})


app.listen(3000, () => {
    console.log('magic happen at http://localhost:3000')
})

