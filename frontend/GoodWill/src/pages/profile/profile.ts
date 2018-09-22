import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

    profile = {};

  constructor(public navCtrl: NavController, public userProvider: UserProvider) {
      this.userProvider.getProfile()
      .then(data=> {
          console.log(data);
          this.profile = data;
      })  }

}
