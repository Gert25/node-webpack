const path  = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS  = {
     //Setting up entry path to build from
     app: path.join(__dirname, 'index.js'), 
     //Setting up path for output
     build: path.join(__dirname, 'build'),
}

module.exports = {
    entry:{
        app: PATHS.app,
    },
    output: {
        path: PATHS.build, 
        
        filename: '[name].js'
    }, 
    plugins: [
        new HtmlWebpackPlugin({
            title:'Webpack Demo'
        })
    ]

}