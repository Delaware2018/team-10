import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { RewardsProvider} from '../../providers/rewards/rewards';
import { DonationsProvider} from '../../providers/donations/donations';
/**
 * Generated class for the MakeDonationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-make-donation',
  templateUrl: 'make-donation.html',
})
export class MakeDonationPage {

    amount = 0;
  constructor(public donationsProvider: DonationsProvider, public rewardsProvider: RewardsProvider, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  donate(value) {
      this.amount = value;
  }
  submitDonation() {
  console.log("I ran");
  this.donationsProvider.addMoneyDonated(this.amount);
  this.amount=0;
  let alert = this.alertCtrl.create({
      title: 'Thank you for donating!',
      subTitle: 'We <3 You',
      buttons: [{
      text: 'Dismiss',
      role: 'cancel',
      handler: () => {
        this.navCtrl.pop();
      }
      }]
    });
    alert.present();
    this.rewardsProvider.addPoints(200);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MakeDonationPage');
  }

}
