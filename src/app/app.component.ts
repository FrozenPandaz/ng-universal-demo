import { Component, OnInit } from '@angular/core'
import { TransferState, makeStateKey } from '@angular/platform-browser';

@Component({
  selector: 'demo-app',
  template: `
    <h1>Universal Demo</h1>
    <a routerLink="/">Home</a>
    <a routerLink="/lazy">Lazy</a>
    <router-outlet></router-outlet>
  `,
  styles: [
    `h1 {
      color: green;
    }`
  ]
})
export class AppComponent implements OnInit {
  constructor(private cache: TransferState) {}
  ngOnInit() {
    this.cache.set(makeStateKey<boolean>('cached'), true);
  }
}
