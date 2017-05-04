import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';


export const router: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'login', component: LoginComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
