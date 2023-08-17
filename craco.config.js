const path = require('path')
module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@utils': path.resolve(__dirname, 'src/utils')
        },
        // module: {
        //     rules: [
        //         {
        //             test: /\.svg$/i,
        //             issuer: /\.[jt]sx?$/,
        //             use: ['@svgr/webpack'],
        //         },
        //     ],
        // },
    },
}