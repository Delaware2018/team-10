import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UrlServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UrlServiceProvider {
      host = 'http://localhost:8080';
      phoneNumber = 0;
      loggedIn = false;

      constructor() {
        console.log('Hello UrlService Provider');
      }

      build(path) {
        return this.host + path;
      }

      setPhoneNumber(number) {
          this.phoneNumber = number;
      }

      getPhoneNumber() {
          return this.phoneNumber;
      }
}
