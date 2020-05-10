const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { ANALYZE } = process.env

const isProd = process.env.NODE_ENV === 'production'


module.exports = (phase, { defaultConfig }) => {

    console.log(phase)
    // https://github.com/zeit/
    return {
        distDir: 'build',
        // generateEtags: false //禁止 etag 生成

        // 配置构建 ID
        generateBuildId: async () => {
            // For example get the latest git commit hash here
            return 'my-build-id'
        },

        // You may only need to add assetPrefix in the production.
        assetPrefix: isProd ? 'https://cdn.mydomain.com' : '',

        webpack: function (config, { isServer }) {
            if (ANALYZE) {
                config.plugins.push(new BundleAnalyzerPlugin({
                    analyzerMode: 'server',
                    analyzerPort: isServer ? 8888 : 8889,
                    openAnalyzer: true
                }))
            }
            console.log('config', config)
            return config
        },

        // 暴露配置到服务端和客户端
        serverRuntimeConfig: { // Will only be available on the server side
            mySecret: 'secret'
        },
        publicRuntimeConfig: { // Will be available on both server and client
            staticFolder: '/static',
            mySecret: process.env.MY_SECRET // Pass through env variables
        }
    }
}