const searchDatabase = require("../Database/search.database");

const getSearchResults = async function (searchTerm) {
  return await searchDatabase.getSearchResults(searchTerm);
};

module.exports = {
  getSearchResults,
};
