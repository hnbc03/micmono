import ModuleFederationPlugin from "webpack/lib/container/ModuleFederationPlugin";

export const output = {
    publicPath: "auto",
};
export const plugins = [
    new ModuleFederationPlugin({
        name: "miniAngular",
        filename: "remoteEntry.js",
        exposes: {
            './App': './src/app/app.module.ts',
        },
        shared: {
            "@angular/core": { singleton: true, strictVersion: true },
            "@angular/common": { singleton: true, strictVersion: true },
            "ng-zorro-antd": { singleton: true, strictVersion: true },
        },
    }),
];
