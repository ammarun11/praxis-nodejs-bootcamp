const express = require("express")
const router = express.Router()
const Register = require("../actions/users/register.action")
const AllUser = require("../actions/users/getAll.action")
const Login = require("../actions/users/login.action")
const verifyToken = require("../middleware/verify_token.middleware")

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
            status: "Eror Lur",
            message: err.message
        })
    }
})

// router.get("/showall", async (req, res, next) => {
//     try {
//         let data = await new AllUser().getAll()

//         return res.status(201).json({
//             status: "success",
//             data,
//             message: "show data successfully"
//         })
//     } catch (err) {
//         return res.status(400).json({
//             status: "error",
//             message: err.message
//         })
//     }
// })

router.post("/login", async (req, res, next) => {
    try {


        let data = await new Login(req).login()

        return res.status(200).json({
            status: " Succes lur",
            data,
            message: " Login Successfully"
        })
    } catch (err) {
        return res.status(400).json({
            status: " gagal lur",
            message: err.message
        })
    }
})





// router.get("/"), async (req, res, next) => {
//     try {

//     }
// })

// router.get("/:id", async (req, res, next) => {
//     try {
//         let { id } = req.params
//         let data = await new ShowShop(id).exec()
//         console.log(`Type of ShowShop is ${typeof ShowShop}`)

//         return res.status(200).json({
//             status: "success",
//             data,
//             message: "Get detail of shop"
//         })
//     } catch(err) {
//         return res.status(400).json({
//             status: "error",
//             message: err.message
//         })
//     }
// })



module.exports = router