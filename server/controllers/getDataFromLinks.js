const scrape = require("../utils/scraper");

async function getDataFromLinks(search_links) {
  // const data = [];
  // search_links.forEach(async (link, index) => {
  //   if (index < 10) {
  //     try {
  //       const scholarship_links = await scrape(link.link);

  //       // console.log(index, scholarship_links);
  //       const result = {
  //         title: link.title,
  //         link: link.link,
  //         scholarship_links: scholarship_links,
  //       };
  //       data.push(result);
  //       // console.log(index, result);
  //     } catch (err) {
  //       console.error("Error: ", err);
  //     }
  //   }
  // });
  // return data;

  const data = [];

  for (const [index, link] of search_links.entries()) {
    try {
      const scholarship_links = await scrape(link.link);

      const result = {
        title: link.title,
        url: link.link,
        scholarship_links: scholarship_links,
      };

      data.push(result);
    } catch (err) {
      console.error("Error: ", err);
    }
  }

  return data;
}

module.exports = getDataFromLinks;
