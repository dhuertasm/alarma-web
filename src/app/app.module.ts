import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import  { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from 'src/home/home.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SigninComponent } from 'src/signin/signin.component';
import { ActivityComponent } from 'src/activity/activity.component';





@NgModule({
  declarations: [
    AppComponent,
      HomeComponent,
      SigninComponent,
      ActivityComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
