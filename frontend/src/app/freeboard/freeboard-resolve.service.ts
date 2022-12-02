import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { FreeBoardPost } from '../domain/freeboard';
import { freeBoardPostSampleData } from '../sample-data';

@Injectable({
  providedIn: 'root',
})
export class FreeboardResolverService implements Resolve<FreeBoardPost> {
  constructor() {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<FreeBoardPost> {
    const postId = route.params['id'];
    return freeBoardPostSampleData[postId - 1] as any;
  }
}
