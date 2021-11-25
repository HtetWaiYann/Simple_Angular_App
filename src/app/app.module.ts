import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
// Components
import { AppComponent } from './app.component';
import { SignupComponent } from './user-auth/signup/signup.component';
import { SigninComponent } from './user-auth/signin/signin.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';

//Modules
import { CookieModule } from 'ngx-cookie';
import { FormsModule } from '@angular/forms';
import { LoadingButtonComponent } from './shared/components/loading-button/loading-button.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    DashboardComponent,
    LoadingButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CookieModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
