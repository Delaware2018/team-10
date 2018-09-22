import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  submitDonation() {
  console.log("I ran");
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
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MakeDonationPage');
  }

}
