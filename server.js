const express = require('express');
const path = require('path');
const http = require('http');

const app = express();

// static files
app.use(express.static(path.join(__dirname, 'dist')));


// route paths to index
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


// set port for express app
const port = process.env.PORT || '3000';
app.set('port', port);


// create http server
const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));