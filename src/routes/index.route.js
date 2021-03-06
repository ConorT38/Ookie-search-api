const express = require('express');
const search = require('./search.route');

const router = express.Router();

router.use('/search', search);

router.get('/health', (req, res) => {
  const healthcheck = {
		uptime: process.uptime(),
		message: 'OK',
		timestamp: Date.now()
  };
  res.send(JSON.stringify(healthcheck));
});

module.exports = router;