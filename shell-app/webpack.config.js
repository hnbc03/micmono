import ModuleFederationPlugin from "webpack/lib/container/ModuleFederationPlugin";
import { AngularWebpackPlugin } from '@ngtools/webpack';

export const output = {
    publicPath: "auto",
};
export const plugins = [
    new ModuleFederationPlugin({
        name: "shellApp",
        remotes: {
            miniAngular: "miniAngular@http://localhost:4201/remoteEntry.js",
            miniReact: "miniReact@http://localhost:3000/remoteEntry.js",
        },
        shared: {
            "@angular/core": { singleton: true, strictVersion: true },
            "@angular/common": { singleton: true, strictVersion: true },
            "ng-zorro-antd": { singleton: true, strictVersion: true },
        },
    }),
    new AngularWebpackPlugin({
        tsConfigPath: "./tsconfig.app.json",
        entryModule: path.resolve(__dirname, './src/app/app.module#AppModule'),
    }),
];
