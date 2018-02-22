import {Ipost} from './ipost';
import {Iuser} from './iuser';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()

export class UserService {

  constructor(private api: ApiService) { }

  selectedUser: Iuser;
  userReady$ = new Subject<Iuser>();

  getUser(id): Observable<Iuser> {
    return this.api.getUser(id).pipe(
      tap ( u => this.selectedUser = u),
      tap ( u => this.userReady$.next(u))
    );
  }

  update(): Observable<Iuser> {
   return this.api.updateUser(this.selectedUser) as Observable<Iuser>;
  }

  getUserposts() {
    return this.api.getUserposts(this.selectedUser.id);
  }

}
