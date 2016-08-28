'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
 entry: [
    // Para correr el server en un puerto diferente al default 8080
	// http://stackoverflow.com/questions/33272967/how-to-make-the-webpack-dev-server-run-on-port-80-and-on-0-0-0-0-to-make-it-publ
    'webpack-dev-server/client?http://0.0.0.0:80'
 ],
 devServer: {
    /* Send API requests on localhost to API server get around CORS */
	// http://webpack.github.io/docs/webpack-dev-server.html#proxy
    proxy: {
      '/influ/api/*': 'http://localhost:8080'
    }
  }
};
