'use strict'

var express = require('express');
var path = require('path');
var cfenv = require('cfenv');

var app = express();
var appEnv = cfenv.getAppEnv() || 3000;

//---Webpack---
var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');
var config = require('./webpack.config.js');
const compiler = webpack(config);
app.use(webpackMiddleware(compiler));  
//---End Webpack---

// app.use(express.static(__dirname));
// app.use(express.static(path.join(__dirname + '/src')));
app.use(express.static(__dirname + '/'));
app.get('*', function (req, res) {
  console.log("go -- go")
    res.sendFile(path.join(__dirname + '/src/index.html'));
});
// app.get('*', function (request, response){
//   console.log("go -- go")
//   response.sendFile(path.resolve(__dirname, 'src', 'index.html'))
// });
app.listen(appEnv.port, '0.0.0.0', function() {
  console.log("server starting on " + appEnv.url);
});