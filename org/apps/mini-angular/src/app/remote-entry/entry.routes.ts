import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';

export const RemoteEntryRoutes: Route[] = [
  { path: '', component: RemoteEntryComponent, pathMatch: 'full', },
];

export { RemoteEntryComponent };