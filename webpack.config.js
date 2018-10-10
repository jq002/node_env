const path=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')

const config={
    entry:path.join(__dirname,'index.js'),
    output:{
        path:path.join(__dirname,"dist"),
        filename:'bundle.js'
    },
    plugins:[
        new HtmlWebpackPlugin()
    ]
}

module.exports=config
console.log('(webpack.config.js )process.env.NODE_ENV = '+process.env.NODE_ENV)
console.log('(webpack.config.js )process.env.TEST_ENV = '+process.env.TEST_ENV)