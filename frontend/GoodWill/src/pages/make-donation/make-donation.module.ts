import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MakeDonationPage } from './make-donation';

@NgModule({
  declarations: [
    MakeDonationPage,
  ],
  imports: [
    IonicPageModule.forChild(MakeDonationPage),
  ],
})
export class MakeDonationPageModule {}
