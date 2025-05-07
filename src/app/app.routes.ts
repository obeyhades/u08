import { Routes } from '@angular/router';
import { StartSiteComponent } from './pages/start-site/start-site.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

export const routes: Routes = [
  {path: '', component: StartSiteComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component:RegisterPageComponent},
];

