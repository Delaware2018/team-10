import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DonationsPage } from '../donations/donations';
import { MakeDonationPage } from '../make-donation/make-donation';

@Component({
  selector: 'page-rewards',
  templateUrl: 'rewards.html'
})
export class RewardsPage {

  constructor(public navCtrl: NavController) {

  }
  donate(){
      this.navCtrl.push(MakeDonationPage);
  }
}
