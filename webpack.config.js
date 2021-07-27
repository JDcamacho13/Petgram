const HtlmWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const path = require('path');

module.exports = {
    output: {
        filename: 'app.bundle.js',
        publicPath: '/'
    },
    plugins: [
        new HtlmWebpackPlugin({
            template: 'src/index.html'
        }),
        new WebpackPwaManifest({
            name: 'Petgram - Tu app social de mascotas',
            short_name: 'Petgram 🐶',
            description: 'Fotos de animales domésticos',
            orientation: 'portrait',
            display: 'standalone',
            start_url: '/',
            scope: '/',
            background_color: '#fff',
            theme_color: '#b1a',
            icons: [
                {
                    src: path.resolve('src/assets/icon.png'),
                    sizes: [96, 128, 192, 256, 384, 512]
                },
                {
                    src: path.resolve('src/assets/icon.png'),
                    size: '1024x1024'
                },
                {
                    src: path.resolve('src/assets/icon.png'),
                    size: '1024x1024',
                    purpose: 'maskable'
                }
            ]
        }),
        new WorkboxWebpackPlugin.GenerateSW({
            swDest: 'service-worker.js',
            clientsClaim: true,
            skipWaiting: true,
            maximumFileSizeToCacheInBytes: 5000000,
            runtimeCaching: [
                {
                    // eslint-disable-next-line prefer-regex-literals
                    urlPattern: new RegExp('https://(res.cloudinary.com|images.unsplash.com)'),
                    handler: 'CacheFirst',
                    options: {
                        cacheName: 'images'
                    }

                },
                {
                    // eslint-disable-next-line prefer-regex-literals
                    urlPattern: new RegExp('https://petgram-server-jd-camacho.vercel.app'),
                    handler: 'NetworkFirst',
                    options: {
                        cacheName: 'api'
                    }

                }
            ]
        })
    ],
    devServer: {
        historyApiFallback: {
            disableDotRule: true
        }
    },
    mode: 'development',
    module: {

        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]

    }
}
