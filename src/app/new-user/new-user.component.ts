import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/user.service';
import { Iuser } from '../core/iuser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  user: Iuser;

  constructor(private userService: UserService, private router: Router ) { }

  ngOnInit() {
  }
  createUser(user: Iuser) {
    return this.userService.create(this.user).subscribe(newUser => {this.router.navigate(['/user', newUser.id]); });
  }

}
