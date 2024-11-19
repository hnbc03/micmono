import { Component } from '@angular/core';

@Component({
  selector: 'app-nx-welcome',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h1 style="color: red;">Mini Angular App</h1>
      <p style="font-style: italic;">This is content from the Angular micro frontend.</p>
    </div>
  `,
  styles: [],
})
export class NxWelcomeComponent {}
