///<reference path="schedules/schedule-list.component.ts"/>
///<reference path="../../node_modules/@angular/common/http/src/module.d.ts"/>
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {ScheduleListComponent} from './schedules/schedule-list.component';
import {HttpClientJsonpModule} from '@angular/common/http';
import {WelcomeComponent} from "./home/welcome.component";

@NgModule({
  declarations: [
    AppComponent,
    ScheduleListComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
