const searchService = require("../services/search.service");

const getSearchResults = async function (req, res) {
  console.log(await searchService.getSearchResults(req.params.searchTerm));
  res.send(await searchService.getSearchResults(req.params.searchTerm));
};

module.exports = {
  getSearchResults,
};
