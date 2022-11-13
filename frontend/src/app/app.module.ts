import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared.module';

import { GlobalNavBarComponent } from './common/global-nav-bar/global-nav-bar.component';
import { HomeComponent } from './home/home.component';
import { SideNavComponent } from './common/side-nav/side-nav.component';
import { GuestAnnouncementComponent } from './guest-announcement/guest-announcement.component';
import { FreeboardComponent } from './freeboard/freeboard.component';
import { QuestionAnswerComponent } from './question-answer/question-answer.component';
import { SignInDialog } from './common/dialogs/sign-in/sign-in.dialog';
import { SignUpDialog } from './common/dialogs/sign-up/sign-up.dialog';

@NgModule({
  declarations: [
    AppComponent,
    GlobalNavBarComponent,
    HomeComponent,
    SideNavComponent,
    GuestAnnouncementComponent,
    FreeboardComponent,
    QuestionAnswerComponent,
    SignInDialog,
    SignUpDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }