const express = require('express')
const app = express()
require("./db") //database connection

/**
 * import routes files
 */
const index_routes = require("./routes/index")
const book_routes = require("./routes/books")
const user_routes = require("./routes/users")

// for parsing application /x-www-form-urlencodded
app.use(express.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    return res.send('Welcome to the eginning of nothingsss')
})


/**
 * Set routes imported
 */
app.use("/index", index_routes)
app.use("/book", book_routes)
app.use("/user", user_routes)

app.listen(3303, () => {
    console.log(`Example app listening on port 3300`)
})