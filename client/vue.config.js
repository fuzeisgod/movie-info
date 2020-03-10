module.exports = {
    devServer: {
        proxy: process.env.VUE_APP_REQUEST_PATH
    }
}