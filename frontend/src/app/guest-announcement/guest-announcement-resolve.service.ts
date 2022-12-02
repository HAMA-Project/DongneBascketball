import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { GuestPost } from '../domain/guest';
import { guestPostSampleData } from '../sample-data';

@Injectable({
  providedIn: 'root',
})
export class GuestAnnouncementResolverService implements Resolve<GuestPost> {
  constructor() {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<GuestPost> {
    const postId = route.params['id'];
    return guestPostSampleData[postId - 1] as any;
  }
}
