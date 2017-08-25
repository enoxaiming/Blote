import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MonitorComponent } from './monitor/monitor.component';
import { ResultComponent } from './result/result.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import {Router, RouterModule} from "@angular/router";
import {router} from "./app.router";

import { CookieService } from './service/cookie.service';
import { AuthGuard } from './service/auth-guard.service';
import { AuthService } from './service/auth.service';
import { VoteService } from './service/vote.service';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { SurveyComponent } from './survey/survey.component';
import { CreateComponent } from './create/create.component';

//Animation Part
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Auth
import { FacebookModule } from 'ngx-facebook';

//For ngModule
import { FormsModule } from '@angular/forms';
import { FullComponent } from './full/full.component';
import { SimpleComponent } from './simple/simple.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MonitorComponent,
    ResultComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    AboutComponent,
    SurveyComponent,
    CreateComponent,
    FullComponent,
    SimpleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    HttpModule,
    BrowserAnimationsModule,
    FacebookModule.forRoot(),
    FormsModule
  ],
  providers: [CookieService,AuthGuard,AuthService,VoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
