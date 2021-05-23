const axios = require("axios");
const cheerio = require("cheerio");

const newsUtils = {
   async fetchNewsList(){
        const {data} = await axios.get("https://bankier.pl/wiadomosci");
        const $ = cheerio.load(data);
        let articles=[];
        $(".article .entry-content").each((_idx, el) => {
			const newsTitle = $(el).find($(".entry-title > a")).attr('title');
            const imgsrc = $(el).find($('img')).attr('src');
            
			const href = $(el).find($(".entry-title > a")).attr('href');
            const timestamp = $(el).find($(".entry-meta > time")).text();
            const newsContent = $(el).find('p').text();
			articles.push({title:newsTitle, content: newsContent, timestamp: timestamp, imgsrc:imgsrc, href: href});
		});
        return articles;
    },

    async fetchArticle(href){
        try{
            const {data} = await axios.get(`https://bankier.pl${href}`);
            const $ = cheerio.load(data);
            let author = $(".m-article-attributes a").text();
            let magazine = $(".m-article-attributes span").text();
            let imgsrc = $("figure img").attr("src");
            let header = $("article .o-article-header .a-heading").text();
            let content = $("article .o-article-content * ").text();
            let source =  $(".o-article-source a img").attr("src"); 
            let article = {header, content, imgsrc, author, magazine, source};
            return article;
        }catch(e){
            console.log(e)
        }
       
    }
}

module.exports = newsUtils;