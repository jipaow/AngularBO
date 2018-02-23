import {Ipost} from '../core/ipost';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../core/post.service';
import { Itag } from '../core/itag';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  constructor( private postService: PostService, private route: ActivatedRoute, private router: Router) { }

  post: Ipost;
  tags: Itag[];
  editing: boolean;

  ngOnInit() {
    this.postService.getTags().subscribe(
      tags => this.tags = tags
    );
    const urlSegment = this.route.snapshot.url[0];
    if ( urlSegment && urlSegment.path === 'edit') {
      this.post = this.postService.selectedPost;
      this.postService.postReady$.subscribe(
        p => this.post = p
      );
      this.editing = true;
    } else {
      this.editing = false;
      this.post = {
        title: '',
        desc: '',
        text: '',
        img: '',
        online: false,
        level: 1,
        tagIds: [],
        userId: +this.route.parent.snapshot.paramMap.get('id')
      };
    }
  }
  onSubmit() {
    if (this.editing) {
      this.postService.updatePost().subscribe();
    } else {
      this.postService.create(this.post).subscribe(
        newPost => {
          this.router.navigate(['/post', newPost.id]);

        });
    }
    }
}
