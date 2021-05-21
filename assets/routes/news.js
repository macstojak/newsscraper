const express = require("express");
const router = express.Router()
const newsUtils = require("../utils/newsUtils");

router.get("/", async (req, res)=>{
    let news = await newsUtils.fetchNewsList();
    console.log("NEWS", news)
    res.send(news);
})

module.exports = router;