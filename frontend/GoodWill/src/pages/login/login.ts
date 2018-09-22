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
            phoneNumber: ['', Validators.compose([Validators.required, Validators.minLength(10)])],
            password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
        })
    }


    login() {
        try {
            let phone = this.loginForm.value.phoneNumber;
            this.urlServiceProvider.setPhoneNumber(phone);
            this.navCtrl.push(TabsPage);
        } catch(error) {
            console.log(error);
        }
    }
    signup(){
        this.navCtrl.push(SignupPage);
    }

}
