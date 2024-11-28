import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '@micmono/data-access-user';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'micmono-root',
  template: `
    <h1 class="dashboard-nav" style="color: brown; margin-left: 30px">Dashboard</h1>
    <div *ngIf="isLoggedIn$ | async; else signIn" style="color: brown; margin-left: 30px; font-weight: bold">
      Bạn đã đăng nhập, vì thế bạn nhìn thấy dòng chữ này.
    </div>
    <ng-template #signIn><router-outlet></router-outlet></ng-template>
  `,
})
export class AppComponent implements OnInit {
  private router = inject(Router);
  private userService = inject(UserService);
  isLoggedIn$ = this.userService.isUserLoggedIn$;

  ngOnInit() {
    this.isLoggedIn$
      .pipe(distinctUntilChanged())
      .subscribe(async (loggedIn) => {
        // Queue the navigation after initialNavigation blocking is completed
        setTimeout(() => {
          if (!loggedIn) {
            this.router.navigateByUrl('mini_angular');
          } else {
            this.router.navigateByUrl('');
          }
        });
      });
  }
}