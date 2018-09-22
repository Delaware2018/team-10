import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DonationsPage } from '../donations/donations';
import { MakeDonationPage } from '../make-donation/make-donation';

@Component({
  selector: 'page-stories',
  templateUrl: 'stories.html'
})
export class StoriesPage {

  constructor(public navCtrl: NavController) {

  }

  donate(){
      this.navCtrl.push(MakeDonationPage);
  }
}
