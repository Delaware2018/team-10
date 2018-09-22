import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoriesPage } from '../pages/stories/stories';
import { DonationsPage } from '../pages/donations/donations';
import { RewardsPage } from '../pages/rewards/rewards';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserProvider } from '../providers/user/user';
import { UrlServiceProvider } from '../providers/url-service/url-service';
import { DonationsProvider } from '../providers/donations/donations';
import { TimeAgoPipe } from 'time-ago-pipe';
<<<<<<< HEAD
import { MakeDonationPage } from '../pages/make-donation/make-donation'
=======
import { NgCircleProgressModule } from 'ng-circle-progress';
import { RewardsProvider } from '../providers/rewards/rewards';

>>>>>>> fd0bd00ae71c05211db1af2333e13ae264841b7c
@NgModule({
  declarations: [
    MyApp,
    StoriesPage,
    RewardsPage,
    ProfilePage,
    DonationsPage,
    StoriesPage,
    TabsPage,
    LoginPage,
    SignupPage,
    TimeAgoPipe,
    MakeDonationPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
     NgCircleProgressModule.forRoot({
       radius: 100,
       outerStrokeWidth: 16,
       innerStrokeWidth: 8,
       outerStrokeColor: "#78C000",
       innerStrokeColor: "#C7E596",
       animationDuration: 300
     })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    StoriesPage,
    RewardsPage,
    ProfilePage,
    StoriesPage,
    TabsPage,
    LoginPage,
    SignupPage,
    DonationsPage,
    MakeDonationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    UrlServiceProvider,
    DonationsProvider,
    RewardsProvider
  ]
})
export class AppModule {}
