import {Routes} from "@angular/router";

//Add Component Here
import {MainComponent} from './main/main.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {AboutComponent} from './about/about.component';
import {SurveyComponent} from './survey/survey.component';
import {MonitorComponent} from './monitor/monitor.component';
import {ResultComponent} from './result/result.component';
import {CreateComponent} from './create/create.component';

import {AuthGuard} from './service/auth-guard.service';


export const router: Routes = [
    {
        path: '', component: MainComponent
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'signup', component: SignupComponent
    },
    {
        path: 'about', component: AboutComponent
    },
    {
        path: 'survey/:prefix', component: SurveyComponent
    },
    {
        path: 'home', component: MonitorComponent,
        canActivate:[AuthGuard]
    },
    {
        path: 'result', component: ResultComponent,
        canActivate:[AuthGuard]
    },
    {
        path: 'create', component: CreateComponent
    }
];