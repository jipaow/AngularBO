import {MatDialog} from '@angular/material/dialog';
import {Ipost} from './ipost';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { tap } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PostService {

  constructor(private api: ApiService , public dialog: MatDialog) { }

  selectedPost: Ipost;
  postReady$ = new Subject<Ipost>();

  getPost(id: number) {
    return this.api.getPost(id).pipe(
      tap ( post => this.selectedPost = post),
      tap ( post => this.postReady$.next(post))
    );
  }
  updatePost() {
    return this.api.updatePost(this.selectedPost);
   }

   getTags() {
     return this.api.getTags();
   }

   delete(id: number): any {
     return this.api.deletePost(id);
   }

   create(post) {
     return this.api.createPost(post);
   }



}
