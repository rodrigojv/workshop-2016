var resolve = require('path').resolve;

module.exports = {
  entry: "./src/index.js",
  output: {
      filename: 'bundle.js',
      path: resolve(__dirname , 'build'),
	  publicPath: '/assets/'
  },
  module: {
    loaders: [
      {
        test: require.resolve("blueimp-file-upload"),
        loader: "imports?define=>false"
      },
      {
        test: require.resolve("medium-editor-insert-plugin"),
        loader: "imports?define=>false"
      },
	  {
		test: /\.css$/,
		loaders: ['style', 'css']
	  }
    ]
  }
};