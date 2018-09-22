import { Component } from '@angular/core';

import { StoriesPage } from '../stories/stories';
import { RewardsPage } from '../rewards/rewards';
import { ProfilePage } from '../profile/profile';
import { DonationsPage } from '../donations/donations';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProfilePage;
  tab2Root = RewardsPage;
  tab3Root = StoriesPage;
  tab4Root = DonationsPage;

  constructor() {

  }
}
