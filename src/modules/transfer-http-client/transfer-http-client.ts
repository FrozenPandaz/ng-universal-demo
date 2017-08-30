import { Injectable } from '@angular/core';
// import { ConnectionBackend, Http, Request, RequestOptions, RequestOptionsArgs, Response } from '@angular/http';
import { HttpBackend, HttpClient, HttpHandler, HttpRequest, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { TransferState } from '../transfer-state/transfer-state';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/fromPromise';

interface HttpOpts {
  body?: any;
  headers?: HttpHeaders;
  params?: HttpParams;
  observe?: 'body' | 'events' | 'response';
  reportProgress?: boolean;
  responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
  withCredentials?: boolean;
}

@Injectable()
export class TransferHttpClient {
  constructor(private http: HttpClient, protected transferState: TransferState) {}


  /**
   * Performs a request with `get` http method.
   */
  get(url: string, options?: any): Observable<any> {
    return this.getData(url, options, (url: string, options: any) => {
      return this.http.get(url, options);
    });
  }
  /**
   * Performs a request with `post` http method.
   */
  post(url: string, body: any, options?: any): Observable<any> {
    return this.getPostData(url, body, options, (url: string, options: any) => {
      return this.http.post(url, body. options);
    });
  }
  /**
   * Performs a request with `put` http method.
   */
  put(url: string, body: any, options?: any): Observable<any> {
    return this.getData(url, options, (url: string, options: any) => {
      return this.http.put(url, options);
    });
  }
  /**
   * Performs a request with `delete` http method.
   */
  delete(url: string, options?: any): Observable<any> {
    return this.getData(url, options, (url: string, options: any) => {
      return this.http.delete(url, options);
    });
  }
  /**
   * Performs a request with `patch` http method.
   */
  patch(url: string, body: any, options?: any): Observable<any> {
    return this.getPostData(url, body, options, (url: string, options: any) => {
      return this.http.patch(url, body.options);
    });
  }
  /**
   * Performs a request with `head` http method.
   */
  head(url: string, options?: any): Observable<any> {
    return this.getData(url, options, (url: string, options: any) => {
      return this.http.head(url, options);
    });
  }
  /**
   * Performs a request with `options` http method.
   */
  options(url: string, options?: any): Observable<any> {
    return this.getData(url, options, (url: string, options: any) => {
      return this.http.options(url, options);
    });
  }

  request(method: string, url: string, options: HttpOpts): Observable<any> {
    return this.getRequestData(method, url, options, (method:string, url:string, options: HttpOpts) => {
      return this.http.request(method, url, options);
    });
  }

  private getRequestData(method: string, url: string, options: HttpOpts, callback: (method: string, url: string, options: HttpOpts ) => Observable<any>): Observable<any> {
    const key = url + JSON.stringify(options);

    try {
      return this.resolveData(key);

    } catch (e) {
      return callback(method, url, options)
        .map(res => res)
        .do(data => {
          this.setCache(key, data);
        });
    }
  }

  private getData(uri: string, options: any, callback: (uri: string, options?: any) => Observable<any>) {

    let url = uri;

    /*if (typeof uri !== 'string') {
      url = uri.url
    }*/

    const key = url + JSON.stringify(options);

    try {
      return this.resolveData(key);

    } catch (e) {
      return callback(url, options)
        .map(res => {
          console.log(res);
          return res;
        })
        .do(data => {
          this.setCache(key, data);
        });
    }
  }

  private getPostData(uri: string , body: any|null, options: any, callback: (uri: string, body: any|null, options?: any) => Observable<any>) {

    let url = uri;

    /*if (typeof uri !== 'string') {
      url = uri.url
    }*/

    const key = url + JSON.stringify(body) + JSON.stringify(options)

    try {

      return this.resolveData(key);

    } catch (e) {
      return callback(uri, body, options)
        .map(res => res.json())
        .do(data => {
          this.setCache(key, data);
        });
    }
  }

  private resolveData(key: string) {
    const data = this.getFromCache(key);

    if (!data) {
      throw new Error();
    }

    return Observable.fromPromise(Promise.resolve(data));
  }

  private setCache(key, data) {
    return this.transferState.set(key, data);
  }

  private getFromCache(key): any {
    return this.transferState.get(key);
  }
}
