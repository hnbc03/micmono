import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'mini-angular',
  exposes: {
    './Routes': 'apps/mini-angular/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
