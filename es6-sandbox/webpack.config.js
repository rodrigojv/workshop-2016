var resolve = require('path').resolve;
module.exports = {
	entry: './app.js',
	context: resolve(__dirname, 'src'),
	output: {
		filename: 'bundle.js',
		pathinfo: true
	},
	devtool: 'eval',
	module: {
		loaders: [
		    /* Convertir ES6 a ES5 */
			{   
				test: /\.js$/, 
				loader: 'babel', 
				exclude: /node_modules/,
				query: {
					presets: ['es2015'] // sin este preset no funciona, modulo babel-preset-es2015
				}
			},
			{ test: /\.css$/, loaders: ['style', 'css'] }
		]
	}
};