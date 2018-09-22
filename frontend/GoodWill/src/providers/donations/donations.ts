import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { UrlServiceProvider } from '../url-service/url-service';
import 'rxjs/Rx';

/*
Generated class for the DonationsProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
@Injectable()
export class DonationsProvider {

    moneyDonated = 50;

    constructor(public http: Http, public urlServiceProvider :UrlServiceProvider) {
        console.log('Hello DonationsProvider Provider');
    }

    addMoneyDonated(amount) {
        this.moneyDonated += amount;
    }

    getMoneyDonated() {
        return this.moneyDonated;
    }
    getNumberOfDonations() {
        return new Promise<any>(resolve => {
            var donationsUrl = this.urlServiceProvider.build('/donation/size');
            let opt:RequestOptions;
            let headers:Headers = new Headers;

            opt = new RequestOptions({
                headers:headers
            })

            headers.set('phoneNumber', this.urlServiceProvider.getPhoneNumber().toString());

            console.log(this.urlServiceProvider.getPhoneNumber())

            this.http.get(donationsUrl, opt)
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }
            );
        });
    }
    getDonations() {
        return new Promise<any>(resolve => {
            var donationsUrl = this.urlServiceProvider.build('/donation/findDonations');
            let opt:RequestOptions;
            let headers:Headers = new Headers;

            opt = new RequestOptions({
                headers:headers
            })

            headers.set('phoneNumber', this.urlServiceProvider.getPhoneNumber().toString());

            console.log(this.urlServiceProvider.getPhoneNumber())

            this.http.get(donationsUrl, opt)
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }
            );
        });
    }
}