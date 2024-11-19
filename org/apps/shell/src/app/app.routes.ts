import { Routes } from '@angular/router';
import { AngularWrapperComponent } from './AngularWrapperComponent/angular-wrapper.component';
import { ReactWrapperComponent } from './ReactWrapperComponent/react-wrapper.component';

export const appRoutes: Routes = [
  // {
  //   path: 'mini-angular',
  //   component: AngularWrapperComponent,
  // },
  {
    path: 'mini-react',
    loadComponent: () => import('./ReactWrapperComponent/react-wrapper.component').then(m => m.ReactWrapperComponent),
  },
  {
    path: '**',
    redirectTo: '',
  }
];
