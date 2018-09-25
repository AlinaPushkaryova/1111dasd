import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UserCardComponent} from './components/user/user-card/user-card.component';
import {UserInfoComponent} from './components/user/user-info/user-info.component';
import { UserService } from './components/user/user.service';
import { HttpClientModule } from '@angular/common/http';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    UserCardComponent,
    FilterBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
