import {Iuser} from '../core/iuser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../core/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor( private route: ActivatedRoute, private userService: UserService) { }
  id: number;
  user: Iuser;
  errText: String;

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
   // ecoute les changements de parametres de l'url
  //  this.route.paramMap.subscribe( params => {
  //    this.id = +params.get('id');
  //
  this.userService.getUser(this.id).subscribe(
    user => this.user = user,
    error => this.errText = 'la requete a échoué'
  );
  }

}
