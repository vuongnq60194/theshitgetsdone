'use strict'

var express = require('express');
var path = require('path');
var cfenv = require('cfenv');

var app = express();
var router = express.Router();
var appEnv = cfenv.getAppEnv() || 3000;

//---Webpack---
var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');
var config = require('./webpack.config.js');
const compiler = webpack(config);
app.use(webpackMiddleware(compiler));
//---End Webpack---

// router.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public/index.html'))
// });

router.use(function (req, res, next) {
  var isApi = req.url.split('/')[1];
  if (isApi !== 'api') {
    res.sendFile(path.join(__dirname, 'public/index.html'))
  } else {
    next();
  }
});

router.get('/api/test', function (req, res) {
  res.json({ text: "I'm a text" })
});

app.use('/', router);

app.listen(appEnv.port, '0.0.0.0', function () {
  console.log("server starting on " + appEnv.url);
});