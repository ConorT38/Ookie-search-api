const express = require('express');
const http = require('http');
const cors = require('cors');

//setup app & its routes
const app = express();
app.use(cors());
const routes = require('./routes/index.route');
app.use(routes);

//start http server
const port = 8080;
const httpServer = http.createServer(app);
httpServer.listen(port);
console.log(`http server listening at port ${port}`);

module.exports = { app };