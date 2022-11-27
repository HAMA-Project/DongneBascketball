import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreeboardComponent } from './freeboard/freeboard.component';
import { FreeboardCreateComponent } from './freeboard/freeboard-create/freeboard-create.component';
import { GuestAnnouncementComponent } from './guest-announcement/guest-announcement.component';
import { HomeComponent } from './home/home.component';
import { QuestionAnswerComponent } from './question-answer/question-answer.component';
import { FreeboardDetailComponent } from './freeboard/freeboard-detail/freeboard-detail.component';
import { FreeboardResolverService } from './freeboard/freeboard-resolve.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'guest-announcement', component: GuestAnnouncementComponent },
  { path: 'freeboard', component: FreeboardComponent },
  { path: 'freeboard/create', component: FreeboardCreateComponent },
  { 
    path: 'freeboard/:freeboardPost-id', component: FreeboardDetailComponent,
    resolve: { freeboardPost: FreeboardResolverService }
  },
  { path: 'question-answer', component: QuestionAnswerComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
