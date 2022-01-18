const express = require('express');
const router = express.Router({ mergeParams: true });

const searchController = require('../controllers/search.controller');

router.route('/:searchTerm')
    .get(searchController.getSearchResults);

module.exports = router;