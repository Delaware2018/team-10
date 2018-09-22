import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DonationsPage } from '../donations/donations';
import { MakeDonationPage } from '../make-donation/make-donation';
import { UserProvider } from '../../providers/user/user';
import { RewardsProvider } from '../../providers/rewards/rewards';

@Component({
  selector: 'page-rewards',
  templateUrl: 'rewards.html'
})
export class RewardsPage {

    rewards = []
    profile = {}

  constructor(public navCtrl: NavController, public userProvider : UserProvider, public rewardsProvider: RewardsProvider) {
      this.rewardsProvider.getRewards()
      .then(data => {
          console.log(data);
          this.rewards = data;
      })

      this.userProvider.getProfile()
      .then(data=> {
          console.log("profile", data);
          this.profile = data;
      })
  }

  redeem(points){
      this.rewardsProvider.addPoints(-points).then(data=> {
          this.userProvider.getProfile()
          .then(data=> {
              console.log(data);
              this.profile = data;
          })
      })
      console.log("You redeemed a giftcard");
  }

  ionViewDidEnter() {
      this.userProvider.getProfile()
      .then(data=> {
          console.log(data);
          this.profile = data;
      })
  }
  donate(){
      this.navCtrl.push(MakeDonationPage);
  }
}
