const nxWebpack = require("@nrwl/react/plugins/webpack.js");

module.exports = (config, context) => {
  nxWebpack(config, context);
  return {
    ...config,
		output: {
			...config.output,
			//globalObject: 'this'
		},
		optimization: {
			...config.optimization,
			splitChunks: {
				...config.optimization.splitChunks,
				cacheGroups: {
					react: {
						test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
						name: 'react',
						chunks: 'all',
					}
				}
			}
		}
  };
};