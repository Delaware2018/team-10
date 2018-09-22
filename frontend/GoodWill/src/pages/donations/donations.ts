import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DonationsProvider } from '../../providers/donations/donations';

@IonicPage()
@Component({
    selector: 'page-donations',
    templateUrl: 'donations.html',
})
export class DonationsPage {

    donations = Array();

    constructor(public navCtrl: NavController, public donationsProvider: DonationsProvider) {
        this.donationsProvider.getDonations()
        .then(data=> {
            this.donations = data;
            console.log(this.donations);
        })
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad DonationsPage');
    }

}
