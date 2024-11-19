import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-angular-wrapper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './angular-wrapper.component.html',
  styleUrl: './angular-wrapper.component.css',
})
export class AngularWrapperComponent {
  remoteComponent: any;

  constructor() {
    this.loadRemoteComponent();
  }

  async loadRemoteComponent() {
    try {
      const module = await import('mini-angular/Routes');
      this.remoteComponent = module.RemoteEntryComponent;
    } catch (error) {
      console.error('Failed to load Mini Angular App', error);
    }
  }
}
