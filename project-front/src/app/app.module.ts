import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NewsBarComponent } from './news-bar/news-bar.component';
import { AuthorizedListComponent } from './authorized-list/authorized-list.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { TopContentComponent } from './top-content/top-content.component';
import { SiteMainActivityComponent } from './site-main-activity/site-main-activity.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    NewsBarComponent,
    AuthorizedListComponent,
    MainPageComponent,
    SignUpComponent,
    LogInComponent,
    TopContentComponent,
    SiteMainActivityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
