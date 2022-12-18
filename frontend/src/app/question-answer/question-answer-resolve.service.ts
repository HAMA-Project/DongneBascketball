import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { QuestionAnswerPost } from '../domain/question-answer';
import { questionAnswerPostSampleData } from '../sample-data';

@Injectable({
  providedIn: 'root',
})
export class QuestionAnswerResolverService
  implements Resolve<QuestionAnswerPost>
{
  constructor() {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<QuestionAnswerPost> {
    const postId = route.params['id'];
    return questionAnswerPostSampleData[postId - 1] as any;
  }
}
