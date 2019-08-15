const shops = require("./shop.route")

const routes = (app) => {
    app.use("/shop", shops)
    app.get('/', (req, res) => {
        return res.send('Welcome to the eginning of nothingsss')
    })
}

module.exports = routes