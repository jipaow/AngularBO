import { MatDialog } from '@angular/material/dialog';
import { Ipost } from '../core/ipost';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from '../core/post.service';
import { ComfirmDeleteComponent } from '../comfirm-delete/comfirm-delete.component';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  post: Ipost;
  errText: string;

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.postService
      .getPost(id)
      .subscribe(
        post => (this.post = post),
        err => (this.errText = 'Cet article n\'existe pas')
      );
  }
  returnlevel() {
    let level;
    if (this.post.level === 1) {
      level = 'Beginner';
    } else if (this.post.level === 2) {
      level = 'Confirmated';
    } else {
      level = 'Expert';
    }
    return level;
  }

  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(ComfirmDeleteComponent, {
      width: '250px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed: ', result);
      if (result) {
       this.deletePost();
      }
    });
  }

  deletePost() {
    this.postService.delete(this.post.id).subscribe(
      () => {
        this.router.navigate(['/posts/']);
      },
      err => {
        console.log(err);
      }
    );
  }
}
