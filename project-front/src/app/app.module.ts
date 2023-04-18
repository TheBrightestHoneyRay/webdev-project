import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common"
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ComicsListComponent } from './comics-list/comics-list.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TopListComponent } from './top-list/top-list.component';
import { ComicsDetailsComponent } from './comics-details/comics-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ComicsListComponent,
    LogInComponent,
    SignUpComponent,
    MainPageComponent,
    TopListComponent,
    ComicsDetailsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
