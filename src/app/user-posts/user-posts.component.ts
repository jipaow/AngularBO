import {Ipost} from '../core/ipost';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../core/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  posts: Ipost[];


  ngOnInit() {
    this.userService.getUserposts().subscribe(
      posts => this.posts = posts
    );
  }
  selectPost(id: number) {
    this.router.navigate(['/post', id]);

  }

}
