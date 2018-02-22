import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Iuser } from './iuser';
import { Ipost } from './ipost';
import { Itag } from './itag';

const HOST = 'http://localhost:3000';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Iuser[]> {
    return this.http.get(`${HOST}/users`) as Observable<Iuser[]>;
  }

  getUser(id: number): Observable<Iuser> {
    // return this.http.get(`${HOST}/users/id`) as Observable<Iuser>;
    return this.http.get('http://localhost:3000/users/' + id) as Observable<Iuser>;

  }

  getPosts(): Observable<Ipost[]> {
    return this.http.get(`${HOST}/posts`) as Observable<Ipost[]>;
  }

  updateUser(user: Iuser): Observable<Iuser> {
    return this.http.put<Iuser>(`${HOST}/users/${user.id}`, user) as Observable<Iuser>;

  }
   getUserposts(id: number): Observable<Ipost[]> {
     return this.http.get(`${HOST}/users/${id}/posts`) as Observable<Ipost[]>;
   }

   getPost(id: number): Observable<Ipost> {
    return this.http.get(`${HOST}/posts/${id}`) as Observable<Ipost>;
  }
  updatePost(post: Ipost): Observable<Ipost> {
    return this.http.put(`${HOST}/posts/${post.id}`, post) as Observable<Ipost>;
  }

  getTags(): Observable<Itag[]> {
    return this.http.get(`${HOST}/tags`) as Observable<Itag[]>;
  }

  deletePost(id: number) {
     return this.http.delete<any>(`${HOST}/posts/${id}`);
  }
  createPost(post: Ipost) {
    return this.http.post<Ipost>(`${HOST}/posts`, post);
  }
}
