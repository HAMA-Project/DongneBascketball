import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreeboardComponent } from './freeboard/freeboard.component';
import { GuestAnnouncementComponent } from './guest-announcement/guest-announcement.component';
import { HomeComponent } from './home/home.component';
import { QuestionAnswerComponent } from './question-answer/question-answer.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'guest-announcement', component: GuestAnnouncementComponent },
  { path: 'freeboard', component: FreeboardComponent },
  { path: 'question-answer', component: QuestionAnswerComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
