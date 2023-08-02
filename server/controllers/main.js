const getGoogleLinks = require("./getGoogleLinks");
const getRelevantData = require("./getRelevantData");

const main = async () => {
  // func 1
  await getGoogleLinks();

  // func 2
  await getRelevantData();
};

module.exports = main;
