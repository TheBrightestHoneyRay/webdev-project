import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ComicsListComponent} from "./comics-list/comics-list.component";
import {AppComponent} from "./app.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {LogInComponent} from "./log-in/log-in.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {ComicsDetailsComponent} from "./comics-details/comics-details.component";
import {CategoryListComponent} from "./category-list/category-list.component";

const routes: Routes = [
  {path: 'home', component: MainPageComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'log-in', component: LogInComponent},
  {path: 'comics/:id', component: ComicsDetailsComponent},
  {path: 'category/:id', component: ComicsListComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
