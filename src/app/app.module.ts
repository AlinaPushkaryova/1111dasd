import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  IgxInputGroupModule,
  IgxSliderModule
} from 'igniteui-angular';

import { AppComponent } from './app.component';
import { UserCardComponent } from './components/user/user-card/user-card.component';
import { UserInfoComponent } from './components/user/user-info/user-info.component';
import { UserService } from './components/user/user.service';
import { HttpClientModule } from '@angular/common/http';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { SortBarComponent } from './components/sort-bar/sort-bar.component';




@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    UserCardComponent,
    FilterBarComponent,
    SortBarComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    IgxInputGroupModule,
    IgxSliderModule

  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
