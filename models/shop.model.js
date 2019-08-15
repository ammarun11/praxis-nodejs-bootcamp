const mongoose = require("mongoose")
const Schema = mongoose.Schema

let ShopSchema = new Schema ({
    name: String,
    description: String,
    owner: String,
    created_at: {
        type : Date, default: Date.now()
    },
    created_at: {
        type : Date, default: Date.now()
    }

})

let Shop = mongoose.model("Shop", ShopSchema)

module.exports = Shop