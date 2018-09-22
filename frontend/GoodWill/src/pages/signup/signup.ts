import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';
// import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'as-page-signup',
	templateUrl: './signup.html'
})
export class SignupPage {
	signupError: string;
	form: FormGroup;

	constructor(
		fb: FormBuilder,
		private navCtrl: NavController,
    	// private auth: AuthService
	) {
		this.form = fb.group({

			phoneNumber: ['', Validators.compose([Validators.required, Validators.phoneNumber])],

			phone: ['', Validators.compose([Validators.required, Validators.minLength(10)])],

			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
		});
		// this.form.valid = false;
  }

  signup() {
		// let data = this.form.value;
		// let credentials = {
		// 	phoneNumber: data.phoneNumber,
		// 	password: data.password
		// };
		// this.auth.signUp(credentials).then(
		// 	() => this.navCtrl.setRoot(HomePage),
		// 	error => this.signupError = error.message
		// );
  }
}
