const express = require("express");
const app = express();
const indexRoutes = require('./assets/routes/index');
const newsRoutes = require('./assets/routes/news');

app.use("/", indexRoutes);
app.use("/news", newsRoutes);

app.listen(4000, ()=>{
    console.log("Scrapper is running");
})