const User = require("../models/user")
const {
    isInteger,
    isString
} = require("lodash")

const create = async (req) => {
    let {
        name,
        phone
    } = req.body

    let email = req.body.email.toLowerCase()

    phone = parseInt(phone)

    if (name == parseInt(name)) {
        return "wrong type of name"
    }
    console.log(typeof name)
    console.log(typeof phone)

    if (isInteger(phone) === false) {
        return "Wrong type of phone"
    } else if (isString(name) === false) {
        return "Wrong type of name"
    }

    var insert_data = {
        name,
        email,
        phone
    }

    let data = new User(insert_data)

    try {
        await data.save()

        return data
    } catch (err) {
        throw err
    }
}

const getAll = async () => {
    try {
        let query = await User.find({}).exec()
        let data = query.map((value, index) => {
            return {
                name: value.name,
                email: value.email,
                phone: value.phone
            }
        })
        return data
    } catch (err) {
        throw err
    }
}

const getDetail = async (id) => {
    try {
        let query = await User.findOne({
            _id: id
        }).exec()

        return query
    } catch (err) {
        throw err
    }
}

const update = async (id, updated_data) => {
    let {
        name,
        email,
        phone,
        fresh
    } = updated_data
    let opts = { new: fresh === "true" ? true : false }

    let data = {
        name,
        email,
        phone
    }

    try {
        let query = await User.findOneAndUpdate({
            _id: id
        }, data, opts).exec()

        return query
    } catch (err) {
        throw err
    }
}

const destroy = async (id) => {
    try {
        let query = await User.findByIdAndDelete({
            _id: id
        }).exec()

        return query
    } catch (err) {
        throw err
    }
}

module.exports = {
    create,
    getAll,
    getDetail,
    update,
    destroy
}