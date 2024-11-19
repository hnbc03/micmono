import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client'; // React 18 API

@Component({
  selector: 'app-react-wrapper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './react-wrapper.component.html',
  styleUrls: ['./react-wrapper.component.css'],
})
export class ReactWrapperComponent implements OnInit {
  @ViewChild('reactRoot', { static: true }) reactRoot!: ElementRef;

  ngOnInit(): void {
    import('mini_react/App').then((ReactApp) => {
      const rootElement = this.reactRoot.nativeElement;
      const root = ReactDOM.createRoot(rootElement);

      // Sử dụng React.createElement để render React component
      root.render(React.createElement(ReactApp.default));
    }).catch((err) => {
      console.error('Error loading React component:', err);
    });
  }
}
