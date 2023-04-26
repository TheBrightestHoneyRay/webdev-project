import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
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
import { FavouritesComponent } from './favourites/favourites.component';
import { BundlesComponent } from './bundles/bundles.component';
import { NewsComponent } from './news/news.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CommentsComponent } from './comments/comments.component';
import { DiscussionsComponent } from './discussions/discussions.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { DiscussionCommentariesComponent } from './discussion-commentaries/discussion-commentaries.component';
import { DiscussionBundleComponent } from './discussion-bundle/discussion-bundle.component';
import { MycomicsListComponent } from './mycomics-list/mycomics-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ComicsListComponent,
    LogInComponent,
    SignUpComponent,
    MainPageComponent,
    TopListComponent,
    ComicsDetailsComponent,
    FavouritesComponent,
    BundlesComponent,
    NewsComponent,
    CategoriesComponent,
    CategoryListComponent,
    CommentsComponent,
    DiscussionsComponent,
    DiscussionComponent,
    DiscussionCommentariesComponent,
    DiscussionBundleComponent,
    MycomicsListComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
