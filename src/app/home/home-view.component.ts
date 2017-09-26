import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TransferHttp } from '../../modules/transfer-http/transfer-http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'home-view',
  template: `<h3>{{subs | async}}</h3>
		<ul>
			<li *ngFor="let post of posts | async">{{post.title}}</li>
		</ul>
  `
})
export class HomeView implements OnInit {
  public subs: Observable<string>;
  public posts: Observable<any>;
  constructor(
    private http: TransferHttp,
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit() {
    this.title.setTitle('Home page');
    this.meta.updateTag({name: 'description', content: 'Homepage description'});
    this.meta.updateTag({name: 'keywords', content: 'Angular, Angular 2, Angular 4, Universal, Angular Universal, Server-side rendering'});
    this.subs = this.http.get('http://localhost:8000/data').map(data => {
        return `${data.greeting} ${data.name}`;
    });

    this.posts = this.http.get('http://jsonplaceholder.typicode.com/posts').map(data => {
    	return data;
    });
  }
}
