const express = require("express");
const app = express();
const indexRoutes = require('./assets/routes/index');
const newsRoutes = require('./assets/routes/news');

app.use("/", indexRoutes);
app.use("/news", newsRoutes);

app.listen(process.env.PORT, ()=>{
    console.log("Scrapper is running");
})