const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    mode: "development",
    devServer: {
        port: 8082,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "cart",
            filename: "remoteEntry.js",
            exposes: {
                "./CartShow": "./src/bootstrap"
            },
            shared: ['faker'],
            // following if we want the webpack to only load one version if the versions of the shared libs are used in more frontends strictly
            // shared: {
            //     faker: {
            //         singleton: true
            //     }
            // }
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        })
    ]
}