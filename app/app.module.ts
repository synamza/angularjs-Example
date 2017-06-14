import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

/* 특징 모듈 */
import { ViewChildModule } from './view-child/viewChaild.module';
import { FriendModule } from './component-example/friend.module';
import { RxjsModule } from './rxjs-component/rxjs.module';
import { ContentChildModule } from './content-child-example/contentChild.module';
import { ChildFriendModule } from './component-example-tony/childFriend.module';
import { RoutingExModule } from './routing-example/routing-ex-module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ViewChildModule,
    FriendModule,
    RxjsModule,
    ContentChildModule,
    ChildFriendModule,
    RoutingExModule
  ],
  exports: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
