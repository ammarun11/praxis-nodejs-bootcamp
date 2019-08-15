const express = require('express')
const app = express()
require("./db") //database connection



// for parsing application /x-www-form-urlencodded
app.use(express.urlencoded({
    extended: true
}))

/**
 * all routes imported
 */

require('./routes/main')(app)




app.listen(3302, () => {
    console.log(`Example app listening on port 3302`)
})