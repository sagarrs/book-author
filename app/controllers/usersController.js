const express = require("express")
const router = express.Router()

const {User} = require("../models/user")


router.get("/", (req, res) => {
    User.find()
        .then((user) => {
            res.status("200").send(user)
        })
        .catch((err) => {
            res.status("404").send(err)
        })
})

router.get("/:id", (req, res) => {
    const id = req.params.id

    User.find({_id: id})
        .then((user) => {
            res.status("200").send(user)
        })
        .catch((err) => {
            res.status("404").send(err)
        })
})
module.exports = {
    userRouter: router
}