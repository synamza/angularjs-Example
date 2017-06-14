import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RoutingEx } from './routing-example/routing-ex';
import { ViewChildComponent } from './view-child/viewchild.component';
import { ViewChildrenComponent } from './view-child/viewchildren.component';
import { FriendListComponent } from './component-example/parent-friend.component';
import { ParentFriendComponent } from './component-example-tony/parent-friend.component';
import { RxjsComponent } from './rxjs-component/rxjs-example-component';
import { RxjsLoginComponent } from './rxjs-component/rxjs-example-form-login';
import { ContentChildComponent } from './content-child-example/content-child.component';
//import { HeroDetailComponent }  from './hero-detail.component';

const routes: Routes = [
   { path: '', redirectTo: '/main', pathMatch: 'full' }
  ,{ path: 'main',  component: AppComponent }
  ,{ path: 'routingEx', component: RoutingEx }
  ,{ path: 'ViewChild', component: ViewChildComponent }
  ,{ path: 'viewchildren', component: ViewChildrenComponent }
  ,{ path: 'FriendList', component: FriendListComponent }
  ,{ path: 'ParentFriend', component: ParentFriendComponent }
  ,{ path: 'RxjsComponent', component: RxjsComponent }
  ,{ path: 'RxjsLoginComponent', component: RxjsLoginComponent }
  ,{ path: 'ContentChildComponent', component: ContentChildComponent }
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
