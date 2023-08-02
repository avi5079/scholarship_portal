const Links = require("../models/Links");
const searchGoogle = require("../utils/crawler");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const getGoogleLinks = async () => {
  // 1 get the links from the crawler
  const links = await searchGoogle("scholarship", 1, false);

  // store in db
  links.forEach(async (link) => {
    // console.log(link);
    const saved = await Links.create({ title: link.title, link: link.link });
    // console.log({ saved });
  });
};

module.exports = getGoogleLinks;
