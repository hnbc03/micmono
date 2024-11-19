import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'shell',
  remotes: [
    ['mini-angular', 'http://localhost:4201/remoteEntry.js'],
    ['mini_react', 'http://localhost:3000/remoteEntry.js'],
  ],
};

export default config;
