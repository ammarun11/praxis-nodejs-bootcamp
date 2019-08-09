var express = require('express')
var app = express()

app.use(express.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {

    //Latihan 1
    //     let num1, num2;
    //     num1 = 15
    //     num2 = 20

    //     if(parseInt(num1) > parseInt(num2))
    //     {
    //         hasil = console.log('yang Lebih besar dari' + num1 + 'dan ' + num2 + 'adalah' + num1)
    //     }
    //     else if(parseInt(num1) < parseInt(num2))
    //     {
    //         hasil = console.log('yang Lebih besar dari' + num1 + 'dan ' + num2 + 'adalah' + num2)
    //     }
    //     else {
    //         hasil = console.log('Gak ada coy')
    //     }
    //     return res.send(hasil)
    // })

    //Latihan 2

    // let a, b, c

    // a = 4
    // b = 9
    // c = 20

    // if (a > 0 && b > 0 && c > 0) {
    //     hasil = console.log('Angka Tersebut adalah +')
    // } else if (a > 0 && b > 0 && c < 0) {
    //     hasil = console.log('Angka Tersebut adalah +')
    // } else {
    //     hasil = console.log('Angka Tersebut adalah -')
    // }

    //Latihan 3
    // var x = 0;
    // var y = -1;
    // var z = 4;
    // if (x > y && x > z) {
    //     if (y > z) {
    //         hasil = console.log(x + ", " + y + ", " + z);
    //     } else {
    //         hasil = console.log(x + ", " + z + ", " + y);
    //     }
    // } else if (y > x && y > z) {
    //     if (x > z) {
    //         hasil = console.log(y + ", " + x + ", " + z);
    //     } else {
    //         hasil = console.log(y + ", " + z + ", " + x);
    //     }
    // } else if (z > x && z > y) {
    //     if (x > y) {
    //         hasil = console.log(z + ", " + x + ", " + y);
    //     } else {
    //         hasil = console.log(z + ", " + y + ", " + x);
    //     }
    // }

    // Latihan 5 
    //         for (var x=0; x<=15; x++) {
    //             if (x === 0) {
    //                     hasil = console.log(x +  " is even");

    //             }
    //             else if (x % 2 === 0) {
    //                     hasil = console.log(x + " is even");   
    //             }
    //             else {
    //                     hasil = console.log(x + " is odd");
    //             }
    //     }

    //     return res.send(hasil)
    // })


    return res.send()
})

app.listen(3300, () => {
    console.log('listen 33000')
})