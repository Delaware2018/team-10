import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { UrlServiceProvider } from '../url-service/url-service';
import 'rxjs/Rx';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  constructor(public http: Http, public urlServiceProvider :UrlServiceProvider) {
    console.log('Hello UserProvider Provider');
  }

  getProfile() {
      return new Promise(resolve => {
          var profileUrl = this.urlServiceProvider.build('/user/get');
          let opt:RequestOptions;
          let headers:Headers = new Headers;

          opt = new RequestOptions({
              headers:headers
          })

          headers.set('phoneNumber', this.urlServiceProvider.getPhoneNumber().toString());

          console.log(this.urlServiceProvider.getPhoneNumber())

          this.http.get(profileUrl, opt)
            .map(res => res.json())
            .subscribe(data => {
              resolve(data);
            }
      );
  });

}
}