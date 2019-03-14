'use strict';

const express = require('express');
const os = require('os');

// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

const version = '2.0';

// App
const app = express();
app.get('/', (req, res) => {

  let ip;

  if (req.headers['x-forwarded-for'])
    ip = req.headers['x-forwarded-for'].split(",").pop();
  else ip = req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.remoteAddress;

  console.log(`IP: ${ip} on ${new Date().toISOString()}`);
  res.send(`Hello world from ${os.hostname()} and version ${version}\n`);
});

app.listen(PORT, HOST);
console.log(`Running version ${version} on http://${HOST}:${PORT}`);