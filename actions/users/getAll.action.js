const User = require("../../models/user.model")

class AllUser {
    constructor(id, name, email, password) {
        this.id = id,
        this.name = name,
        this.email = email,
        this.password = password
    }

    async getAll() {
        try{
            let query = await User.find({}).exec()

            return query
        } catch (err){
            throw err
        }
    }

    hello(){
        return 'Hello Shop'
    }
}

module.exports = AllUser