import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '@micmono/data-access-user';
import { inject } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'micmono-mini_angular-entry',
  template: `
    <div class="container">
      <div id="login">
        <h1>ACCOUNT LOGIN</h1>
        <form id="login-form" (ngSubmit)="login()">
          <!-- Nhập username -->
          <div class="form-item">
            <input
              type="text"
              name="username"
              placeholder="Username"
              [(ngModel)]="username"
            />
          </div>

          <!-- Nhập password -->
          <div class="form-item">
            <input
              type="password"
              name="password"
              placeholder="Password"
              [(ngModel)]="password"
            />
          </div>

          <!-- Nút đăng nhập -->
          <button type="submit" class="login-form-button">Log in</button>
        </form>
        <div *ngIf="isLoggedIn$ | async">User is logged in!</div>
      </div>
    </div>
  `,
  styles: [
    `
      /* Container chính */
      .container {
        display: flex;
        justify-content: center;
        width: 100%;
      }

      /* Form đăng nhập */
      #login {
        background-color: #fefefe;
        padding: 50px;
        border-radius: 10px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        text-align: center;
        width: 300px;
      }

      h1 {
        font-size: 26px;
        letter-spacing: 1px;
        margin-bottom: 30px;
        font-weight: 500;
        background: linear-gradient(to right, orange, blue);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-family: sans-serif;
      }

      /* Form item */
      .form-item {
        margin-bottom: 16px;
        position: relative;
      }

      input {
        width: 90%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
      }

      /* Nút đăng nhập */
      .login-form-button {
        width: 100%;
        margin: 20px 0;
        border: none;
        background: linear-gradient(to right, #e38e49, #1f509a);
        color: white;
        font-weight: 500;
        border-radius: 5px;
        padding: 10px 0;
        font-size: 16px;
        cursor: pointer;
        transition: background 0.3s ease;
      }

      .login-form-button:hover {
        background: linear-gradient(to right, #ff7e00, #1e90ff);
      }
    `,
  ],
})
export class RemoteEntryComponent {
  private userService = inject(UserService);
  username = '';
  password = '';
  isLoggedIn$ = this.userService.isUserLoggedIn$;

  login() {
    this.userService.checkCredentials(this.username, this.password);
  }
}
