module.exports = {
  entry: './lib/index.js',
  output: {
    library: '@jsdevtools/input-ts',
    libraryTarget: 'umd',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-typescript', '@babel/preset-env', '@babel/preset-react'],
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
