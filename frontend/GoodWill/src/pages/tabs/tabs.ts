import { Component } from '@angular/core';

import { StoriesPage } from '../stories/stories';
import { RewardsPage } from '../rewards/rewards';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProfilePage;
  tab2Root = StoriesPage;
  tab3Root = RewardsPage;

  constructor() {

  }
}
