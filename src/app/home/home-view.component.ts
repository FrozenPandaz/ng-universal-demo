import { Component, OnInit, OnDestroy } from '@angular/core';
import { CachedHttp } from '../../modules/cached-http/cached-http';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'home-view',
	template: `<h3>{{subs | async}}</h3>`
})
export class HomeView implements OnInit, OnDestroy {
  public subs: Observable<string>;

  constructor(private http: CachedHttp) {}

  ngOnInit() {
    this.subs = this.http.get('http://localhost:8000/data').map(data => {
      return `${data.greeting} ${data.name}`;
    });
  }
  ngOnDestroy() {
    if (this.subs && this.subs.unsubscribe) {
      this.subs.unsubscribe();
    }
  }
}
