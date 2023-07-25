const Links = require("../models/Links");
const scrape = require("../utils/scraper");
const ScholarshipLinks = require("../models/ScholarshipLinks");

const getRelevantData = async () => {
  // get all the link from db

  let search_links = [];
  try {
    search_links = await Links.find({});
    console.log("Fetched data:", search_links);
  } catch (err) {
    console.error("Error fetching data");
  }

  // console.log(search_links);

  data = [];
  search_links.forEach(async (link, index) => {
    try {
      const scholarship_links = await scrape(link.link);
      const result = { title: link.title, links: scholarship_links };
      data.push(result);
      // console.log(result);
    } catch (err) {
      console.error("Error scraping data");
    }
  });

  return data;
};

const saveData = async () => {
  const data = await getRelevantData();
  console.log("data: ", data);

  data.forEach(async (d) => {
    try {
      const saved = await ScholarshipLinks.create({
        title: d.title,
        links: d.links,
      });
    } catch (err) {
      console.log("Error saving data");
    }
  });
};

module.exports = saveData;
