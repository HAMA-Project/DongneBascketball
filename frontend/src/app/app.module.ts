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
import { FreeboardDetailComponent } from './freeboard/freeboard-detail/freeboard-detail.component';
import { FreeboardCreateComponent } from './freeboard/freeboard-create/freeboard-create.component';
import { QuestionAnswerCreateComponent } from './question-answer/question-answer-create/question-answer-create.component';
import { QuestionAnswerDetailComponent } from './question-answer/question-answer-detail/question-answer-detail.component';
import { GuestAnnouncementCreateComponent } from './guest-announcement/guest-announcement-create/guest-announcement-create.component';
import { GuestAnnouncementDetailComponent } from './guest-announcement/guest-announcement-detail/guest-announcement-detail.component';
import { ConfirmDialog, DeleteDialog } from './common/dialogs/dialog/dialog.component';

const dialogs = [
  SignInDialog,
  SignUpDialog,
  ConfirmDialog,
  DeleteDialog,
];

@NgModule({
  declarations: [
    AppComponent,
    GlobalNavBarComponent,
    HomeComponent,
    SideNavComponent,
    GuestAnnouncementComponent,
    FreeboardComponent,
    QuestionAnswerComponent,
    FreeboardDetailComponent,
    FreeboardCreateComponent,
    QuestionAnswerCreateComponent,
    QuestionAnswerDetailComponent,
    GuestAnnouncementCreateComponent,
    GuestAnnouncementDetailComponent,
    ...dialogs
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
