const express = require('express');
const fs = require('fs');
const http = require('http');
const app = express();

app.use('/dep', express.static('bower_components'));
app.use('/app', express.static('app'));

app.get('/', (req, res) => {
  const indexStream = fs.createReadStream('index.html');
  res.setHeader('Content-Type', 'text/html');
  indexStream.pipe(res);
});

const server = http.createServer(app);
server.listen(3000, (err) => {
  if (err) throw err;
  console.log('Server listening in port 3000');
});

