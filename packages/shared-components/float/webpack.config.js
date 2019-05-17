module.exports = {
  entry: './src/index.js',
  output: {
    library: '@jsdevtools/place-holder',
    libraryTarget: 'umd',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    ],
  },
  externals: {
    react: 'react',
    'styled-components': 'styled-components',
  },
  mode: 'development',
};
