import { Component, OnInit } from '@angular/core';

import { TransferHttp } from '../../../modules/transfer-http/transfer-http';
import { TransferHttpClient } from '../../../modules/transfer-http-client/transfer-http-client';
import { Observable } from 'rxjs/Observable';

interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address: any,
  phone: string,
  website: string,
  company: any
}

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.css']
})
export class LazyComponent implements OnInit {
  users: Observable<Array<User>>;
  photos;
  todos;
  music;
  constructor(
    private http: TransferHttp,
    private httpClient: TransferHttpClient
  ) { }

  ngOnInit() {
    // TransferHttp (Http for server-side rendering) usage
    this.users = this.http.get('http://jsonplaceholder.typicode.com/users').map(res => res);

    // TransferHttpClient (HttpClient for server-side rendering) usage
    /**
     * Example request function (GET request)
     */
    this.httpClient.request('GET', 'http://jsonplaceholder.typicode.com/todos', {
      responseType: 'json'
    }).subscribe(res => {
      //console.log(res);
      this.photos = res;
    });
    /**
     * Example post request
     */
    this.httpClient.post('http://jsonplaceholder.typicode.com/todos', {
      title: 'foo',
      body: 'bar',
      userId: 1
    }).subscribe( res => {
      //console.log(res);
      this.todos = res;
    } );
  }

  /**
   * JSONp request example
   * @param event
   * @param term
   */
  getMusicList(event, term): void {
    event.preventDefault();
    this.httpClient.jsonp(`https://itunes.apple.com/search?term=${term}&media=music`, 'callback').subscribe(res => {
      console.log(res);
      this.music = res.results;
    });
  }
}
