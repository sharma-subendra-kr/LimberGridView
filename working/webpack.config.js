module.exports = {
	mode : "production",
	entry : "./libs/limberGridView.js",
	output : {
		filename : "./libs/limberGridView.min.js"
	},
}









// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// module.exports = {
// 	mode : "production",
//   	plugins: [
//     new MiniCssExtractPlugin({
//       	// Options similar to the same options in webpackOptions.output
//       	// both options are optional
//       	filename: "./libs/limberGridView.css",
//       	chunkFilename: "./libs/limberGridView.min.css"
//     })
//   	],
//   	module: {
// 	    rules: [
// 	      	{
// 	        	test: /\.css$/,
// 	        	use: [
// 	          		{
// 	            		loader: MiniCssExtractPlugin.loader,
// 		            		options: {
// 			              	// you can specify a publicPath here
// 			              	// by default it use publicPath in webpackOptions.output
// 			              	publicPath: './'
// 	            		}
// 	          		},
// 	          		"css-loader"
// 	    		]
// 	      	}
// 		]
// 	}
// }

