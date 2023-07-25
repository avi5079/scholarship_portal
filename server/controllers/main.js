const getGoogleLinks = require("./getGoogleLinks");
const saveData = require("./getRelevantData");

const main = async () => {
  // func 1
  await getGoogleLinks();

  // func 2
  await saveData();
};

module.exports = main;
