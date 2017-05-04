import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { routes } from './app.router';
import { ProfileComponent } from './profile/profile.component';
import { AllTweetsService } from './all-tweets.service';
import { UserService } from './user.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [AllTweetsService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
