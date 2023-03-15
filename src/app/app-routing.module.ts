import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRoutineComponent } from 'src/create-routine/create-routine.component';
import { CreateRoutine2Component } from 'src/create-routine2/create-routine2.component';
import { CreateRoutine3Component } from 'src/create-routine3/create-routine3.component';
import { CreateReminderComponent } from 'src/create-reminder/create-reminder.component';
import { CreateReminderBuyComponent } from 'src/create-reminder-buy/create-reminder-buy.component';
import { CreateReminderBuyMapComponent } from 'src/create-reminder-buy-map/create-reminder-buy-map.component';
import { ProfileComponent } from 'src/profile/profile.component';
import { ProfileUpdateComponent } from 'src/profile-update/profile-update.component';
import { LoginComponent } from 'src/login/login.component';
import { SuccessComponent } from 'src/success/success.component';
import { SigninComponent } from 'src/signin/signin.component';
import { HomeComponent } from 'src/home/home.component';
import { ActivityComponent } from 'src/activity/activity.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'createroutine', component: CreateRoutineComponent},
  {path: 'createroutinecomponent2', component: CreateRoutine2Component},
  {path: 'createroutinecomponent3', component: CreateRoutine3Component},
  {path: 'createreminder', component: CreateReminderComponent},
  {path: 'createreminderbuycomponent', component: CreateReminderBuyComponent},
  {path: 'createreminderbuymapcomponent', component: CreateReminderBuyMapComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'profileupdate', component: ProfileUpdateComponent},
  {path: 'successcomponent', component: SuccessComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'home', component: HomeComponent},
  {path: 'activity', component: ActivityComponent},
  {path: '', redirectTo: "/home", pathMatch:"full"}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
