var path = require('path');
const autoprefixer = require('autoprefixer');
 
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },

//   module: {
//     rules: [
//         {
//             test: /\.scss$/,
//             use: [
//                 {
//                     loader: 'style-loader'
//                 },
//                 {
//                     loader: 'css-loader',
//                     options: {
//                         sourceMap: true
//                     }
//                 },
//                 {
//                     loader: 'postcss-loader',
//                     options: {
//                         plugins: [
//                             autoprefixer({
//                                 browsers:['ie >= 8', 'last 4 version']
//                             })
//                         ],
//                         sourceMap: true
//                     }
//                 },
//                 {
//                     loader: 'sass-loader',
//                     options: {
//                         includePaths: [
//                             helpers.root('src', 'styles', 'global'),
//                         ],
//                         sourceMap: true
//                     }
//                 }
//             ],
//         },
//     ]
// }
};