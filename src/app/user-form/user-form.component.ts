import {Iuser} from '../core/iuser';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/user.service';
import { MatSnackBar } from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user: Iuser;
  editing: boolean;


  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

    const Fragment = this.route.snapshot.url[this.route.snapshot.url.length - 1];
    if ( Fragment && Fragment.path === 'edit') {
      this.user = this.userService.selectedUser;
      this.userService.userReady$.subscribe(
        u => this.user = u
      );
    this.editing = true;
    } else {
      this.user = {
        name: '',
        jobTitle: '',
        image: '',
        position: {
          lat: '',
          lng: ''
        }
      };
    }
  }
    /** NO NEED si tu proteges bien ton composant avec un *ngIf
     * this.userService.userReady$.subscribe(u => (this.user = u));
     */


  onSubmit(form: NgForm) {
  if (form.invalid) {
    return;
  }
  if (this.editing) {
    this.userService.update().subscribe( user => {this.showSnack(user); });
  } else {
    this.userService.create(this.user).subscribe( user => {this.showSnack(user); });
  }
  }
  showSnack(user) {
    this.snackBar.open(
      `${this.editing ? 'UPDATED' : 'CREATED'} user ! `,
      'coucou', {duration: 500});
      this.router.navigate(['/users/']);
    }
}
