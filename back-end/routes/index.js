const express = require("express");
const router = express.Router();

const { comments } = require('./../connector/db');

/* GET home page. */
router.get("/", (req, res) => {
    res.render("index", { title: "Express" });
});


router.get('/comments', async (req, res) => {
    try {
        const result = await comments().aggregate([]).toArray();
        return res.json({
            data: result
        });
    } catch (error) {
        return res.send(500, {
            prettyMsg: "Something went wrong",
            error
        })
    }
});
module.exports = router;
