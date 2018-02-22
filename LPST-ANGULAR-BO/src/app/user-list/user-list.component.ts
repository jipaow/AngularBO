import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/api.service';
import { Iuser } from '../core/iuser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private api: ApiService) { }

  users: Iuser[];
  errText: string;

  ngOnInit() {
    this.api.getUsers().subscribe( (data: Iuser[]) => {
      this.users = data;
    });
  }

}
