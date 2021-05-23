const express = require("express");
const { route } = require(".");
const router = express.Router()
const newsUtils = require("../utils/newsUtils");

router.get("/", async (req, res)=>{
    let news = await newsUtils.fetchNewsList();
    res.send(news);
})
const checkTheRules = (req, res, next)=>{
     req.query?(req.query.href?next():res.send("No data provided")):res.send("Wrong request");
}

router.get("/article", checkTheRules, async (req,res)=>{
    let article = await newsUtils.fetchArticle(req.query.href);
    res.send(article);
})

module.exports = router;