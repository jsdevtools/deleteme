module.exports = {
  entry: './src/index.js',
  output: {
    library: '@jsdevtools/tuneable-stardust-ui-plugin',
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
    '@stardust-ui/react': '@stardust-ui/react',
  },
  mode: 'development',
};
