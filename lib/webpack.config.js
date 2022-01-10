const path = require('path') // resolve path
module.exports = {
    mode: 'development',

    resolve: {
        extensions: ['.js', '.jsx'], // we can import without typing '.js or .jsx'
    },
    entry: {
        index: path.join(__dirname, 'src/index.jsx'),
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js', // for production use [contenthash], for developement use [hash]
        library: {
            type: 'module',
        },
        environment: { module: true },
    },
    experiments: {
        outputModule: true,
    },
    devtool: 'eval',
    module: {
        rules: [
            {
                test: /\.(css|scss|sass)$/,
                use: [
                    {
                        loader: 'style-loader', // creates style nodes from JS strings
                    },
                    {
                        loader: 'css-loader', // translates CSS into CommonJS
                    },
                    {
                        loader: 'sass-loader', // compiles Sass to CSS
                    },
                ],
            },

            {
                test: /\.(js|jsx)$/,
                exclude: /nodeModules/,

                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                exclude:
                    /images/ /* dont want svg images from image folder to be included */,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'fonts/',
                            name: '[name][hash].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
    },

    plugins: [],
}
