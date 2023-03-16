const axios = require("axios");
const cheerio = require("cheerio");

async function scrape() {
  const URLsToVisit = ["https://scholarship.up.gov.in"];
  const visitedURLs = [];

  const scholarshipsLinks = new Set();

  while (URLsToVisit.length != 0) {
    const url = URLsToVisit.pop();
    const pageHTML = await axios.get(url);

    visitedURLs.push(url);
    const $ = cheerio.load(pageHTML.data);

    $("a").each((index, element) => {
      const link = $(element).attr("href");
      var linkText = $(element).text();
      // console.log(link);
      // console.log(linkText);
      linkText = linkText.toLowerCase();

      if (linkText.includes("scholarship")) {
        scholarshipsLinks.add(link);
        console.log(link);
      }
    });
  }

  console.log([...scholarshipsLinks]);
}

module.exports = scrape;
