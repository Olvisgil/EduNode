const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    const articles = [{
        title: "test article",
        createdAt: Date.now(),
        description: "test description"
    }]
})

module.exports = router;