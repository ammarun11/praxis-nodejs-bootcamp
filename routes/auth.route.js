const express = require("express")
const router = express.Router()
const Register = require("../actions/users/register.action")
const AllUser = require("../actions/users/getAll.action")

router.post("/register", async (req, res) => {
    try {
        let data = await new Register(req).register()

        return res.status(201).json({
            status: "Success lur",
            data,
            message: "Register Successfulyy"
        })
    } catch (err) {
        return res.status(400).json({
            status:"Eror Lur",
            message: err.message
        })
    }
})

router.get("/showall", async (req, res, next) => {
    try {
        let data = await new AllUser().getAll()

        return res.status(201).json({
            status: "success",
            data,
            message: "show data successfully"
        })
    } catch(err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
})
module.exports = router