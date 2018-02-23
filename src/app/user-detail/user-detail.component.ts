import {Iuser} from '../core/iuser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../core/user.service';
import { ComfirmDeleteComponent } from '../comfirm-delete/comfirm-delete.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor( private route: ActivatedRoute, private userService: UserService, private dialog: MatDialog, private router: Router) { }
  id: number;
  user: Iuser;
  errText: String;

  ngOnInit() {
   // ecoute les changements de parametres de l'url
  //  this.route.paramMap.subscribe( params => {
  //    this.id = +params.get('id');
  //
  this.id = +this.route.snapshot.paramMap.get('id');
  this.userService.getUser(this.id).subscribe(
    user => this.user = user,
    error => this.errText = 'la requete a échoué',
  );
  }

  openDeleteDialog(e: MouseEvent): void {

    e.preventDefault();
    const dialogRef = this.dialog.open(ComfirmDeleteComponent, {
      width: '250px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed: ', result);
      if (result) {
       this.deleteUser();
      }
    });
  }

  deleteUser() {
    this.userService.delete(this.user.id).subscribe(
      () => {
        this.router.navigate(['/users/']);
      },
      err => {
        console.log(err);
      }
    );
  }

}
