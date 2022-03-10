import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {NotFoundComponent} from "./auth/not-found/not-found.component";
import {HomeComponent} from "./auth/home/home.component";

const routes: Routes = [
  {
    path: '', redirectTo: 'home',pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
//  auth nav
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: '**', component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
