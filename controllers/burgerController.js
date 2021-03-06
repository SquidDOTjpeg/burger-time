var express = require("express")

var router = express.Router()

var burger = require("../models/burger")

router.get("/", (req, res) => {
    burger.all(function (data) {
        var hbsObject = {
            burger: data
        }
        console.log(hbsObject)
        res.render("index", hbsObject)
    })
})

router.post("/api/burgers", (req, res) => {
    burger.create(["name", "have_eaten"], [req.body.name, req.body.have_eaten], function (result) {
        res.json({
            id: result.insertId
        })
    })
})

router.put("/api/burgers/:id", (req, res) => {
    var condition = "id = " + req.params.id

    console.log("Condition", condition)

    burger.update(
        {
            have_eaten: req.body.have_eaten
        },
        condition,
        function (result) {
            if (result.changedRows === 0) {
                return res.status(404).end()
            }
            res.status(200).end()
        }
    )
})

module.exports = router