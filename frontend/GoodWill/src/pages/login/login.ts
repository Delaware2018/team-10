import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';
// import { HomePage } from '../home/home';
// import { AuthService } from '../../services/auth.service';
import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';
import { UrlServiceProvider } from '../../providers/url-service/url-service';
import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	loginForm: FormGroup;
	loginError: string;
    profile = {};
	constructor(
		private navCtrl: NavController,
        private urlServiceProvider: UrlServiceProvider,
        private userProvider: UserProvider,
		private fb: FormBuilder
	) {
		this.loginForm = fb.group({
			phoneNumber: ['', Validators.compose([Validators.required, Validators.phoneNumber])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
        })
    }


  login() {
		// let data = this.loginForm.value;
        //
		// if (!data.phoneNumber) {
		// 	return;
		// }
        //
		// let credentials = {
		// 	phoneNumber: data.phoneNumber,
		// 	password: data.password
		// };
		// this.auth.signInWithPhonenumber(credentials)
		// 	.then(
		// 		() => this.navCtrl.setRoot(HomePage),
		// 		error => this.loginError = error.message
		// 	);
        this.navCtrl.push(TabsPage);
    }

  signup(){
    this.navCtrl.push(SignupPage);
  }

}
