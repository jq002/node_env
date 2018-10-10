webpack的命令行参数
```
--mode      Enable production optimizations or development hints.[choices: "development", "production", "none"]
-p      shortcut for --optimize-minimize --define process.env.NODE_ENV="production"    
--optimize-minimize      Enable minimizing the output. Uses optimization.minimizer.  
--define     Define any free var in the bundle 
```


#### npm run build
```
(webpack.config.js )process.env.NODE_ENV = undefined
(index.js )process.env.NODE_ENV = production
```
WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/concepts/mode/
#### npm run build:p
```
(webpack.config.js )process.env.NODE_ENV = undefined
(index.js )process.env.NODE_ENV = production
```
#### npm run build:prod
```
(webpack.config.js )process.env.NODE_ENV = undefined
process.env.NODE_ENV 的值是(webpack.config.prod.js)：undefined
(index.js )process.env.NODE_ENV = production

```
#### npm run build:cross-env
```
(webpack.config.js )process.env.NODE_ENV = production
(webpack.config.js )process.env.TEST_ENV = production
(index.js )process.env.NODE_ENV = production
(index.js )process.env.TEST_ENV = undefined
```
#### npm run build:test

```
(webpack.config.js )process.env.NODE_ENV = undefined
(webpack.config.js )process.env.TEST_ENV = undefined
(index.js )process.env.NODE_ENV = development
(index.js )process.env.TEST_ENV = development
```
webpack文档上写着：
> 技术上讲，NODE_ENV 是一个由 Node.js 暴露给执行脚本的系统环境变量。通常用于决定在开发环境与生产环境(dev-vs-prod)下，服务器工具、构建脚本和客户端 library 的行为。然而，与预期不同的是，无法在构建脚本 webpack.config.js 中，将 process.env.NODE_ENV 设置为 "production"，请查看 #2537。因此，例如 process.env.NODE_ENV === 'production' ? '[name].[hash].bundle.js' : '[name].bundle.js' 这样的条件语句，在 webpack 配置文件中，无法按照预期运行。

[issue](https://github.com/webpack/webpack/issues/2537)

> 总结：node命令行参数配置，在执行脚本时可以用（webpack.config.js里面可以访问到），要在构建时使用，要webpack.DefinedPlugin()或者使用webpack参数--define
> 至于index.js里面一直可以访问到NODE_ENV问题，带查找




## cross-env
cross-env能跨平台地设置及使用环境变量

大多数情况下，在windows平台下使用类似于: NODE_ENV=production的命令行指令会卡住，windows平台与POSIX在使用命令行时有许多区别（例如在POSIX，使用$ENV_VAR,在windows，使用%ENV_VAR%。。。）

cross-env让这一切变得简单，不同平台使用唯一指令，无需担心跨平台问题

