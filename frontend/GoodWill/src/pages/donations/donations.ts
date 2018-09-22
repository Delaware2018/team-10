import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DonationsProvider } from '../../providers/donations/donations';

@IonicPage()
@Component({
    selector: 'page-donations',
    templateUrl: 'donations.html',
})
export class DonationsPage {

    donations = {};

    constructor(public navCtrl: NavController, public donationsProvider: DonationsProvider) {
        this.donationsProvider.getDonations()
        .then(data=> {
            console.log(data);
            this.donations = data;
        })
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad DonationsPage');
    }

}
