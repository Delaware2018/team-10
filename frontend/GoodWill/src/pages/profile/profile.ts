import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { MakeDonationPage } from '../make-donation/make-donation';
import { DonationsProvider } from '../../providers/donations/donations'

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

    profile = {};
    numberOfDonations = 0;
    moneyDonated = 0;

  constructor(public donationsProvider: DonationsProvider, public navCtrl: NavController, public userProvider: UserProvider) {
    this.moneyDonated = this.donationsProvider.getMoneyDonated();

      this.userProvider.getProfile()
      .then(data=> {
          console.log(data);
          this.profile = data;
      })

      this.donationsProvider.getNumberOfDonations()
      .then(data=> {
          console.log(data);
          this.numberOfDonations = data;
      })

  }

  ionViewDidEnter() {
      this.userProvider.getProfile()
      .then(data=> {
          console.log(data);
          this.profile = data;
      })

      this.donationsProvider.getNumberOfDonations()
      .then(data=> {
          console.log(data);
          this.numberOfDonations = data;
      })

      this.moneyDonated = this.donationsProvider.getMoneyDonated();
  }
  donate(){
      this.navCtrl.push(MakeDonationPage);
  }

}
