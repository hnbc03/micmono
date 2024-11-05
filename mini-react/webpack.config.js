import ModuleFederationPlugin from "webpack/lib/container/ModuleFederationPlugin";

export const output = {
    publicPath: "auto",
};
export const plugins = [
    new ModuleFederationPlugin({
        name: "miniReact",
        filename: "remoteEntry.js",
        exposes: {
            './App': './src/App.js',
        },
        shared: {
            react: { singleton: true, strictVersion: true },
            "react-dom": { singleton: true, strictVersion: true },
            "antd": { singleton: true, strictVersion: true },
        },
    }),
];
