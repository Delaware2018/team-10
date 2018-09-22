import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { UrlServiceProvider } from '../url-service/url-service';
import 'rxjs/Rx';
/*
  Generated class for the RewardsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RewardsProvider {

  constructor(public http: Http, public urlServiceProvider : UrlServiceProvider, public requestOptions: RequestOptions) {
    console.log('Hello RewardsProvider Provider');
  }

  addPoints(points) {
      return new Promise(resolve => {
          var profileUrl = this.urlServiceProvider.build('/reward/points/add/' + points);
          let opt:RequestOptions;
          let headers:Headers = new Headers;

          opt = new RequestOptions({
              headers:headers
          })

          headers.set('phoneNumber', this.urlServiceProvider.getPhoneNumber().toString());

          this.http.get(profileUrl, opt)
          .map(res => res.json())
          .subscribe(data => {
              resolve(data);
            }
          );
      });
    }

  getRewards() {
      return new Promise(resolve => {
          var profileUrl = this.urlServiceProvider.build('/reward/get');
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
