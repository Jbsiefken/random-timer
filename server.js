const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();


// import body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// static files
app.use(express.static(path.join(__dirname, 'dist')));


// Set our api routes
const api = require('./server/routes/api');
app.use('/api', api);


// route all other paths to index
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


// set port for express app
const port = process.env.PORT || '3000';
app.set('port', port);


// create http server
const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));